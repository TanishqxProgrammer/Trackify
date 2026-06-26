import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import bg from "../assets/img.png"; 

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      className="min-h-screen flex items-center justify-center px-5 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* LIGHT overlay (very soft) */}
      <div className="absolute inset-0 bg-white/20"></div>

      {/* optional soft blur layer for premium look */}
      <div className="absolute inset-0 backdrop-blur-[1px]"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="relative z-10 w-full max-w-md bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-8"
      >
        {/* Logo */}
        <div className="flex justify-center">
          <div className="h-16 w-16 rounded-full bg-violet-500 flex items-center justify-center text-white text-2xl font-bold shadow-md">
            H
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-3xl font-bold text-center mt-5 text-gray-800">
          Habit Tracker
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Track today. Improve tomorrow.
        </p>

        {/* Form */}
        <div className="mt-8 space-y-5">
          {/* Email */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-4 focus:ring-violet-100"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Password
            </label>

            <div className="relative mt-2">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 pr-12 outline-none focus:ring-4 focus:ring-violet-100"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Forgot */}
          <div className="flex justify-end">
            <button className="text-sm text-violet-500 hover:underline">
              Forgot Password?
            </button>
          </div>

          {/* Login */}
          <button
            onClick={() => navigate("/tracker")}
            className="w-full bg-violet-500 text-white py-3 rounded-xl font-semibold hover:bg-violet-600 transition"
          >
            Login
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3">
            <hr className="flex-1 border-gray-300" />
            <span className="text-sm text-gray-400">OR</span>
            <hr className="flex-1 border-gray-300" />
          </div>

          {/* Guest */}
          <button
            onClick={() => navigate("/tracker")}
            className="w-full border border-violet-300 text-violet-500 py-3 rounded-xl hover:bg-violet-50 transition"
          >
            Continue as Guest
          </button>

          {/* Signup */}
          <p className="text-center text-sm text-gray-500">
            Don't have an account?{" "}
            <span className="text-violet-500 font-semibold cursor-pointer hover:underline">
              Sign Up
            </span>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;