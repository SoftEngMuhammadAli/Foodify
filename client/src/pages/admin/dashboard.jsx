import React from "react";
import { FaHome, FaUtensils, FaUsers, FaCog } from "react-icons/fa";

export const AdminDashboard = () => {
  const statsData = [
    {
      label: "Total Revenue",
      value: "$12,845.50",
      icon: <FaUtensils />,
      highlight: false,
    },
    {
      label: "Total Orders",
      value: "1,240",
      icon: <FaHome />,
      highlight: false,
    },
    {
      label: "Active Users",
      value: "842",
      icon: <FaUsers />,
      highlight: false,
    },
    { label: "Pending Orders", value: "15", icon: <FaCog />, highlight: true },
  ];

  const orders = [
    {
      id: "#ORD-7421",
      customer: "John Doe",
      status: "Completed",
      amount: "$42.50",
      date: "2025-12-22",
      method: "Card",
    },
    {
      id: "#ORD-7422",
      customer: "Jane Smith",
      status: "Pending",
      amount: "$28.90",
      date: "2025-12-22",
      method: "Cash",
    },
    {
      id: "#ORD-7423",
      customer: "Mike Ross",
      status: "Cancelled",
      amount: "$15.00",
      date: "2025-12-21",
      method: "Card",
    },
    {
      id: "#ORD-7424",
      customer: "Rachel Zane",
      status: "Completed",
      amount: "$64.75",
      date: "2025-12-21",
      method: "PayPal",
    },
  ];

  const statusColor = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-700";
      case "Pending":
        return "bg-orange-100 text-orange-600";
      case "Cancelled":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-50 font-sans text-gray-900">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-white border-b md:border-b-0 md:border-r border-gray-100 flex-shrink-0">
        <div className="p-6 flex items-center gap-3">
          <div className="w-10 h-10 bg-orange-600 rounded-xl flex items-center justify-center shadow-lg shadow-orange-200">
            <span className="text-white font-black text-xl">F</span>
          </div>
          <h1 className="text-xl font-black tracking-tight">
            FOODIFY<span className="text-orange-600">.</span>
          </h1>
        </div>
        <nav className="mt-6 flex flex-wrap md:flex-col gap-2 px-4">
          {[
            { name: "Dashboard", icon: <FaHome /> },
            { name: "Menu Items", icon: <FaUtensils /> },
            { name: "Customers", icon: <FaUsers /> },
            { name: "Settings", icon: <FaCog /> },
          ].map((item) => (
            <a
              key={item.name}
              href="#"
              className="flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-gray-600 hover:bg-orange-50 hover:text-orange-600 transition w-full"
            >
              {item.icon} {item.name}
            </a>
          ))}
        </nav>
      </aside>

      {/* Main Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 py-4 sticky top-0 z-40 flex items-center justify-between">
          <h2 className="text-2xl font-black tracking-tight">
            Dashboard <span className="text-orange-600">Overview</span>
          </h2>
          <div className="flex items-center gap-3">
            <span className="font-bold text-gray-600">Admin</span>
            <div className="w-9 h-9 bg-orange-600 rounded-full flex items-center justify-center text-white font-black">
              A
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8 space-y-8">
          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {statsData.map((stat) => (
              <div
                key={stat.label}
                className={`p-5 rounded-2xl shadow-md border border-gray-100 flex items-center gap-4 hover:shadow-lg transition ${
                  stat.highlight
                    ? "bg-gradient-to-r from-orange-100 to-orange-50"
                    : "bg-white"
                }`}
              >
                <div className="w-14 h-14 flex-shrink-0 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center text-2xl">
                  {stat.icon}
                </div>
                <div className="flex flex-col min-w-0">
                  <p className="text-sm font-bold text-gray-500 truncate">
                    {stat.label}
                  </p>
                  <p
                    className={`mt-2 text-xl sm:text-2xl font-black truncate ${
                      stat.highlight ? "text-orange-600" : "text-gray-900"
                    }`}
                  >
                    {stat.value}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Recent Orders */}
          <div>
            <h3 className="text-xl font-black mb-4">
              Recent <span className="text-orange-600">Orders</span>
            </h3>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-x-auto">
              <table className="min-w-full text-sm md:text-base">
                <thead className="bg-gray-50 text-xs uppercase tracking-widest text-gray-500">
                  <tr>
                    <th className="px-4 py-3 text-left">Order ID</th>
                    <th className="px-4 py-3 text-left">Customer</th>
                    <th className="px-4 py-3 text-left">Status</th>
                    <th className="px-4 py-3 text-left">Amount</th>
                    <th className="px-4 py-3 text-left">Date</th>
                    <th className="px-4 py-3 text-left">Payment</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {orders.map((order) => (
                    <tr
                      key={order.id}
                      className="hover:bg-orange-50 transition"
                    >
                      <td className="px-4 py-3 font-bold">{order.id}</td>
                      <td className="px-4 py-3 text-gray-600">
                        {order.customer}
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-black ${statusColor(
                            order.status
                          )}`}
                        >
                          {order.status}
                        </span>
                      </td>
                      <td className="px-4 py-3 font-bold">{order.amount}</td>
                      <td className="px-4 py-3">{order.date}</td>
                      <td className="px-4 py-3">{order.method}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Top Products */}
          <div>
            <h3 className="text-xl font-black mb-4">
              Top <span className="text-orange-600">Products</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  name: "Truffle Burger",
                  sold: 150,
                  img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400",
                },
                {
                  name: "Rainbow Sushi",
                  sold: 120,
                  img: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=400",
                },
                {
                  name: "Quinoa Bowl",
                  sold: 95,
                  img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400",
                },
                {
                  name: "Chocolate Cake",
                  sold: 80,
                  img: "https://images.unsplash.com/photo-1599785209795-42d86b1d1e19?w=400",
                },
              ].map((item) => (
                <div
                  key={item.name}
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition"
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4 flex flex-col gap-2">
                    <h4 className="text-gray-900 font-black truncate">
                      {item.name}
                    </h4>
                    <p className="text-gray-500 text-sm">Sold: {item.sold}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
