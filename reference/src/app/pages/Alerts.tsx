import { Bell, Plus, TrendingUp, TrendingDown, DollarSign } from "lucide-react";
import { motion } from "motion/react";
import * as Switch from '@radix-ui/react-switch';

const alerts = [
  {
    id: 1,
    asset: 'Bitcoin',
    symbol: 'BTC',
    type: 'price',
    condition: 'above',
    target: 45000,
    current: 42350.25,
    enabled: true,
    triggered: false,
  },
  {
    id: 2,
    asset: 'Ethereum',
    symbol: 'ETH',
    type: 'price',
    condition: 'below',
    target: 2000,
    current: 2245.80,
    enabled: true,
    triggered: false,
  },
  {
    id: 3,
    asset: 'Cardano',
    symbol: 'ADA',
    type: 'change',
    condition: 'above',
    target: 10,
    current: 8.23,
    enabled: false,
    triggered: false,
  },
  {
    id: 4,
    asset: 'Solana',
    symbol: 'SOL',
    type: 'price',
    condition: 'above',
    target: 100,
    current: 98.45,
    enabled: true,
    triggered: false,
  },
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

export function Alerts() {
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
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Alerts</h1>
          <p className="text-muted-foreground">Set price alerts and notifications for your assets</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="gradient-primary px-6 py-3 rounded-2xl font-semibold text-white shadow-lg shadow-primary/30 flex items-center gap-2"
        >
          <Plus className="h-5 w-5" />
          New Alert
        </motion.button>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div variants={item} className="glass rounded-3xl p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl -z-10" />
          <div className="flex items-center justify-between">
            <div>
              <p className="text-muted-foreground text-sm mb-2">Active Alerts</p>
              <p className="text-3xl font-bold text-white">3</p>
            </div>
            <div className="h-12 w-12 rounded-2xl gradient-primary flex items-center justify-center">
              <Bell className="h-6 w-6 text-white" />
            </div>
          </div>
        </motion.div>

        <motion.div variants={item} className="glass rounded-3xl p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-2xl -z-10" />
          <div className="flex items-center justify-between">
            <div>
              <p className="text-muted-foreground text-sm mb-2">Triggered Today</p>
              <p className="text-3xl font-bold text-white">0</p>
            </div>
            <div className="h-12 w-12 rounded-2xl gradient-success flex items-center justify-center">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
          </div>
        </motion.div>

        <motion.div variants={item} className="glass rounded-3xl p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl -z-10" />
          <div className="flex items-center justify-between">
            <div>
              <p className="text-muted-foreground text-sm mb-2">Total Alerts</p>
              <p className="text-3xl font-bold text-white">4</p>
            </div>
            <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <DollarSign className="h-6 w-6 text-white" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Create Alert Form */}
      <motion.div variants={item} className="glass rounded-3xl p-6">
        <h3 className="text-xl font-semibold text-white mb-6">Create New Alert</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label className="text-sm text-muted-foreground mb-2 block">Asset</label>
            <select className="w-full rounded-2xl bg-white/5 border border-white/10 px-4 py-3 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all">
              <option>Bitcoin (BTC)</option>
              <option>Ethereum (ETH)</option>
              <option>Cardano (ADA)</option>
              <option>Solana (SOL)</option>
            </select>
          </div>
          <div>
            <label className="text-sm text-muted-foreground mb-2 block">Alert Type</label>
            <select className="w-full rounded-2xl bg-white/5 border border-white/10 px-4 py-3 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all">
              <option>Price Alert</option>
              <option>% Change Alert</option>
              <option>Volume Alert</option>
            </select>
          </div>
          <div>
            <label className="text-sm text-muted-foreground mb-2 block">Condition</label>
            <select className="w-full rounded-2xl bg-white/5 border border-white/10 px-4 py-3 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all">
              <option>Above</option>
              <option>Below</option>
            </select>
          </div>
          <div>
            <label className="text-sm text-muted-foreground mb-2 block">Target Value</label>
            <input
              type="number"
              placeholder="0.00"
              className="w-full rounded-2xl bg-white/5 border border-white/10 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
            />
          </div>
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="mt-6 w-full md:w-auto gradient-primary px-8 py-3 rounded-2xl font-semibold text-white shadow-lg shadow-primary/30"
        >
          Create Alert
        </motion.button>
      </motion.div>

      {/* Active Alerts */}
      <motion.div variants={item} className="glass rounded-3xl p-6">
        <h3 className="text-xl font-semibold text-white mb-6">Your Alerts</h3>
        <div className="space-y-4">
          {alerts.map((alert, index) => (
            <motion.div
              key={alert.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
            >
              <div className="flex items-center gap-4 flex-1">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center font-bold text-white">
                  {alert.symbol.charAt(0)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-semibold text-white">{alert.asset}</p>
                    <span className="text-sm text-muted-foreground">({alert.symbol})</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-muted-foreground">
                      {alert.type === 'price' ? 'Price' : 'Change'} {alert.condition}
                    </span>
                    <span className="font-semibold text-primary">
                      {alert.type === 'price' ? `$${alert.target.toLocaleString()}` : `${alert.target}%`}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-right hidden md:block">
                  <p className="text-sm text-muted-foreground">Current</p>
                  <p className="font-semibold text-white">
                    {alert.type === 'price' ? `$${alert.current.toLocaleString()}` : `${alert.current}%`}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <Switch.Root
                    className="w-11 h-6 rounded-full relative bg-white/10 data-[state=checked]:bg-primary transition-colors"
                    defaultChecked={alert.enabled}
                  >
                    <Switch.Thumb className="block w-5 h-5 bg-white rounded-full transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[22px]" />
                  </Switch.Root>
                  <span className={`text-sm font-medium ${alert.enabled ? 'text-primary' : 'text-muted-foreground'}`}>
                    {alert.enabled ? 'Active' : 'Paused'}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
