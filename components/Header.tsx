"use client"
import React from "react";
import Navbar from "./Navbar";

function Header() {
  return (
    <header
      id="home"
      className="relative h-screen w-full bg-cover bg-fixed bg-center flex flex-col items-center justify-center text-center overflow-hidden"
      style={{ backgroundImage: "url('header_img.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px] z-0"></div>

      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full z-20">
        <Navbar />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 px-4 sm:px-10 mt-10 sm:mt-0">
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-semibold text-white drop-shadow-lg leading-tight">
          Delight in Every Bite{" "}
          <span className="block text-primary text-2xl sm:text-4xl md:text-6xl mt-2">
            Welcome to Foodify
          </span>
        </h1>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-10 sm:mt-12">
          <a
            href="/menu"
            className="border border-white text-white text-sm sm:text-base px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-medium transition-all duration-300 hover:bg-white hover:text-black hover:scale-105"
          >
            Explore Menu
          </a>
          <a
            href="#contact"
            className="bg-primary/95 text-black text-sm sm:text-base px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-medium transition-all duration-300 hover:bg-primary hover:scale-105"
          >
            Order Now
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
