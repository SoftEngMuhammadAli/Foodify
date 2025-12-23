import React from "react";
import Footer from "../common/Footer";

const ContactUs = () => {
  return (
    <>
      <section className="relative bg-gray-50 py-24 px-4 overflow-hidden">
        {/* Background Glow */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl -z-10" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-orange-400/20 rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Info */}
          <div>
            <span className="inline-block mb-4 px-4 py-1 rounded-full bg-orange-100 text-orange-700 text-sm font-bold uppercase tracking-widest">
              Contact Us
            </span>

            <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-6">
              Let’s talk about your <br />
              <span className="text-orange-600">next meal</span>
            </h2>

            <p className="text-gray-500 font-medium leading-relaxed max-w-lg mb-10">
              Have a question, feedback, or partnership idea? We’d love to hear
              from you. Our team usually responds within 24 hours.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600 text-xl">
                  📍
                </div>
                <p className="font-bold text-gray-700">
                  123 Food Street, Flavor Town, NY
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600 text-xl">
                  📧
                </div>
                <p className="font-bold text-gray-700">support@foodify.com</p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600 text-xl">
                  📞
                </div>
                <p className="font-bold text-gray-700">+1 (234) 567-8900</p>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white rounded-[2rem] shadow-xl border border-gray-100 p-10">
            <h3 className="text-2xl font-black text-gray-900 mb-6">
              Send us a message
            </h3>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-600 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 ring-orange-500 focus:outline-none font-medium"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-600 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="john@email.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 ring-orange-500 focus:outline-none font-medium"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-600 mb-2">
                  Message
                </label>
                <textarea
                  rows="5"
                  placeholder="Tell us how we can help..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 ring-orange-500 focus:outline-none font-medium resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-orange-600 text-white py-4 rounded-xl font-bold hover:bg-orange-700 transition shadow-lg shadow-orange-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default ContactUs;
