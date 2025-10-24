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
    <aside className="fixed top-16 left-0 md:w-64 w-20 bg-white h-[calc(100vh-4rem)] border-r border-gray-200 shadow-sm flex flex-col">
      <nav className="flex-1 p-4 space-y-3">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center justify-center md:justify-start gap-3 w-full px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                isActive
                  ? "bg-blue-100 text-blue-600"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
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
