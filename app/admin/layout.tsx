"use client";

import DashboardNavbar from "@/components/admin/DashboardNavbar";
import Sidebar from "@/components/admin/Sidebar";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#0B111E] text-white">
      {/* Navbar */}
      <DashboardNavbar />

      {/* Main Layout */}
      <div className="flex flex-row mt-16">
        {/* Sidebar */}
        <Sidebar />

        {/* Page Content (adjusted for sidebar width) */}
        <main className="flex-1 md:ml-64 ml-20 p-6 md:p-10 bg-[#0B111E] overflow-y-auto min-h-screen">
          {children}
        </main>
      </div>
    </div>
  );
}
