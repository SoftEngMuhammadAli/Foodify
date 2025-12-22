import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const API_PREFIX = "/api/v1";

/* ========== MIDDLEWARES ========== */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* ========== ROUTES ========== */
app.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "Server is running",
  });
});

app.use(`${API_PREFIX}/auth`, authRoutes);
app.use(`${API_PREFIX}/user`, userRoutes);

/* ========== START SERVER ========== */
const startServer = async () => {
  try {
    await connectDB();
    console.log("Database connected successfully");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Server failed to start", error);
    process.exit(1);
  }
};

startServer();

/*
📝 NOTES
✔ Correct Express App Sequence

1️⃣ Import dependencies
2️⃣ Load environment variables
3️⃣ Initialize express app
4️⃣ Apply middlewares
5️⃣ Define routes
6️⃣ Connect database
7️⃣ Start server

✔ Why DB first?

Prevents server running without DB

Avoids runtime crashes

Cleaner startup flow

✔ Why not mix import & require?

Causes module errors

Hard to debug

Industry uses ES Modules
*/
