"use client";
import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "@/redux/slices/authSlice";
import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";

export default function DashboardNavbar() {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("token");
    router.push("/");
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0B111E]/90 backdrop-blur-md border-b border-gray-800/50 shadow-lg px-4 md:px-10 py-4 flex items-center justify-between">
      {/* Logo */}
      <div
        className="flex items-center gap-1 md:gap-3 cursor-pointer select-none group"
        onClick={() => router.push("/")}
      >
        <img
          src="/logo.svg"
          alt="Foodify Logo"
          className="w-9 h-9 object-contain transition-transform duration-300 group-hover:scale-110"
        />
        <h1 className="text-2xl font-extrabold text-white tracking-tight group-hover:text-yellow-400 transition-colors duration-300">
          FOODIFY
        </h1>
      </div>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 
        text-white font-medium md:font-semibold px-3 md:px-5 py-1 md:py-2 rounded-full shadow-md hover:shadow-blue-500/30 
        transition-all duration-300 active:scale-95"
      >
        <LogOut className="w-5 h-5" />
        <span>Logout</span>
      </button>
    </nav>
  );
}
