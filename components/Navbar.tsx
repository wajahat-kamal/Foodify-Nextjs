'use client'

import React, { useState, useEffect } from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const NAV_ITEMS = ["Home", "About", "Projects", "Testimonials", "Contact"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top nav */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-xl bg-black/40 border-b border-white/10 shadow-sm"
            : "backdrop-blur-md bg-transparent"
        } px-6 md:px-10 lg:px-40 py-4 flex items-center justify-between`}
      >
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer select-none">
          <img src="/logo.svg" alt="Homify" className="w-9 h-9 object-contain" />
          <h1 className="text-2xl font-bold text-white tracking-tight">HOMIFY</h1>
        </div>

        {/* Desktop links */}
        <ul className="hidden md:flex space-x-8 text-white/90 font-medium">
          {NAV_ITEMS.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="relative transition-all duration-300 hover:text-primary after:content-[''] after:block after:h-[2px] after:w-0 hover:after:w-full after:bg-primary after:transition-all after:duration-300 after:mt-1"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop signup */}
        <div className="hidden md:block">
          <button className="bg-white text-gray-800 font-medium px-6 py-2 rounded-full transition-all duration-300 hover:bg-primary shadow-md hover:shadow-lg">
           Admin Login
          </button>
        </div>

        {/* Mobile burger */}
        <div className="md:hidden">
          <Image
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            className="p-2 w-10 h-10 rounded-md text-white hover:bg-white/10 transition cursor-pointer"
            src={assets.menu_icon}
            alt="menu"
          />
        </div>
      </nav>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        } z-40`}
        onClick={() => setIsOpen(false)}
      />

      {/* Right slide panel */}
      <aside
        id="mobile-menu"
        className={`fixed top-0 right-0 h-full w-72 bg-black/95 backdrop-blur-md shadow-2xl transform transition-transform duration-300 ease-in-out z-[60] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!isOpen}
      >
        <div className="p-6 flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src="/logo.svg" alt="Homify" className="w-8 h-8 object-contain" />
              <h2 className="text-lg font-bold text-white">HOMIFY</h2>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
              className="p-2 rounded-md text-white hover:bg-white/10 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
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
                    className="block text-white text-lg font-medium hover:text-primary transition"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile signup */}
          <div className="mt-auto">
            <button
              onClick={() => setIsOpen(false)}
              className="w-full bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-md"
            >
              Admin Login
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
