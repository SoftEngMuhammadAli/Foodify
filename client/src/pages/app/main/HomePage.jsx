import React from "react";
import Offers from "../../../components/app/offers";
import NewsLetter from "../../../components/app/newsletter";
import MapLocation from "../../../components/app/MapLocation";
import ContactUs from "../../../components/app/ContactUs";
import Footer from "../../../components/common/Footer";
import BenefitsView from "../../../components/app/Benefits";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      {/* Hero Section */}
      <header className="relative overflow-hidden pt-16 pb-32 px-4">
        {/* Blurred Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover opacity-50 pointer-events-none"
        >
          <source
            // add video url working url
            src="https://www.pexels.com/download/video/4266812/"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Optional Overlay for extra blur/contrast */}
        <div className="absolute top-0 left-0 w-full h-full backdrop-blur-sm bg-black/20 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <span className="inline-block py-1 px-4 rounded-full bg-orange-100 text-orange-700 text-sm font-bold mb-6">
            🚀 Now serving in 50+ cities
          </span>
          <h1 className="text-6xl md:text-7xl font-black text-gray-900 mb-6 leading-tight">
            Premium food <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-500">
              delivered to your door
            </span>
          </h1>
          <p className="text-xl text-gray-50 mb-12 max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
            Experience the finest cuisines from top-rated local restaurants.
            Fresh, fast, and always delicious.
          </p>

          <div className="flex flex-col md:flex-row justify-center max-w-2xl mx-auto gap-3 p-2 bg-white rounded-2xl shadow-2xl border border-gray-100">
            <div className="flex-grow flex items-center px-4">
              <svg
                className="w-5 h-5 text-gray-400 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Enter your delivery address..."
                className="w-full py-4 focus:outline-none text-gray-700 font-medium"
              />
            </div>
            <button className="bg-gray-900 text-white px-10 py-4 rounded-xl font-bold hover:bg-orange-600 transition-all duration-300 transform hover:scale-[1.02]">
              Find Food
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section
      <header className="relative overflow-hidden bg-white pt-16 pb-32 px-4">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 bg-orange-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-300 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <span className="inline-block py-1 px-4 rounded-full bg-orange-100 text-orange-700 text-sm font-bold mb-6">
            🚀 Now serving in 50+ cities
          </span>
          <h1 className="text-6xl md:text-7xl font-black text-gray-900 mb-6 leading-tight">
            Premium food <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-500">
              delivered to your door
            </span>
          </h1>
          <p className="text-xl text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed">
            Experience the finest cuisines from top-rated local restaurants.
            Fresh, fast, and always delicious.
          </p>

          <div className="flex flex-col md:flex-row justify-center max-w-2xl mx-auto gap-3 p-2 bg-white rounded-2xl shadow-2xl border border-gray-100">
            <div className="flex-grow flex items-center px-4">
              <svg
                className="w-5 h-5 text-gray-400 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Enter your delivery address..."
                className="w-full py-4 focus:outline-none text-gray-700 font-medium"
              />
            </div>
            <button className="bg-gray-900 text-white px-10 py-4 rounded-xl font-bold hover:bg-orange-600 transition-all duration-300 transform hover:scale-[1.02]">
              Find Food
            </button>
          </div>
        </div>
      </header> */}

      {/* Categories */}
      <section className="max-w-7xl mx-auto -mt-16 relative z-20 px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {[
            { name: "Pizza", emoji: "🍕" },
            { name: "Burgers", emoji: "🍔" },
            { name: "Sushi", emoji: "🍣" },
            { name: "Salads", emoji: "🥗" },
            { name: "Desserts", emoji: "🍰" },
            { name: "Drinks", emoji: "🥤" },
          ].map((cat) => (
            <div
              key={cat.name}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center gap-3 hover:border-orange-500 hover:shadow-md transition-all cursor-pointer group"
            >
              <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-orange-50 transition-colors">
                <span className="text-2xl">{cat.emoji}</span>
              </div>
              <span className="font-bold text-gray-700">{cat.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Section */}
      <main className="max-w-7xl mx-auto py-24 px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-4xl font-black text-gray-900">
              Popular Near You
            </h2>
            <p className="text-gray-500 mt-2 font-medium">
              The most ordered dishes in your neighborhood
            </p>
          </div>
          <button className="group flex items-center gap-2 text-orange-600 font-bold hover:gap-3 transition-all">
            Explore all restaurants
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              name: "Truffle Burger",
              price: "14.99",
              rating: "4.9",
              img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800",
            },
            {
              name: "Rainbow Sushi",
              price: "18.50",
              rating: "4.8",
              img: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800",
            },
            {
              name: "Quinoa Power Bowl",
              price: "12.99",
              rating: "4.7",
              img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
                <div className="absolute top-5 right-5 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-black text-gray-900 flex items-center gap-1 shadow-xl">
                  <span className="text-orange-500">★</span> {item.rating}
                </div>
                <div className="absolute bottom-5 left-5 bg-orange-600 text-white text-xs font-black px-3 py-1 rounded-lg uppercase tracking-wider">
                  Free Delivery
                </div>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                    {item.name}
                  </h3>
                  <span className="text-2xl font-black text-gray-900">
                    ${item.price}
                  </span>
                </div>
                <p className="text-gray-500 mb-8 line-clamp-2 font-medium">
                  Crafted with premium ingredients and seasonal flavors for an
                  unforgettable experience.
                </p>
                <button className="w-full bg-gray-50 text-gray-900 py-4 rounded-2xl font-bold group-hover:bg-orange-600 group-hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
                  Add to Cart
                  <svg
                    className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Benefits Section */}
      <BenefitsView />

      {/* Offers */}
      <Offers />

      {/* Newsletter */}
      <NewsLetter />

      {/* Map Location */}
      <MapLocation />

      {/* Contact Us */}
      <ContactUs />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
