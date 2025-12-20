import React from "react";

const MapLocation = () => {
  return (
    <section className="relative bg-gray-50 py-24 px-4 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-400/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900">
            Find Us <span className="text-orange-600">Near You</span>
          </h2>
          <p className="text-gray-500 font-medium mt-4 max-w-2xl mx-auto">
            We’re available in multiple cities and expanding rapidly to serve
            delicious food right at your doorstep.
          </p>
        </div>

        {/* Map Card */}
        <div className="bg-white rounded-[2rem] shadow-xl border border-gray-100 overflow-hidden grid grid-cols-1 lg:grid-cols-2">
          {/* Map */}
          <div className="h-[400px] lg:h-full">
            <iframe
              title="Foodify Location"
              src="https://www.google.com/maps?q=Lahore&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Info */}
          <div className="p-10 flex flex-col justify-center">
            <span className="inline-block mb-4 px-4 py-1 rounded-full bg-orange-100 text-orange-700 text-sm font-bold uppercase tracking-widest w-fit">
              Our Location
            </span>

            <h3 className="text-3xl font-black text-gray-900 mb-4">
              Foodify Headquarters
            </h3>

            <p className="text-gray-500 font-medium leading-relaxed mb-8">
              123 Food Street, Flavor Town <br />
              New York, NY 10001 <br />
              United States
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-orange-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-orange-700 transition shadow-lg shadow-orange-200">
                Get Directions
              </button>

              <button className="bg-gray-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-orange-600 transition">
                View Restaurants
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapLocation;
