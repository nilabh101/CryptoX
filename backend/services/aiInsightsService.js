// Heuristic-based AI Insights Stub
// Simulating AI analysis of market data
const generateInsights = (marketData, portfolioHoldings) => {
    const insights = [];
    
    // Example logic
    
    // Check if Bitcoin is heavily down
    if (marketData['bitcoin'] && marketData['bitcoin'].usd_24h_change < -5) {
        insights.push({
            type: 'alert',
            message: 'Bitcoin has dropped more than 5% in the last 24hrs. Consider re-evaluating risk exposure.',
            confidence: 0.85
        });
    } else if (marketData['bitcoin'] && marketData['bitcoin'].usd_24h_change > 5) {
        insights.push({
            type: 'opportunity',
            message: 'Bitcoin is rallying. Momentum indicators suggest bullish sentiment.',
            confidence: 0.78
        });
    }

    if (insights.length === 0) {
        insights.push({
            type: 'neutral',
            message: 'Market is currently stable. A good time to hold and observe.',
            confidence: 0.90
        });
    }

    return insights;
};

module.exports = { generateInsights };
