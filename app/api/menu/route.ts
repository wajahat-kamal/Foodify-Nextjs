import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Menu from "@/models/MenuItem";

// ✅ GET: Fetch all menu items
export async function GET(req: NextRequest) {
  try {
    await connectDB();
    const menus = await Menu.find();
    return NextResponse.json({ success: true, menus }, { status: 200 });
  } catch (error) {
    console.error("GET /menu error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch menu items" },
      { status: 500 }
    );
  }
}

// ✅ POST: Add a new menu item
export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const body = await req.json();
    const newItem = await Menu.create(body);

    return NextResponse.json(
      { success: true, message: "Menu item added successfully", newItem },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("POST /menu error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to add menu item", error: error.message },
      { status: 500 }
    );
  }
}
