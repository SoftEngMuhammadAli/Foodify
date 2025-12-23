import React, { useState } from "react";
import { restaurants, categoriesForRestaurants } from "../../../utils/index";

const RestaurantsPage = () => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredRestaurants = restaurants.filter((res) => {
    const matchSearch = res.name.toLowerCase().includes(search.toLowerCase());

    const matchCategory =
      selectedCategory === "All" || res.category === selectedCategory;

    return matchSearch && matchCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-14">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="mb-10">
          <h1 className="text-4xl font-black text-gray-900">
            Restaurants Near You
          </h1>
          <p className="text-gray-500 font-medium mt-2">
            Find the best food & drinks around your location
          </p>
        </div>

        {/* SEARCH + LOCATION */}
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-4 mb-10">
          {/* Search */}
          <div className="flex items-center flex-1 gap-3 px-4 py-3 bg-gray-50 rounded-xl">
            🔍
            <input
              type="text"
              placeholder="Search restaurants..."
              className="w-full bg-transparent focus:outline-none font-medium"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Location */}
          <button className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-xl font-bold hover:bg-orange-600 transition">
            📍 Detect Location
          </button>
        </div>

        {/* CATEGORIES */}
        <div className="flex gap-3 overflow-x-auto mb-12 pb-2">
          {categoriesForRestaurants.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full font-bold whitespace-nowrap transition
                ${
                  selectedCategory === cat
                    ? "bg-orange-600 text-white"
                    : "bg-white text-gray-700 border border-gray-200 hover:bg-orange-50"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* RESTAURANT GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRestaurants.map((res) => (
            <div
              key={res.id}
              className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={res.image}
                  alt={res.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1 shadow">
                  <span className="text-orange-500">★</span>
                  {res.rating}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition">
                  {res.name}
                </h3>
                <p className="text-gray-500 font-medium mt-1">{res.cuisine}</p>

                <div className="flex items-center justify-between mt-6">
                  <button className="bg-gray-100 hover:bg-orange-600 hover:text-white px-5 py-2 rounded-xl font-bold transition">
                    View Menu
                  </button>
                  <span className="text-sm font-bold text-green-600">
                    Open Now
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* EMPTY STATE */}
        {filteredRestaurants.length === 0 && (
          <p className="text-center text-gray-500 font-medium mt-16">
            No restaurants found 😕
          </p>
        )}
      </div>
    </div>
  );
};

export default RestaurantsPage;
