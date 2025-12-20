import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NavHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  return (
    // Navigattion Header
    <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-10 h-10 bg-orange-600 rounded-xl flex items-center justify-center shadow-lg shadow-orange-200 mr-3">
              <span className="text-white font-black text-xl">F</span>
            </div>
            <h1 className="text-2xl font-black text-gray-900 tracking-tighter">
              FOODIFY<span className="text-orange-600">.</span>
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-bold uppercase tracking-widest text-gray-500">
            <a href="#" className="hover:text-orange-600 transition-colors">
              Home
            </a>
            <a href="#" className="hover:text-orange-600 transition-colors">
              Restaurants
            </a>
            <a href="#" className="hover:text-orange-600 transition-colors">
              Offers
            </a>
            <a href="#" className="hover:text-orange-600 transition-colors">
              Contact
            </a>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => navigate("/login")}
              className="text-gray-600 font-bold hover:text-orange-600"
            >
              Login
            </button>
            <button
              onClick={() => {
                navigate("/register");
              }}
              className="bg-orange-600 text-white px-6 py-2.5 rounded-full font-bold hover:bg-orange-700 transition shadow-lg shadow-orange-200"
            >
              Sign Up
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-orange-600 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-md border-t border-gray-100 shadow-lg">
          <div className="px-2 pt-2 pb-4 space-y-1">
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-bold text-gray-700 hover:text-orange-600 hover:bg-gray-50 transition"
            >
              Home
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-bold text-gray-700 hover:text-orange-600 hover:bg-gray-50 transition"
            >
              Restaurants
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-bold text-gray-700 hover:text-orange-600 hover:bg-gray-50 transition"
            >
              Offers
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-bold text-gray-700 hover:text-orange-600 hover:bg-gray-50 transition"
            >
              Contact
            </a>
            <div className="mt-2 flex flex-col gap-2 px-3">
              <button
                onClick={() => navigate("/login")}
                className="w-full bg-orange-600 text-white py-2 rounded-full font-bold hover:bg-orange-700 transition shadow-lg shadow-orange-200"
              >
                Login
              </button>
              <button
                onClick={() => navigate("/register")}
                className="w-full bg-orange-600 text-white py-2 rounded-full font-bold hover:bg-orange-700 transition shadow-lg shadow-orange-200"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavHeader;

/*
        <nav className="bg-white/80 backdrop-blur-md shadow-sm p-4 sticky top-0 z-50 border-b border-gray-100">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-orange-600 rounded-xl flex items-center justify-center shadow-lg shadow-orange-200">
                <span className="text-white font-black text-xl">F</span>
              </div>
              <h1 className="text-2xl font-black text-gray-900 tracking-tighter">
                FOODIFY<span className="text-orange-600">.</span>
              </h1>
            </div>
            <div className="hidden md:flex space-x-8 text-sm font-bold uppercase tracking-widest text-gray-500">
              <a href="#" className="hover:text-orange-600 transition-colors">
                Home
              </a>
              <a href="#" className="hover:text-orange-600 transition-colors">
                Restaurants
              </a>
              <a href="#" className="hover:text-orange-600 transition-colors">
                Offers
              </a>
              <a href="#" className="hover:text-orange-600 transition-colors">
                Contact
              </a>
            </div>
            <div className="flex items-center gap-4">
              <button className="text-gray-600 font-bold hover:text-orange-600">
                Login
              </button>
              <button className="bg-orange-600 text-white px-6 py-2.5 rounded-full font-bold hover:bg-orange-700 transition shadow-lg shadow-orange-200">
                Sign Up
              </button>
            </div>
          </div>
        </nav>
*/
