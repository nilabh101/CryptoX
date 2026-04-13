const express = require('express');
const { getMarketData, getTrendingCoins } = require('../services/coinGeckoService');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/prices', protect, async (req, res) => {
  try {
    const data = await getMarketData(req.query.ids);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching market data' });
  }
});

router.get('/trending', protect, async (req, res) => {
  try {
    const data = await getTrendingCoins();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching trending coins' });
  }
});

module.exports = router;
