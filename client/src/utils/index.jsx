import { FaHome, FaUtensils, FaUsers, FaCog } from "react-icons/fa";

// Create restaurants dummy data
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

// Create categories for restaurants dummy data
const categoriesForRestaurants = ["All", "Burgers", "Pizza", "Sushi", "Indian"];

// Create benefits dummy data
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

// Offers Dummy Data
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

// Offers categories dummy data
const offersCategories = ["All", "Pizza", "Burgers", "Fast Food", "Healthy"];

// Admin Dashboard Dummy Orders
const adminDashboardOrders = [
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

// Admin Dashboard Stats Dummy Data
const adminDashboardStats = [
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

export {
  restaurants,
  categoriesForRestaurants,
  benefitsData,
  offers,
  offersCategories,
  adminDashboardOrders,
  adminDashboardStats,
};
