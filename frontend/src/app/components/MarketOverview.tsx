import { TrendingUp, TrendingDown, Activity } from "lucide-react";
import { motion } from "motion/react";

export function MarketOverview() {
  const marketCap = 2.45; // in trillions
  const btcDominance = 48.5;
  const fearGreedIndex = 68; // 0-100
  const volume24h = 125.8; // in billions

  const getFearGreedColor = (value: number) => {
    if (value < 25) return 'text-red-500';
    if (value < 50) return 'text-orange-500';
    if (value < 75) return 'text-yellow-500';
    return 'text-green-500';
  };

  const getFearGreedLabel = (value: number) => {
    if (value < 25) return 'Extreme Fear';
    if (value < 50) return 'Fear';
    if (value < 75) return 'Greed';
    return 'Extreme Greed';
  };

  return (
    <div className="glass rounded-3xl p-6">
      <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
        <Activity className="h-5 w-5 text-primary" />
        Global Market Overview
      </h3>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Market Cap */}
        <div className="p-4 rounded-2xl bg-white/5">
          <p className="text-xs text-muted-foreground mb-1">Market Cap</p>
          <p className="text-xl font-bold text-white mb-1">${marketCap}T</p>
          <p className="text-xs text-green-400 flex items-center gap-1">
            <TrendingUp className="h-3 w-3" />
            +2.3%
          </p>
        </div>

        {/* BTC Dominance */}
        <div className="p-4 rounded-2xl bg-white/5">
          <p className="text-xs text-muted-foreground mb-1">BTC Dominance</p>
          <p className="text-xl font-bold text-white mb-1">{btcDominance}%</p>
          <div className="h-1.5 rounded-full bg-white/10 overflow-hidden mt-2">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${btcDominance}%` }}
              transition={{ duration: 1 }}
              className="h-full bg-orange-500"
            />
          </div>
        </div>

        {/* 24h Volume */}
        <div className="p-4 rounded-2xl bg-white/5">
          <p className="text-xs text-muted-foreground mb-1">24h Volume</p>
          <p className="text-xl font-bold text-white mb-1">${volume24h}B</p>
          <p className="text-xs text-red-400 flex items-center gap-1">
            <TrendingDown className="h-3 w-3" />
            -5.1%
          </p>
        </div>

        {/* Fear & Greed */}
        <div className="p-4 rounded-2xl bg-white/5">
          <p className="text-xs text-muted-foreground mb-1">Fear & Greed</p>
          <div className="flex items-center gap-2 mb-1">
            <p className={`text-xl font-bold ${getFearGreedColor(fearGreedIndex)}`}>
              {fearGreedIndex}
            </p>
            <p className="text-xs text-muted-foreground">{getFearGreedLabel(fearGreedIndex)}</p>
          </div>
          <div className="h-1.5 rounded-full bg-white/10 overflow-hidden mt-2">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${fearGreedIndex}%` }}
              transition={{ duration: 1 }}
              className={`h-full ${
                fearGreedIndex < 25 ? 'bg-red-500' :
                fearGreedIndex < 50 ? 'bg-orange-500' :
                fearGreedIndex < 75 ? 'bg-yellow-500' :
                'bg-green-500'
              }`}
            />
          </div>
        </div>
      </div>

      {/* Top Movers */}
      <div className="mt-6">
        <h4 className="text-sm font-semibold text-white mb-3">Top Movers (24h)</h4>
        <div className="flex gap-3 overflow-x-auto pb-2">
          {[
            { name: 'BTC', change: 5.42, color: 'text-green-400' },
            { name: 'ETH', change: -2.15, color: 'text-red-400' },
            { name: 'ADA', change: 8.23, color: 'text-green-400' },
            { name: 'SOL', change: 3.67, color: 'text-green-400' },
            { name: 'DOT', change: -1.23, color: 'text-red-400' },
          ].map((coin, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex-shrink-0 px-4 py-2 rounded-2xl bg-white/5 flex items-center gap-2"
            >
              <span className="text-sm font-semibold text-white">{coin.name}</span>
              <span className={`text-sm font-medium ${coin.color} flex items-center gap-1`}>
                {coin.change > 0 ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                {Math.abs(coin.change)}%
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
