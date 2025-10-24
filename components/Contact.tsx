"use client";

import React, { useState } from "react";
import { toast } from "react-toastify";
import { Phone, Mail, MapPin, Send } from "lucide-react";

const Contact: React.FC = () => {
  const [result, setResult] = useState<string>("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending...");

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3_ACCESS_KEY || "");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Your message has been sent! 🍽️");
        setResult("");
        form.reset();
      } else {
        toast.error(data.message || "Something went wrong!");
        setResult("");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Network error! Please try again.");
      setResult("");
    }
  };

  return (
    <section
      id="contact"
      className="relative bg-[#0B111E] text-white py-20 px-6 md:px-16 lg:px-24 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0B111E] opacity-70 pointer-events-none" />

      {/* Header */}
      <div className="text-center mb-6 relative">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3">
          Get In <span className="text-yellow-400">Touch</span>
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
          Have a craving, question, or want to book a table? Our team is here to make your dining experience unforgettable.
        </p>
      </div>

      {/* Contact Info */}
      <div className="flex flex-wrap justify-center gap-6 mb-4 text-gray-300">
        <div className="flex items-center gap-3 bg-[#101827]/40 border border-white/10 px-5 py-3 rounded-xl backdrop-blur-md">
          <Phone className="text-yellow-400" />
          <span>+92 300 1234567</span>
        </div>
        <div className="flex items-center gap-3 bg-[#101827]/40 border border-white/10 px-5 py-3 rounded-xl backdrop-blur-md">
          <Mail className="text-yellow-400" />
          <span>hello@restaurant.com</span>
        </div>
        <div className="flex items-center gap-3 bg-[#101827]/40 border border-white/10 px-5 py-3 rounded-xl backdrop-blur-md">
          <MapPin className="text-yellow-400" />
          <span>Main Street, Karachi, Pakistan</span>
        </div>
      </div>

      {/* Contact Form */}
      <form
        onSubmit={onSubmit}
        className="relative max-w-2xl mx-auto text-gray-300 bg-[#101827]/40 border border-white/10 backdrop-blur-md p-6 pb-4 rounded-2xl shadow-lg"
      >
        <div className="flex flex-wrap gap-4 mb-2">
          <div className="w-full md:w-[48%] text-left">
            <label className="text-sm font-medium">Full Name</label>
            <input
              type="text"
              name="Name"
              placeholder="John Doe"
              required
              className="w-full border border-gray-700 bg-[#0d1320] rounded-lg py-3 px-4 mt-2 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400/60 focus:border-transparent transition-all duration-300"
            />
          </div>

          <div className="w-full md:w-[48%] text-left">
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              name="Email"
              placeholder="john@example.com"
              required
              className="w-full border border-gray-700 bg-[#0d1320] rounded-lg py-3 px-4 mt-2 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400/60 focus:border-transparent transition-all duration-300"
            />
          </div>
        </div>

        <div className="text-left mb-2">
          <label className="text-sm font-medium">Message</label>
          <textarea
            name="Message"
            placeholder="Tell us what you’d like to order or ask..."
            required
            className="w-full border border-gray-700 bg-[#0d1320] rounded-lg py-3 px-4 mt-2 h-44 resize-none text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400/60 focus:border-transparent transition-all duration-300"
          ></textarea>
        </div>

        <button
          type="submit"
          className="flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-yellow-400/40 w-full sm:w-auto mx-auto"
        >
          <Send className={`${result ? "animate-pulse" : ""}`} />
          {result ? result : "Send Message"}
        </button>
      </form>
    </section>
  );
};

export default Contact;
