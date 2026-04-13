import { TrendingUp, TrendingDown, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { LineChart, Line, PieChart, Pie, Cell, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { motion } from "motion/react";

const portfolioData = [
  { date: "Jan", value: 45000 },
  { date: "Feb", value: 52000 },
  { date: "Mar", value: 48000 },
  { date: "Apr", value: 61000 },
  { date: "May", value: 55000 },
  { date: "Jun", value: 68000 },
  { date: "Jul", value: 72000 },
];

const assetAllocation = [
  { name: "Bitcoin", value: 45, color: "#f7931a" },
  { name: "Ethereum", value: 30, color: "#627eea" },
  { name: "Cardano", value: 15, color: "#0033ad" },
  { name: "Solana", value: 10, color: "#14f195" },
];

const holdings = [
  { name: "Bitcoin", symbol: "BTC", price: 42350.25, change: 5.42, amount: 0.85, value: 35997.71 },
  { name: "Ethereum", symbol: "ETH", price: 2245.80, change: -2.15, amount: 8.5, value: 19089.30 },
  { name: "Cardano", symbol: "ADA", price: 0.52, change: 8.23, amount: 18500, value: 9620.00 },
  { name: "Solana", symbol: "SOL", price: 98.45, change: 3.67, amount: 72, value: 7088.40 },
  { name: "Polkadot", symbol: "DOT", price: 6.85, change: -1.23, amount: 450, value: 3082.50 },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function Dashboard() {
  const totalValue = 72450.32;
  const profitLoss = 12450.32;
  const profitLossPercent = 20.78;
  const isProfit = profitLoss > 0;

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-6 pb-20 lg:pb-6"
    >
      {/* Header */}
      <motion.div variants={item}>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Here's your portfolio overview.</p>
      </motion.div>

      {/* Portfolio Value Card */}
      <motion.div variants={item} className="glass rounded-3xl p-6 md:p-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="text-muted-foreground mb-2">Total Portfolio Value</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              ${totalValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </h2>
            <div className={`flex items-center gap-2 ${isProfit ? 'text-[#10b981]' : 'text-[#ef4444]'}`}>
              {isProfit ? <TrendingUp className="h-5 w-5" /> : <TrendingDown className="h-5 w-5" />}
              <span className="text-xl font-semibold">
                {isProfit ? '+' : ''}{profitLossPercent}%
              </span>
              <span className="text-muted-foreground">
                ({isProfit ? '+' : ''}${profitLoss.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })})
              </span>
            </div>
          </div>
          <div className="flex gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="gradient-primary px-6 py-3 rounded-2xl font-semibold text-white shadow-lg shadow-primary/30"
            >
              Buy Crypto
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 hover:bg-white/15 px-6 py-3 rounded-2xl font-semibold text-white transition-colors"
            >
              Sell
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Portfolio Growth Chart */}
        <motion.div variants={item} className="lg:col-span-2 glass rounded-3xl p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-semibold text-white">Portfolio Growth</h3>
              <p className="text-sm text-muted-foreground">Last 7 months</p>
            </div>
            <div className="flex gap-2">
              <button className="px-3 py-1.5 rounded-xl bg-primary/10 text-primary text-sm font-medium">7M</button>
              <button className="px-3 py-1.5 rounded-xl bg-white/5 text-muted-foreground hover:bg-white/10 text-sm font-medium transition-colors">1Y</button>
              <button className="px-3 py-1.5 rounded-xl bg-white/5 text-muted-foreground hover:bg-white/10 text-sm font-medium transition-colors">ALL</button>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={portfolioData}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
              <XAxis dataKey="date" stroke="#9ca3af" style={{ fontSize: '12px' }} />
              <YAxis stroke="#9ca3af" style={{ fontSize: '12px' }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'rgba(17, 17, 27, 0.95)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '16px',
                  padding: '12px',
                }}
                labelStyle={{ color: '#f8f9fa' }}
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#6366f1"
                strokeWidth={3}
                dot={{ fill: '#6366f1', strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, fill: '#6366f1' }}
                fill="url(#colorValue)"
              />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Asset Allocation */}
        <motion.div variants={item} className="glass rounded-3xl p-6">
          <h3 className="text-xl font-semibold text-white mb-6">Asset Allocation</h3>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={assetAllocation}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {assetAllocation.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: 'rgba(17, 17, 27, 0.95)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '16px',
                  padding: '12px',
                }}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="space-y-3 mt-4">
            {assetAllocation.map((asset, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full" style={{ backgroundColor: asset.color }} />
                  <span className="text-sm text-foreground">{asset.name}</span>
                </div>
                <span className="text-sm font-semibold text-white">{asset.value}%</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Holdings Table */}
      <motion.div variants={item} className="glass rounded-3xl p-6 overflow-hidden">
        <h3 className="text-xl font-semibold text-white mb-6">Your Holdings</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="pb-4 text-left text-sm font-semibold text-muted-foreground">Asset</th>
                <th className="pb-4 text-right text-sm font-semibold text-muted-foreground">Price</th>
                <th className="pb-4 text-right text-sm font-semibold text-muted-foreground">24h Change</th>
                <th className="pb-4 text-right text-sm font-semibold text-muted-foreground">Holdings</th>
                <th className="pb-4 text-right text-sm font-semibold text-muted-foreground">Value</th>
              </tr>
            </thead>
            <tbody>
              {holdings.map((holding, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="border-b border-white/5 hover:bg-white/5 transition-colors"
                >
                  <td className="py-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center font-bold text-white">
                        {holding.symbol.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-white">{holding.name}</p>
                        <p className="text-sm text-muted-foreground">{holding.symbol}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 text-right text-white font-medium">
                    ${holding.price.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                  </td>
                  <td className="py-4 text-right">
                    <span className={`flex items-center justify-end gap-1 ${holding.change > 0 ? 'text-[#10b981]' : 'text-[#ef4444]'}`}>
                      {holding.change > 0 ? <ArrowUpRight className="h-4 w-4" /> : <ArrowDownRight className="h-4 w-4" />}
                      {Math.abs(holding.change)}%
                    </span>
                  </td>
                  <td className="py-4 text-right text-muted-foreground">
                    {holding.amount.toLocaleString('en-US', { maximumFractionDigits: 2 })} {holding.symbol}
                  </td>
                  <td className="py-4 text-right font-semibold text-white">
                    ${holding.value.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </motion.div>
  );
}
