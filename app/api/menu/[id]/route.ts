import { connectDB } from "@/lib/mongodb";
import MenuItem from "@/models/MenuItem";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();

    // ✅ Await the params Promise
    const { id } = await context.params;

    if (!id) {
      return NextResponse.json({ success: false, message: "No ID provided" }, { status: 400 });
    }

    const deleted = await MenuItem.findByIdAndDelete(id);

    if (!deleted) {
      return NextResponse.json({ success: false, message: "Item not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: "Item deleted successfully" });
  } catch (error) {
    console.error("Error deleting item:", error);
    return NextResponse.json(
      { success: false, message: "Server error while deleting item" },
      { status: 500 }
    );
  }
}
