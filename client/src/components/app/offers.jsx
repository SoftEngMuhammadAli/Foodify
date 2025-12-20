import React from "react";

const Offers = () => {
  const offers = [
    {
      id: 1,
      title: "50% OFF",
      subtitle: "On your first order",
      code: "WELCOME50",
      color: "from-orange-500 to-red-500",
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=600",
    },
    {
      id: 2,
      title: "FREE DELIVERY",
      subtitle: "On orders above $20",
      code: "FREEDEL",
      color: "from-red-500 to-pink-500",
      image:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=600",
    },
    {
      id: 3,
      title: "BUY 1 GET 1",
      subtitle: "On all Pizzas",
      code: "BOGOPIZZA",
      color: "from-yellow-400 to-orange-500",
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=600",
    },
  ];

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    alert(`Copied: ${code}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-black text-gray-900">
            Best <span className="text-orange-600">Offers</span> for You
          </h1>
          <p className="text-gray-500 font-medium mt-3">
            Exclusive deals and discounts on your favorite meals
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {offers.map((offer) => (
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
                <div
                  className={`absolute top-4 left-4 bg-gradient-to-r ${offer.color} text-white px-4 py-2 rounded-full text-sm font-black shadow-lg`}
                >
                  {offer.title}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 text-center">
                <h3 className="text-2xl font-black text-gray-900 mb-2">
                  {offer.subtitle}
                </h3>

                <div className="mt-6 flex items-center justify-center gap-3 bg-gray-50 rounded-xl px-4 py-3 border border-dashed border-gray-300">
                  <span className="font-mono font-black text-gray-900">
                    {offer.code}
                  </span>
                  <button
                    onClick={() => handleCopy(offer.code)}
                    className="text-orange-600 font-bold hover:text-orange-700 transition"
                  >
                    Copy
                  </button>
                </div>

                <button className="mt-6 w-full bg-gray-900 text-white py-4 rounded-2xl font-bold hover:bg-orange-600 transition-all duration-300">
                  Use Offer
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offers;
