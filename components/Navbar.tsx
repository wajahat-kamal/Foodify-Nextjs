"use client";

import React, { useState, useEffect } from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { X } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { setToken } from "@/redux/slices/authSlice";

const NAV_ITEMS = ["Home", "About", "Menu", "Reviews", "Contact"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dispatch = useDispatch();

  // ✅ Get auth state
  const { isAuthenticated } = useSelector((state: any) => state.auth);

  // ✅ Check localStorage on mount (so refresh keeps you logged in)
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) dispatch(setToken(token));
  }, [dispatch]);

  // ✅ Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-xl bg-[#0B111E]/90 border-b border-yellow-500/20 shadow-lg"
            : "bg-transparent"
        } px-4 md:px-8 lg:px-40 py-3 md:py-2 lg:py-4 flex items-center justify-between`}
      >
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer select-none">
          <img
            src="/logo.svg"
            alt="Foodify"
            className="w-8 h-8 md:w-7 md:h-7 lg:w-9 lg:h-9 object-contain"
          />
          <h1 className="text-xl md:text-lg lg:text-2xl font-bold text-yellow-400 tracking-tight">
            FOODIFY
          </h1>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6 lg:space-x-8 text-white/90 font-medium text-sm lg:text-base">
          {NAV_ITEMS.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="relative transition-all duration-300 hover:text-yellow-400 after:content-[''] after:block after:h-[2px] after:w-0 hover:after:w-full after:bg-yellow-400 after:transition-all after:duration-300 after:mt-1"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Button */}
        <div className="hidden md:block">
          {isAuthenticated ? (
            <a
              href="/admin"
              className="bg-yellow-400 text-black font-semibold px-5 py-1.5 lg:px-6 lg:py-2 rounded-full text-sm lg:text-base transition-all duration-300 hover:bg-yellow-500 shadow-md hover:shadow-yellow-500/30"
            >
              Dashboard
            </a>
          ) : (
            <a
              href="/admin-login"
              className="bg-yellow-400 text-black font-semibold px-5 py-1.5 lg:px-6 lg:py-2 rounded-full text-sm lg:text-base transition-all duration-300 hover:bg-yellow-500 shadow-md hover:shadow-yellow-500/30"
            >
              Admin Login
            </a>
          )}
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <Image
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
            className="p-2 w-9 h-9 rounded-md text-white hover:bg-white/10 transition cursor-pointer"
            src={assets.menu_icon}
            alt="menu"
          />
        </div>
      </nav>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } z-40`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Menu */}
      <aside
        className={`fixed top-0 right-0 h-full w-72 bg-[#0B111E] backdrop-blur-md shadow-2xl transform transition-transform duration-300 ease-in-out z-60 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src="/logo.svg" alt="Foodify" className="w-8 h-8" />
              <h2 className="text-lg font-bold text-yellow-400">FOODIFY</h2>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-md text-gray-300 hover:bg-yellow-400/10 hover:text-yellow-400 transition"
            >
              <X />
            </button>
          </div>

          {/* Links */}
          <nav className="mt-10 flex-1">
            <ul className="flex flex-col space-y-6">
              {NAV_ITEMS.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setIsOpen(false)}
                    className="block text-white text-lg font-medium hover:text-yellow-400 transition"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Button */}
          <div className="mb-20">
            {isAuthenticated ? (
              <a
                href="/admin"
                onClick={() => setIsOpen(false)}
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-yellow-400/30"
              >
                Dashboard
              </a>
            ) : (
              <a
                href="/admin-login"
                onClick={() => setIsOpen(false)}
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-yellow-400/30"
              >
                Admin Login
              </a>
            )}
          </div>
        </div>
      </aside>
    </>
  );
}
