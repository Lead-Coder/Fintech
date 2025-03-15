const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Stock = require("../models/stock.js")

router.post("/api/stocks", async (req, res) => {
  try {
    const { item, price, company } = req.body;
    if (!item || !price || !company) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const newStock = new Stock({ item, price, company });
    await newStock.save();
    res.status(201).json({ message: "Stock added successfully", stock: newStock });
  } catch (error) {
    console.error("Error adding stock:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

router.get("/api/stocks", async (req, res) => {
  try {
    const stocks = await Stock.find();
    res.status(200).json(stocks);
  } catch (error) {
    console.error("Error fetching stocks:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

module.exports = router;
