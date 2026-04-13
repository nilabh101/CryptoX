const express = require('express');
const { protect } = require('../middleware/authMiddleware');
const Portfolio = require('../models/Portfolio');

const router = express.Router();

router.get('/', protect, async (req, res) => {
  try {
    let portfolio = await Portfolio.findOne({ user: req.user._id });
    if (!portfolio) {
      portfolio = await Portfolio.create({ user: req.user._id, assets: [] });
    }
    res.json(portfolio);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/add', protect, async (req, res) => {
  try {
    const { symbol, name, amount, price } = req.body;
    let portfolio = await Portfolio.findOne({ user: req.user._id });
    
    if (!portfolio) {
      portfolio = new Portfolio({ user: req.user._id, assets: [] });
    }

    const assetIndex = portfolio.assets.findIndex(a => a.symbol === symbol);
    if (assetIndex >= 0) {
      // Update existing asset
      const asset = portfolio.assets[assetIndex];
      const totalCost = (asset.amount * asset.averageBuyPrice) + (amount * price);
      const newAmount = asset.amount + amount;
      asset.averageBuyPrice = totalCost / newAmount;
      asset.amount = newAmount;
    } else {
      // Add new asset
      portfolio.assets.push({ symbol, name, amount, averageBuyPrice: price });
    }

    await portfolio.save();
    res.json(portfolio);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/remove', protect, async (req, res) => {
  try {
    const { symbol, amount } = req.body;
    const portfolio = await Portfolio.findOne({ user: req.user._id });
    if (!portfolio) return res.status(404).json({ message: 'Portfolio not found' });

    const assetIndex = portfolio.assets.findIndex(a => a.symbol === symbol);
    if (assetIndex >= 0) {
      const asset = portfolio.assets[assetIndex];
      if (asset.amount <= amount) {
        // Remove completely
        portfolio.assets.splice(assetIndex, 1);
      } else {
        asset.amount -= amount;
      }
      await portfolio.save();
      res.json(portfolio);
    } else {
      res.status(404).json({ message: 'Asset not found in portfolio' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
