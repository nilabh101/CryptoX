import { AlertTriangle } from "lucide-react";
import { motion } from "motion/react";

const heatmapData = [
  { asset: 'BTC', volatility: 65, liquidity: 95, correlation: 45, marketRisk: 55, regulatoryRisk: 40 },
  { asset: 'ETH', volatility: 70, liquidity: 90, correlation: 60, marketRisk: 60, regulatoryRisk: 45 },
  { asset: 'ADA', volatility: 80, liquidity: 70, correlation: 55, marketRisk: 65, regulatoryRisk: 50 },
  { asset: 'SOL', volatility: 85, liquidity: 75, correlation: 50, marketRisk: 70, regulatoryRisk: 55 },
  { asset: 'DOT', volatility: 75, liquidity: 65, correlation: 52, marketRisk: 62, regulatoryRisk: 48 },
];

const riskCategories = ['Volatility', 'Liquidity', 'Correlation', 'Market Risk', 'Regulatory'];

export function RiskHeatmap() {
  const getRiskColor = (value: number) => {
    if (value < 30) return 'bg-green-500/80';
    if (value < 50) return 'bg-yellow-500/80';
    if (value < 70) return 'bg-orange-500/80';
    return 'bg-red-500/80';
  };

  const getRiskIntensity = (value: number) => {
    return value / 100;
  };

  return (
    <div className="glass rounded-3xl p-6">
      <div className="flex items-center gap-2 mb-6">
        <AlertTriangle className="h-5 w-5 text-orange-500" />
        <h3 className="text-xl font-semibold text-white">Risk Heatmap</h3>
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-[600px]">
          {/* Header */}
          <div className="grid grid-cols-6 gap-2 mb-2">
            <div className="p-2" />
            {riskCategories.map((category, i) => (
              <div key={i} className="p-2 text-center">
                <p className="text-xs font-medium text-muted-foreground">{category}</p>
              </div>
            ))}
          </div>

          {/* Heatmap Grid */}
          <div className="space-y-2">
            {heatmapData.map((row, rowIndex) => (
              <motion.div
                key={row.asset}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: rowIndex * 0.1 }}
                className="grid grid-cols-6 gap-2"
              >
                {/* Asset Name */}
                <div className="flex items-center p-2">
                  <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center font-bold text-white text-xs mr-2">
                    {row.asset.charAt(0)}
                  </div>
                  <span className="font-semibold text-white text-sm">{row.asset}</span>
                </div>

                {/* Risk Cells */}
                {[row.volatility, row.liquidity, row.correlation, row.marketRisk, row.regulatoryRisk].map((value, cellIndex) => (
                  <motion.div
                    key={cellIndex}
                    whileHover={{ scale: 1.1, zIndex: 10 }}
                    className="relative group"
                  >
                    <div
                      className={`h-12 rounded-xl ${getRiskColor(value)} flex items-center justify-center cursor-pointer transition-all`}
                      style={{ opacity: 0.3 + (getRiskIntensity(value) * 0.7) }}
                    >
                      <span className="text-white font-bold text-sm">{value}</span>
                    </div>
                    
                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 rounded-xl glass-strong opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-20">
                      <p className="text-xs text-white font-medium">
                        {riskCategories[cellIndex]}: {value}%
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ))}
          </div>

          {/* Legend */}
          <div className="flex items-center justify-center gap-6 mt-6 pt-4 border-t border-white/10">
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 rounded bg-green-500/80" />
              <span className="text-xs text-muted-foreground">Low Risk (0-30)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 rounded bg-yellow-500/80" />
              <span className="text-xs text-muted-foreground">Medium (30-50)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 rounded bg-orange-500/80" />
              <span className="text-xs text-muted-foreground">High (50-70)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 rounded bg-red-500/80" />
              <span className="text-xs text-muted-foreground">Critical (70+)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
