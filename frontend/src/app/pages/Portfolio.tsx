import { Plus, ArrowUpRight, ArrowDownRight, TrendingUp } from "lucide-react";
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { motion } from "motion/react";
import { PortfolioBuilder } from "../components/PortfolioBuilder";
import { TransactionTimeline } from "../components/TransactionTimeline";
import { GoalTracker } from "../components/GoalTracker";

const transactions = [
  { id: 1, type: 'buy', asset: 'Bitcoin', symbol: 'BTC', amount: 0.15, price: 42350.25, date: '2026-04-09', time: '14:32' },
  { id: 2, type: 'sell', asset: 'Ethereum', symbol: 'ETH', amount: 2.5, price: 2245.80, date: '2026-04-08', time: '09:15' },
  { id: 3, type: 'buy', asset: 'Cardano', symbol: 'ADA', amount: 5000, price: 0.52, date: '2026-04-07', time: '16:45' },
  { id: 4, type: 'buy', asset: 'Solana', symbol: 'SOL', amount: 20, price: 98.45, date: '2026-04-06', time: '11:20' },
];

const performanceData = [
  { month: 'Jan', profit: 2400 },
  { month: 'Feb', profit: 3800 },
  { month: 'Mar', profit: -1200 },
  { month: 'Apr', profit: 5200 },
  { month: 'May', profit: -800 },
  { month: 'Jun', profit: 6800 },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function Portfolio() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-6 pb-20 lg:pb-6"
    >
      {/* Header */}
      <motion.div variants={item} className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Portfolio</h1>
          <p className="text-muted-foreground">Manage your cryptocurrency assets</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="gradient-primary px-6 py-3 rounded-2xl font-semibold text-white shadow-lg shadow-primary/30 flex items-center gap-2"
        >
          <Plus className="h-5 w-5" />
          Add Asset
        </motion.button>
      </motion.div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div variants={item} className="glass rounded-3xl p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl -z-10" />
          <p className="text-muted-foreground text-sm mb-2">Total Invested</p>
          <p className="text-3xl font-bold text-white mb-1">$60,000.00</p>
          <p className="text-sm text-primary flex items-center gap-1">
            <TrendingUp className="h-4 w-4" />
            Initial capital
          </p>
        </motion.div>

        <motion.div variants={item} className="glass rounded-3xl p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-2xl -z-10" />
          <p className="text-muted-foreground text-sm mb-2">Total Returns</p>
          <p className="text-3xl font-bold text-white mb-1">$12,450.32</p>
          <p className="text-sm text-[#10b981] flex items-center gap-1">
            <ArrowUpRight className="h-4 w-4" />
            +20.75% gain
          </p>
        </motion.div>

        <motion.div variants={item} className="glass rounded-3xl p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl -z-10" />
          <p className="text-muted-foreground text-sm mb-2">Best Performer</p>
          <p className="text-3xl font-bold text-white mb-1">ADA</p>
          <p className="text-sm text-[#10b981] flex items-center gap-1">
            <ArrowUpRight className="h-4 w-4" />
            +45.2% return
          </p>
        </motion.div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Performance Chart */}
          <motion.div variants={item} className="glass rounded-3xl p-6">
            <h3 className="text-xl font-semibold text-white mb-6">Monthly Performance</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                <XAxis dataKey="month" stroke="#9ca3af" style={{ fontSize: '12px' }} />
                <YAxis stroke="#9ca3af" style={{ fontSize: '12px' }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(17, 17, 27, 0.95)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '16px',
                    padding: '12px',
                  }}
                  cursor={{ fill: 'rgba(99, 102, 241, 0.1)' }}
                />
                <Bar
                  dataKey="profit"
                  fill="#6366f1"
                  radius={[8, 8, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Portfolio Builder */}
          <motion.div variants={item}>
            <PortfolioBuilder />
          </motion.div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Transaction Timeline */}
          <motion.div variants={item}>
            <TransactionTimeline />
          </motion.div>

          {/* Goal Tracker */}
          <motion.div variants={item}>
            <GoalTracker />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}