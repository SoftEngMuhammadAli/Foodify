import express from "express";
import connectDB from "./config/db.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  return res.json({
    status: "success",
    message: "Server is running",
  });
});

connectDB();

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
