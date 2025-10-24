"use client";
import React from "react";
import Link from "next/link";
import { LayoutDashboard, FilePlus2 } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const links = [
    { href: "/admin", label: "Dashboard", icon: <LayoutDashboard className="h-5 w-5" /> },
    { href: "/admin/add-food", label: "Add Food", icon: <FilePlus2 className="h-5 w-5" /> },
  ];

  return (
    <aside className="fixed top-16 left-0 md:w-64 w-20 bg-[#0B111E] h-[calc(100vh-4rem)] border-r border-gray-800 flex flex-col">
      <nav className="flex-1 p-4 space-y-3">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center justify-center md:justify-start gap-3 w-full px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                isActive
                  ? "bg-blue-600/20 text-blue-400 border border-blue-700"
                  : "text-gray-400 hover:bg-[#141B2E] hover:text-white"
              }`}
            >
              {link.icon}
              <span className="hidden md:inline-block">{link.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
