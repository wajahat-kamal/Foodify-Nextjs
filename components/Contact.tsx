"use client";

import React, { useState } from "react";
import { toast } from "react-toastify";

const Contact: React.FC = () => {
  const [result, setResult] = useState<string>("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");

    const form = event.currentTarget;
    const formData = new FormData(form);

    // ✅ Use Next.js environment variable instead of Vite syntax
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3_ACCESS_KEY || "");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("");
        toast.success("Form Submitted Successfully");
        form.reset();
      } else {
        console.error("Error", data);
        setResult("");
        toast.error(data.message || "Something went wrong!");
      }
    } catch (error) {
      console.error("Fetch error:", error);
      setResult("");
      toast.error("Network error! Please try again.");
    }
  };

  return (
    <section
      id="contact"
      className="relative text-center py-16 pt-20 px-6 lg:px-32 text-white overflow-hidden"
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 pointer-events-none"></div>

      {/* Heading */}
      <div className="relative mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3 tracking-tight">
          Contact{" "}
          <span className="text-primary font-light underline underline-offset-4 decoration-2">
            With Us
          </span>
        </h1>
        <p className="text-gray-400 max-w-md mx-auto text-sm sm:text-base">
          Ready to make a move? Let’s build your dream home together.
        </p>
      </div>

      {/* Contact Form */}
      <form
        onSubmit={onSubmit}
        className="relative max-w-2xl mx-auto text-gray-300 bg-[#101827]/40 border border-white/10 backdrop-blur-md p-4 sm:p-6 rounded-2xl shadow-lg"
      >
        {/* Name + Email */}
        <div className="flex flex-wrap gap-4 mb-4">
          <div className="w-full md:w-[48%] text-left">
            <label className="text-sm font-medium">Your Name</label>
            <input
              type="text"
              name="Name"
              placeholder="John Doe"
              required
              className="w-full border border-gray-700 bg-[#0d1320] rounded-lg py-3 px-4 mt-2 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/60 focus:border-transparent transition-all duration-300"
            />
          </div>

          <div className="w-full md:w-[48%] text-left">
            <label className="text-sm font-medium">Your Email</label>
            <input
              type="email"
              name="Email"
              placeholder="john@example.com"
              required
              className="w-full border border-gray-700 bg-[#0d1320] rounded-lg py-3 px-4 mt-2 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/60 focus:border-transparent transition-all duration-300"
            />
          </div>
        </div>

        {/* Message */}
        <div className="text-left mb-4">
          <label className="text-sm font-medium">Message</label>
          <textarea
            name="Message"
            placeholder="Write your message..."
            required
            className="w-full border border-gray-700 bg-[#0d1320] rounded-lg py-3 px-4 mt-2 h-48 resize-none text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/60 focus:border-transparent transition-all duration-300"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-12 rounded-lg transition-all duration-300 shadow-md hover:shadow-primary/30"
        >
          {result ? result : "Send Message"}
        </button>
      </form>
    </section>
  );
};

export default Contact;
