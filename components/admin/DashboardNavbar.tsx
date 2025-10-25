'use client'
import { logout } from "@/redux/slices/authSlice";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch } from "react-redux";

export default function DashboardNavbar() {

  const dispatch = useDispatch();
  const router = useRouter()

  const handleLogout = () => {
    dispatch(logout())
    localStorage.removeItem('token')
    router.push('/')
  }

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-[#0B111E]/90 border-b border-gray-800 px-6 md:px-10 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center gap-2 cursor-pointer select-none" onClick={() => router.push('/')}>
        <img src="/logo.svg" alt="Foodify Logo" className="w-9 h-9 object-contain" />
        <h1 className="text-2xl font-bold text-white tracking-tight">FOODIFY</h1>
      </div>

      {/* Logout */}
      <button
        onClick={handleLogout}
        className="bg-blue-600 text-white font-medium px-6 py-2 rounded-full transition-all duration-300 hover:bg-blue-700 shadow-md"
      >
        Logout
      </button>
    </nav>
  );
}
