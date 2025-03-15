require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const user = require("./routes/user.js");
const stock = require("./routes/stock.js");
const loyalty = require("./routes/loyalty.js");

const app = express();
app.use(cors({
  origin: 'http://localhost:5173', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization', 'x-auth-token']
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("🚨 MongoDB connection error:", err));

// User Schema
const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  fullName: String,
  age: String,
  gender: String,
  location: String,
  occupation: String,
  phoneNumber: String,
  interests: [String],
});

const User = mongoose.model("Userdetails", UserSchema);

// Middleware for JWT Authentication
const authenticateToken = (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Access Denied" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(403).json({ message: "Invalid Token" });
  }
};

// Fetch user profile
app.get("/api/users/profile", authenticateToken, async (req, res) => {
  const email = req.query.email;
  if (!email) return res.status(400).json({ message: "Email is required" });

  const user = await User.findOne({ email });
  if (!user) return res.status(404).json({ message: "User not found" });

  res.json({ user });
});

// Save or update profile
app.post("/api/users/profile", authenticateToken, async (req, res) => {
  const { email, ...profileData } = req.body;

  try {
    let user = await User.findOneAndUpdate(
      { email },
      { ...profileData },
      { new: true, upsert: true }
    );
    res.json({ message: "Profile saved", user });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

app.use('/', user);
app.use('/', stock);
app.use('/', loyalty);

app.listen(process.env.PORT, () => {
  console.log(`🚀 Server running on port ${process.env.PORT}`);
});
