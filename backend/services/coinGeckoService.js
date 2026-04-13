const axios = require('axios');

const COINGECKO_API = 'https://api.coingecko.com/api/v3';

// Cache to prevent strict rate limiting
let cache = {
  marketData: { data: null, timestamp: 0 },
  trending: { data: null, timestamp: 0 }
};

const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

const getMarketData = async (ids = 'bitcoin,ethereum,cardano,solana,polkadot') => {
  const now = Date.now();
  if (cache.marketData.data && (now - cache.marketData.timestamp < CACHE_TTL)) {
    return cache.marketData.data;
  }
  
  try {
    const response = await axios.get(`${COINGECKO_API}/simple/price`, {
      params: {
        ids,
        vs_currencies: 'usd',
        include_24hr_change: 'true'
      }
    });
    cache.marketData = { data: response.data, timestamp: now };
    return response.data;
  } catch (error) {
    console.error('Error fetching market data from CoinGecko:', error.message);
    throw error;
  }
};

const getTrendingCoins = async () => {
    const now = Date.now();
    if (cache.trending.data && (now - cache.trending.timestamp < CACHE_TTL)) {
        return cache.trending.data;
    }
    
    try {
        const response = await axios.get(`${COINGECKO_API}/search/trending`);
        cache.trending = { data: response.data, timestamp: now };
        return response.data;
    } catch (error) {
        console.error('Error fetching trending coins:', error.message);
        throw error;
    }
};

module.exports = {
  getMarketData,
  getTrendingCoins
};
