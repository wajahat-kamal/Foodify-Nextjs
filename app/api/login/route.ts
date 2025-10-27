import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();
  if (
    email !== process.env.ADMIN_EMAIL ||
    password !== process.env.ADMIN_PASSWORD
  ) {
    return NextResponse.json(
      { success: false, message: "Invalid credentials" },
      { status: 400 }
    );
  }

  const token = jwt.sign({ email }, process.env.JWT_SECRET!, {
    expiresIn: "1h",
  });

  const response = NextResponse.json(
    { success: true, message: "Login successful", token },
    { status: 200 }
  );

  response.cookies.set('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24,
  })

  return response;
}
