import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <h2 className="text-2xl font-black mb-6">
            FOODIFY<span className="text-orange-500">.</span>
          </h2>
          <p className="text-gray-400 font-medium leading-relaxed">
            Making premium food accessible to everyone, everywhere.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-6 uppercase tracking-widest text-sm text-orange-500">
            Company
          </h4>
          <ul className="space-y-4 text-gray-400 font-medium">
            <li>
              <a href="#" className="hover:text-white transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Blog
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6 uppercase tracking-widest text-sm text-orange-500">
            Support
          </h4>
          <ul className="space-y-4 text-gray-400 font-medium">
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Safety
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Terms
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6 uppercase tracking-widest text-sm text-orange-500">
            Newsletter
          </h4>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Email"
              className="bg-gray-800 border-none rounded-lg px-4 py-2 w-full focus:ring-2 ring-orange-500"
            />
            <button className="bg-orange-600 p-2 rounded-lg hover:bg-orange-700 transition-colors">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
