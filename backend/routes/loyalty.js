const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Loyalty = require("../models/loyalty.js")
const User = require("../models/user.js");

// Middleware to extract user from token
const authenticateUser = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1]; 
    if (!token) return res.status(401).json({ error: "Unauthorized" });
  
    try {
      const decoded = jwt.verify(token, "your_jwt_secret");
      req.user = decoded;
      next();
    } catch (error) {
      return res.status(401).json({ error: "Invalid token" });
    }
  };
  
  // Fetch user details
  router.get("/api/user", authenticateUser, async (req, res) => {
    const user = await Loyalty.findOne({ email: req.user.email });
    if (!user) return res.status(404).json({ error: "User1234 not found" });
    res.json({ email: user.email, loyaltyPoints: user.loyaltyPoints });
  });
  
  router.post("/api/update-loyalty", authenticateUser, async (req, res) => {
    const { email, loyaltyPoints } = req.body;
    await Loyalty.updateOne({ email }, { loyaltyPoints });  
    res.json({ message: "Loyalty points updated successfully" });
  });

  module.exports = router