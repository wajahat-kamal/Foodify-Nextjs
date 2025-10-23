"use client";
import { Mail, Lock, Eye, EyeOff, ArrowLeft } from "lucide-react";
import { useState } from "react";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async () => {};

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 bg-[#EEF2FE] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('header_img.png')" }}
    >
      <div
        className="
          w-full max-w-md p-8
          rounded-2xl border border-white/20
          bg-secondary backdrop-blur-lg
          shadow-2xl
        "
      >
        {/* ---------- Header ---------- */}
        <div className="mb-8 flex items-center">
          <button
            type="button"
            // onClick={() => navigate("/")}
            className="
              p-2 rounded-full hover:bg-gray-200 transition
              text-gray-200 hover:text-gray-800
            "
          >
            <ArrowLeft size={20} />
          </button>
          <div className="flex-1 text-center">
            <h1 className="text-3xl font-extrabold text-gray-100">
              <span className="text-primary">Admin</span> Login
            </h1>
            <p className="text-sm text-gray-100 mt-2">
              Sign in to manage your blog dashboard
            </p>
          </div>
        </div>

        {/* ---------- Form ---------- */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-200 mb-1">
              Email Address
            </label>
            <div className="relative">
              <Mail className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-200" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={(e: any) => setFormData(e.target.value)}
                required
                placeholder="admin@example.com"
                className="
                  w-full pl-10 pr-4 py-2 rounded-lg
                  border border-gray-200
                  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200
                  outline-none text-gray-200
                  transition duration-200
                "
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-200 mb-1">
              Password
            </label>
            <div className="relative">
              <Lock className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-200" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={(e: any) => setFormData(e.target.value)}
                required
                placeholder="••••••••"
                className="
                  w-full pl-10 pr-10 py-2 rounded-lg
                  border border-gray-200
                  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200
                  transition duration-200
                "
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="
                  absolute right-3 top-1/2 -translate-y-1/2
                  text-gray-200 transition
                "
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="
              w-full py-3
              bg-primary
              text-white font-semibold text-lg rounded-lg
              shadow-md
              hover:shadow-xl hover:scale-[1.02]
              transition-all duration-300
            "
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
