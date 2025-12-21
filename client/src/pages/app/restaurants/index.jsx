import React, { useState } from "react";

const restaurants = [
  {
    id: 1,
    name: "Burger Palace",
    cuisine: "Burgers • Fast Food",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800",
  },
  {
    id: 2,
    name: "Pizza Hub",
    cuisine: "Pizza • Italian",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1548365328-9f547fb0958a?w=800",
  },
  {
    id: 3,
    name: "Sushi World",
    cuisine: "Sushi • Japanese",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800",
  },
  {
    id: 4,
    name: "Taco Fiesta",
    cuisine: "Mexican • Tacos",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800",
  },
  {
    id: 5,
    name: "Pasta House",
    cuisine: "Italian • Pasta",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1473093226795-af9932fe5856?w=800",
  },
  {
    id: 6,
    name: "Green Garden",
    cuisine: "Salads • Healthy",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800",
  },
  {
    id: 7,
    name: "Steak Grill",
    cuisine: "Steakhouse • BBQ",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1546241072-48010ad28c2c?w=800",
  },
  {
    id: 8,
    name: "Dim Sum Delight",
    cuisine: "Chinese • Dim Sum",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800",
  },
  {
    id: 9,
    name: "Curry Corner",
    cuisine: "Indian • Curry",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
  },
  {
    id: 10,
    name: "Dessert Heaven",
    cuisine: "Sweets • Desserts",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800",
  },
];
const categories = ["All", "Burgers", "Pizza", "Sushi", "Indian"];

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
          {categories.map((cat) => (
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
