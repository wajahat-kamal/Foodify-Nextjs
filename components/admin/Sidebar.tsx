import React from "react";
import { LayoutDashboard, FilePlus2 } from "lucide-react";

function Sidebar() {

  return (
    <aside className="fixed top-17 left-0 md:w-56 w-18 backdrop-blur-xl bg-black/40 h-screen border-r border-gray-200 shadow-sm flex flex-co">
      <nav className="flex-1 p-2 md:p-4 space-y-3 text-gray-700 ">
     
            <a
              href="/admin"
              className="flex items-center justify-center md:justify-start gap-3 w-full px-4 py-3 rounded-xl font-medium cursor-pointer transition-all duration-200 bg-blue-100 text-blue-600 shadow-sm hover:bg-gray-100 hover:text-gray-900"
            >
              <LayoutDashboard className="h-5 w-5" />
              <span className="hidden md:inline-block">Dashboard</span>
            </a>
            <a
              href="/admin/add-food"
              className="flex items-center justify-center md:justify-start gap-3 w-full px-3 py-3 rounded-xl font-medium cursor-pointer transition-all duration-200 bg-blue-100 text-blue-600 shadow-sm hover:bg-gray-100 hover:text-gray-900"
            >
              <FilePlus2 className="h-5 w-5" />
              <span className="hidden md:inline-block">Add Food</span>
            </a>
      </nav>
    </aside>
  );
}

export default Sidebar;
