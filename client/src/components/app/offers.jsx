import React, { useState } from "react";

const Offers = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Pizza", "Burgers", "Fast Food", "Healthy"];

  const offers = [
    {
      id: 1,
      title: "50% OFF",
      subtitle: "On your first order",
      code: "WELCOME50",
      category: "Fast Food",
      tag: "LIMITED",
      color: "from-orange-500 to-red-500",
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=600",
    },
    {
      id: 2,
      title: "FREE DELIVERY",
      subtitle: "Orders above $20",
      code: "FREEDEL",
      category: "All",
      tag: "HOT",
      color: "from-red-500 to-pink-500",
      image:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=600",
    },
    {
      id: 3,
      title: "BUY 1 GET 1",
      subtitle: "On all Pizzas",
      code: "BOGOPIZZA",
      category: "Pizza",
      tag: "POPULAR",
      color: "from-yellow-400 to-orange-500",
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=600",
    },
    {
      id: 4,
      title: "25% OFF",
      subtitle: "Healthy meals",
      code: "FIT25",
      category: "Healthy",
      tag: "NEW",
      color: "from-green-400 to-emerald-600",
      image:
        "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80&w=600",
    },
    {
      id: 5,
      title: "FLAT $10 OFF",
      subtitle: "Burger combos",
      code: "BURGER10",
      category: "Burgers",
      tag: "STEAL",
      color: "from-purple-500 to-indigo-600",
      image:
        "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=600",
    },
    {
      id: 6,
      title: "20% OFF",
      subtitle: "Late night cravings",
      code: "NIGHT20",
      category: "Fast Food",
      tag: "NIGHT",
      color: "from-gray-800 to-black",
      image:
        "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&q=80&w=600",
    },
  ];

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
          {categories.map((cat) => (
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
