import React from "react";

const NewsLetter = () => {
  return (
    <section className="relative overflow-hidden bg-gray-900 py-20 px-4">
      {/* Glow Background */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-orange-600/30 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto text-center">
        <span className="inline-block mb-4 px-4 py-1 rounded-full bg-orange-500/20 text-orange-400 text-sm font-bold uppercase tracking-widest">
          Newsletter
        </span>

        <h2 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
          Get exclusive <span className="text-orange-500">food deals</span>
          <br /> straight to your inbox
        </h2>

        <p className="text-gray-400 font-medium max-w-2xl mx-auto mb-10">
          Be the first to know about new restaurants, special offers, and
          limited-time discounts curated just for you.
        </p>

        {/* Input */}
        <div className="flex flex-col sm:flex-row items-center gap-3 bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/10 shadow-xl max-w-xl mx-auto">
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full bg-transparent text-white placeholder-gray-400 px-4 py-3 focus:outline-none font-medium"
          />
          <button className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 transition-all px-8 py-3 rounded-xl font-bold text-white shadow-lg shadow-orange-600/30">
            Subscribe
          </button>
        </div>

        {/* Footer Text */}
        <p className="text-xs text-gray-500 mt-6">
          🔒 We respect your privacy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};

export default NewsLetter;
