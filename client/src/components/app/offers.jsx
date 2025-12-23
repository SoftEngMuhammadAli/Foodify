import React, { useState } from "react";
import { offers, offersCategories } from "../../utils";

const Offers = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredOffers =
    activeCategory === "All"
      ? offers
      : offers.filter((o) => o.category === activeCategory);

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    alert(`Copied: ${code}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-14 text-center">
          <h1 className="text-5xl font-black text-gray-900">
            Exclusive <span className="text-orange-600">Deals</span>
          </h1>
          <p className="text-gray-500 font-medium mt-4">
            Save more on every order — limited time offers
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-14">
          {[
            ["🔥 120+", "Active Deals"],
            ["🍕 300+", "Restaurants"],
            ["⚡ 30 min", "Avg Delivery"],
            ["⭐ 4.8", "User Rating"],
          ].map(([title, sub]) => (
            <div
              key={title}
              className="bg-white rounded-2xl p-6 text-center shadow-sm"
            >
              <h3 className="text-2xl font-black">{title}</h3>
              <p className="text-gray-500 mt-1">{sub}</p>
            </div>
          ))}
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          {offersCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-3 rounded-full font-bold transition ${
                activeCategory === cat
                  ? "bg-orange-600 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredOffers.map((offer) => (
            <div
              key={offer.id}
              className="group bg-white rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />

                {/* Offer badge */}
                <div
                  className={`absolute top-4 left-4 bg-gradient-to-r ${offer.color} text-white px-4 py-2 rounded-full text-sm font-black`}
                >
                  {offer.title}
                </div>

                {/* Tag */}
                <div className="absolute top-4 right-4 bg-black/80 text-white px-3 py-1 rounded-full text-xs font-bold">
                  {offer.tag}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 text-center">
                <h3 className="text-2xl font-black text-gray-900 mb-1">
                  {offer.subtitle}
                </h3>
                <p className="text-sm text-gray-500">
                  Category: {offer.category}
                </p>

                {/* Code */}
                <div className="mt-6 flex items-center justify-center gap-3 bg-gray-50 rounded-xl px-4 py-3 border border-dashed border-gray-300">
                  <span className="font-mono font-black text-gray-900">
                    {offer.code}
                  </span>
                  <button
                    onClick={() => handleCopy(offer.code)}
                    className="text-orange-600 font-bold hover:text-orange-700"
                  >
                    Copy
                  </button>
                </div>

                {/* CTA */}
                <button className="mt-6 w-full bg-gray-900 text-white py-4 rounded-2xl font-bold hover:bg-orange-600 transition-all duration-300">
                  Use Offer Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-[2.5rem] p-12 text-center text-white">
          <h2 className="text-4xl font-black">
            Hungry? Don’t Miss These Deals 🍔
          </h2>
          <p className="mt-4 opacity-90">
            New offers added every day. Order now and save big.
          </p>
          <button className="mt-8 bg-white text-gray-900 px-10 py-4 rounded-full font-black hover:bg-gray-100 transition">
            Explore Restaurants
          </button>
        </div>
      </div>
    </div>
  );
};

export default Offers;
