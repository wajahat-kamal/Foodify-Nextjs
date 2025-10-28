import { connectDB } from "@/lib/mongodb";
import MenuItem from "@/models/MenuItem";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    const deleted = await MenuItem.findByIdAndDelete(params.id);
    if (!deleted) {
      return NextResponse.json({ message: "Item not found" }, { status: 404 });
    }
    return NextResponse.json({ message: "Item deleted successfully" });
  } catch (error) {
    return NextResponse.json({ error: "Error deleting item" }, { status: 500 });
  }
}
