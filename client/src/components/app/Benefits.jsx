import React from "react";

const benefitsData = [
  {
    icon: "🚀",
    title: "Fast Delivery",
    description:
      "Get your food delivered to your door in record time, hot and fresh.",
  },
  {
    icon: "🥗",
    title: "Healthy Options",
    description:
      "Choose from a wide variety of healthy meals and fresh salads.",
  },
  {
    icon: "💰",
    title: "Best Prices",
    description:
      "Enjoy premium food without breaking your wallet, always affordable.",
  },
  {
    icon: "🎁",
    title: "Exclusive Offers",
    description:
      "Access weekly discounts and special deals available only for our users.",
  },
  {
    icon: "⭐",
    title: "Top Restaurants",
    description: "We partner only with top-rated restaurants in your city.",
  },
  {
    icon: "📱",
    title: "Easy Ordering",
    description: "Order from your phone with a simple, intuitive interface.",
  },
];

const BenefitsView = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-white pt-16 pb-24 px-4">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
            Why Choose <span className="text-orange-600">Foodify</span>?
          </h1>
          <p className="text-xl text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed">
            Discover the benefits that make Foodify your go-to app for delicious
            meals.
          </p>
        </div>
      </header>

      {/* Benefits Grid */}
      <section className="max-w-7xl mx-auto py-24 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {benefitsData.map((benefit, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 flex flex-col items-center text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              <div className="text-5xl mb-6">{benefit.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {benefit.title}
              </h3>
              <p className="text-gray-500 font-medium">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-orange-600 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-6">
            Ready to taste the best food in town?
          </h2>
          <p className="text-lg mb-8">
            Join thousands of happy users and get your favorite meals delivered
            fast.
          </p>
          <button className="bg-white text-orange-600 font-bold px-12 py-4 rounded-xl shadow-xl hover:bg-gray-100 transition-all">
            Order Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default BenefitsView;
