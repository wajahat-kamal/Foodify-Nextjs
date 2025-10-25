"use client";
import React from "react";
import Link from "next/link";
import { LayoutDashboard, FilePlus2 } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const links = [
    {
      href: "/dashboard",
      label: "Dashboard",
      icon: <LayoutDashboard className="h-5 w-5 md:h-6 md:w-6" />,
    },
    {
      href: "/dashboard/add-food",
      label: "Add Food",
      icon: <FilePlus2 className="h-5 w-5 md:h-6 md:w-6" />,
    },
  ];

  return (
    <aside
      className="fixed top-[4rem] left-0 z-40 h-[calc(100vh-4rem)]
      w-16 md:w-64 bg-[#0B111E] border-r border-gray-800
      flex flex-col justify-between transition-all duration-300"
    >
      {/* Nav Links */}
      <nav className="flex flex-col gap-2 p-2 md:p-4 pt-6">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center justify-center md:justify-start gap-3
                px-3 py-2 md:px-4 md:py-3 rounded-lg text-sm md:text-base
                font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-blue-600/20 text-blue-400 border border-blue-700"
                    : "text-gray-400 hover:bg-[#141B2E] hover:text-white"
                }`}
            >
              {link.icon}
              <span className="hidden md:inline">{link.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Footer / Version */}
      <div className="text-[10px] md:text-xs text-gray-500 text-center py-3 border-t border-gray-800">
        © FOODIFY 2025
      </div>
    </aside>
  );
}
