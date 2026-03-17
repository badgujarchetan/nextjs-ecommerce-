"use client";

import React, { useState } from "react";
import { Eye, EyeOff, Mail, Lock, ChevronRight } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// ✅ Schema
const loginSchema = z.object({
  email: z.string().email("Enter a valid email"),
  password: z.string().min(6, "Minimum 6 characters required"),
});

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#0A0C10] px-4">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/20 blur-[160px]" />

      {/* Card */}
      <div className="relative w-full max-w-lg bg-[#12141A]/80 backdrop-blur-xl border border-gray-800 rounded-3xl p-10 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-semibold text-white tracking-tight">
            Welcome back 👋
          </h1>
          <p className="text-gray-400 text-sm mt-2">Login to your account</p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Email */}
          <div>
            <label className="text-xs text-gray-400 mb-2 block">
              Email Address
            </label>

            <div className="relative group">
              <Mail
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-blue-500 transition"
                size={18}
              />

              <input
                type="email"
                {...register("email")}
                placeholder="you@example.com"
                className="w-full pl-12 pr-4 py-3.5 bg-[#1A1D23] text-white rounded-xl border border-gray-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none text-sm transition"
              />
            </div>

            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="text-xs text-gray-400 mb-2 block">Password</label>

            <div className="relative group">
              <Lock
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-blue-500 transition"
                size={18}
              />

              <input
                type={showPassword ? "text" : "password"}
                {...register("password")}
                placeholder="Enter your password"
                className="w-full pl-12 pr-12 py-3.5 bg-[#1A1D23] text-white rounded-xl border border-gray-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none text-sm transition"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Forgot Password */}
          <div className="flex justify-end">
            <button
              type="button"
              className="text-sm text-blue-500 hover:text-blue-400 hover:underline transition"
            >
              Forgot password?
            </button>
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-700 py-3.5 rounded-xl text-white font-medium flex items-center justify-center gap-2 transition disabled:opacity-50 shadow-lg shadow-blue-600/20"
          >
            {isSubmitting ? "Signing in..." : "Sign in"}
            <ChevronRight size={18} />
          </button>
        </form>

        {/* Divider */}
        <div className="relative my-8">
          <div className="border-t border-gray-800"></div>
          <span className="absolute left-1/2 -translate-x-1/2 -top-3 bg-[#12141A] px-3 text-xs text-gray-500">
            OR
          </span>
        </div>

        {/* Google */}
        <button className="w-full flex items-center justify-center gap-3 bg-[#1A1D23] hover:bg-[#22262E] text-white py-3.5 rounded-xl border border-gray-800 transition">
          <FcGoogle size={22} />
          <span className="text-sm font-medium">Continue with Google</span>
        </button>

        {/* Register */}
        <p className="mt-8 text-center text-sm text-gray-400">
          Don’t have an account?{" "}
          <button className="text-white hover:underline font-medium">
            Create account
          </button>
        </p>
      </div>
    </main>
  );
}
