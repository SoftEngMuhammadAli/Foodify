import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../../../features/auth/authSlice";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      login({
        email,
        password,
      })
    );

    setEmail("");
    setPassword("");
  };

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
          <h2 className="text-3xl font-black text-gray-900 text-center mb-2">
            Welcome Back
          </h2>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200"
            />

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-3 text-gray-400"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-orange-600 text-white py-4 rounded-2xl font-bold hover:bg-orange-700"
            >
              Login
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            Don’t have an account?{" "}
            <Link
              to="/register"
              className="text-orange-600 font-bold hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
