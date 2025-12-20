import React, { useState } from "react";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Left illustration */}
      <div className="hidden lg:flex w-1/2 bg-orange-50 relative overflow-hidden items-center justify-center">
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/30 rounded-full blur-3xl" />
        <img
          src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80"
          alt="Food Illustration"
          className="relative w-3/4 rounded-3xl shadow-lg shadow-orange-200/50"
        />
      </div>

      {/* Right form */}
      <div className="flex-1 flex items-center justify-center px-6 lg:px-16">
        <div className="w-full max-w-md bg-white/90 backdrop-blur-md rounded-[2rem] shadow-2xl border border-gray-100 p-10">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center shadow-lg shadow-orange-200">
              <span className="text-white font-black text-2xl">F</span>
            </div>
          </div>

          <h2 className="text-3xl font-black text-gray-900 text-center mb-2">
            Create Account
          </h2>
          <p className="text-center text-gray-500 font-medium mb-8">
            Join Foodify and start ordering today
          </p>

          <form className="space-y-5">
            <div className="relative">
              <input
                type="text"
                placeholder="Full Name"
                className="peer w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 ring-orange-500 focus:outline-none font-medium placeholder-transparent"
              />
              <label className="absolute left-4 -top-2.5 text-gray-500 text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base transition-all">
                Full Name
              </label>
            </div>

            <div className="relative">
              <input
                type="email"
                placeholder="Email"
                className="peer w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 ring-orange-500 focus:outline-none font-medium placeholder-transparent"
              />
              <label className="absolute left-4 -top-2.5 text-gray-500 text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base transition-all">
                Email
              </label>
            </div>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="peer w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 ring-orange-500 focus:outline-none font-medium placeholder-transparent"
              />
              <label className="absolute left-4 -top-2.5 text-gray-500 text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base transition-all">
                Password
              </label>
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-3 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            <div className="relative">
              <input
                type={showConfirm ? "text" : "password"}
                placeholder="Confirm Password"
                className="peer w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 ring-orange-500 focus:outline-none font-medium placeholder-transparent"
              />
              <label className="absolute left-4 -top-2.5 text-gray-500 text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base transition-all">
                Confirm Password
              </label>
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute right-4 top-3 text-gray-400 hover:text-gray-600"
              >
                {showConfirm ? "Hide" : "Show"}
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-orange-600 text-white py-4 rounded-2xl font-bold hover:bg-orange-700 transition shadow-lg shadow-orange-200"
            >
              Sign Up
            </button>
          </form>

          {/* Social Login */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button className="flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-200 hover:bg-gray-100 transition">
              <img
                src="https://www.svgrepo.com/show/355037/google.svg"
                alt="Google"
                className="w-5 h-5"
              />
              Google
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-200 hover:bg-gray-100 transition">
              <img
                src="https://www.svgrepo.com/show/303128/apple-logo.svg"
                alt="Apple"
                className="w-5 h-5"
              />
              Apple
            </button>
          </div>

          <p className="text-center text-sm text-gray-500 mt-6">
            Already have an account?{" "}
            <span className="text-orange-600 font-bold cursor-pointer hover:underline">
              <a href="/login">Login</a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
