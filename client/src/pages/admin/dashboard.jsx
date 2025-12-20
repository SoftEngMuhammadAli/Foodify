export const AdminDashboard = () => {
  return (
    <div className="min-h-screen flex bg-gray-50 font-sans text-gray-900">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-100 hidden md:flex flex-col">
        <div className="p-6 flex items-center gap-3">
          <div className="w-10 h-10 bg-orange-600 rounded-xl flex items-center justify-center shadow-lg shadow-orange-200">
            <span className="text-white font-black text-xl">F</span>
          </div>
          <h1 className="text-xl font-black tracking-tight">
            FOODIFY<span className="text-orange-600">.</span>
          </h1>
        </div>

        <nav className="mt-6 flex-1 space-y-2 px-4">
          {["Dashboard", "Menu Items", "Customers", "Settings"].map((item) => (
            <a
              key={item}
              href="#"
              className="flex items-center px-4 py-3 rounded-xl font-bold text-gray-600 hover:bg-orange-50 hover:text-orange-600 transition"
            >
              {item}
            </a>
          ))}
        </nav>
      </aside>

      {/* Main Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 py-4 sticky top-0 z-40">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-black tracking-tight">
              Dashboard <span className="text-orange-600">Overview</span>
            </h2>

            <div className="flex items-center gap-3">
              <span className="font-bold text-gray-600">Admin</span>
              <div className="w-9 h-9 bg-orange-600 rounded-full flex items-center justify-center text-white font-black">
                A
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-8">
          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Total Revenue", value: "$12,845.50" },
              { label: "Total Orders", value: "1,240" },
              { label: "Active Users", value: "842" },
              { label: "Pending Orders", value: "15", highlight: true },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition"
              >
                <p className="text-sm font-bold text-gray-500">{stat.label}</p>
                <p
                  className={`mt-2 text-3xl font-black ${
                    stat.highlight ? "text-orange-600" : "text-gray-900"
                  }`}
                >
                  {stat.value}
                </p>
              </div>
            ))}
          </div>

          {/* Recent Orders */}
          <div className="mt-12">
            <h3 className="text-xl font-black mb-6">
              Recent <span className="text-orange-600">Orders</span>
            </h3>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <table className="min-w-full">
                <thead className="bg-gray-50 text-xs uppercase tracking-widest text-gray-500">
                  <tr>
                    <th className="px-6 py-4 text-left">Order ID</th>
                    <th className="px-6 py-4 text-left">Customer</th>
                    <th className="px-6 py-4 text-left">Status</th>
                    <th className="px-6 py-4 text-left">Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-orange-50 transition">
                    <td className="px-6 py-4 font-bold">#ORD-7421</td>
                    <td className="px-6 py-4 text-gray-600">John Doe</td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 rounded-full text-xs font-black bg-green-100 text-green-700">
                        Completed
                      </span>
                    </td>
                    <td className="px-6 py-4 font-bold">$42.50</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
