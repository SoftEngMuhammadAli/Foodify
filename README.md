# Foodify

Foodify is a full-stack food delivery and management application built using the MERN stack (MongoDB, Express, React, and Node.js).

## Features

- **User Authentication**: Secure signup and login using JWT and bcrypt.
- **Product Management**: Browse food items by categories, search, and filter.
- **Shopping Cart**: Add/remove items and adjust quantities.
- **Order Processing**: Seamless checkout flow with order history tracking.
- **Admin Dashboard**: Manage inventory, users, and track sales performance.
- **Responsive UI**: Fully optimized for mobile, tablet, and desktop views.

## Tech Stack

- **Frontend**: React.js, Redux Toolkit, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose ODM)
- **Authentication**: JSON Web Tokens (JWT)

## Getting Started

### Prerequisites

- Node.js (v14+)
- MongoDB Atlas account or local MongoDB instance
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/foodify.git
   cd foodify
   ```

2. **Backend Setup**

   ```bash
   cd backend
   npm install
   ```

   Create a `.env` file in the `backend` directory:

   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```

3. **Frontend Setup**
   ```bash
   cd ../frontend
   npm install
   ```

### Running the App

1. **Start Backend Server**

   ```bash
   cd backend
   npm run dev
   ```

2. **Start Frontend Client**
   ```bash
   cd frontend
   npm start
   ```

The application will be accessible at `http://localhost:3000`.

## License

Distributed under the MIT License. See `LICENSE` for more information.
