import React from "react";

export default function AdminNavbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/70 border-b border-gray-200 shadow-sm px-6 md:px-10 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center gap-2 cursor-pointer select-none">
        <img src="/logo.svg" alt="Foodify Logo" className="w-9 h-9 object-contain" />
        <h1 className="text-2xl font-bold text-gray-800 tracking-tight">FOODIFY</h1>
      </div>

      {/* Logout */}
      <a
        href="/login"
        className="bg-blue-600 text-white font-medium px-6 py-2 rounded-full transition-all duration-300 hover:bg-blue-700 shadow-md"
      >
        Logout
      </a>
    </nav>
  );
}
