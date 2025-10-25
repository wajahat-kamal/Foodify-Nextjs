"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { Lock, Mail } from "lucide-react";
import axios from "axios";

const AdminLogin: React.FC = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const router = useRouter(); // ✅ Initialize router

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      toast.error("Please fill in all fields");
      return;
    }

    try {
      setLoading(true);
      const { data } = await axios.post("/api/login", formData);

      if (data.success) {
        toast.success(data.message);
        localStorage.setItem("token", data.token);
        router.push("/admin");
      } else {
        toast.error(data.message || "Invalid credentials");
      }
    } catch (error: any) {
      console.error(error);
      toast.error(error.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="relative w-full h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/header_img.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />

      {/* Login Card */}
      <div className="relative z-10 w-[90%] max-w-md bg-white/10 border border-white/20 backdrop-blur-xl rounded-2xl p-8 text-white shadow-lg">
        {/* Title */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold mb-2">
            Admin <span className="text-yellow-400">Login</span>
          </h1>
          <p className="text-gray-300 text-sm">
            Welcome back! Please enter your credentials.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label className="text-sm font-medium mb-1 block">Email</label>
            <div className="flex items-center bg-[#0B111E]/60 border border-gray-700 rounded-lg px-3 py-2 focus-within:border-yellow-400 transition-all">
              <Mail className="text-gray-400 w-4 h-4 mr-2" />
              <input
                type="email"
                name="email"
                placeholder="admin@foodify.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-transparent text-gray-200 placeholder-gray-500 outline-none"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="text-sm font-medium mb-1 block">Password</label>
            <div className="flex items-center bg-[#0B111E]/60 border border-gray-700 rounded-lg px-3 py-2 focus-within:border-yellow-400 transition-all">
              <Lock className="text-gray-400 w-4 h-4 mr-2" />
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full bg-transparent text-gray-200 placeholder-gray-500 outline-none"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold rounded-lg transition-all duration-300 shadow-md hover:shadow-yellow-400/30 disabled:opacity-70"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-gray-400 text-sm mt-6">
          © {new Date().getFullYear()} Foodify Admin Panel
        </p>
      </div>
    </section>
  );
};

export default AdminLogin;
