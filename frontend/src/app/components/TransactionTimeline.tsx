import { ArrowUpRight, ArrowDownRight, Clock } from "lucide-react";
import { motion } from "motion/react";

const transactions = [
  {
    id: 1,
    type: 'buy',
    asset: 'Bitcoin',
    symbol: 'BTC',
    amount: 0.15,
    price: 42350.25,
    total: 6352.54,
    date: '2026-04-09',
    time: '14:32',
    status: 'completed',
  },
  {
    id: 2,
    type: 'sell',
    asset: 'Ethereum',
    symbol: 'ETH',
    amount: 2.5,
    price: 2245.80,
    total: 5614.50,
    date: '2026-04-08',
    time: '09:15',
    status: 'completed',
  },
  {
    id: 3,
    type: 'buy',
    asset: 'Cardano',
    symbol: 'ADA',
    amount: 5000,
    price: 0.52,
    total: 2600.00,
    date: '2026-04-07',
    time: '16:45',
    status: 'completed',
  },
  {
    id: 4,
    type: 'buy',
    asset: 'Solana',
    symbol: 'SOL',
    amount: 20,
    price: 98.45,
    total: 1969.00,
    date: '2026-04-06',
    time: '11:20',
    status: 'pending',
  },
  {
    id: 5,
    type: 'sell',
    asset: 'Polkadot',
    symbol: 'DOT',
    amount: 150,
    price: 6.85,
    total: 1027.50,
    date: '2026-04-05',
    time: '08:30',
    status: 'completed',
  },
];

export function TransactionTimeline() {
  return (
    <div className="glass rounded-3xl p-6">
      <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
        <Clock className="h-5 w-5 text-primary" />
        Transaction History
      </h3>

      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-[21px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-purple-500 to-transparent" />

        {/* Transactions */}
        <div className="space-y-6">
          {transactions.map((transaction, index) => (
            <motion.div
              key={transaction.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-12"
            >
              {/* Timeline Dot */}
              <div className={`absolute left-0 w-11 h-11 rounded-2xl flex items-center justify-center ${
                transaction.type === 'buy'
                  ? 'bg-gradient-to-br from-green-500 to-emerald-600'
                  : 'bg-gradient-to-br from-red-500 to-rose-600'
              }`}>
                {transaction.type === 'buy' ? (
                  <ArrowDownRight className="h-5 w-5 text-white" />
                ) : (
                  <ArrowUpRight className="h-5 w-5 text-white" />
                )}
              </div>

              {/* Transaction Card */}
              <div className="p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-semibold text-white">
                        {transaction.type === 'buy' ? 'Bought' : 'Sold'} {transaction.asset}
                      </p>
                      <span className={`px-2 py-0.5 rounded-lg text-xs font-medium ${
                        transaction.status === 'completed'
                          ? 'bg-green-500/20 text-green-400'
                          : 'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {transaction.status}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {transaction.date} at {transaction.time}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className={`text-lg font-bold ${
                      transaction.type === 'buy' ? 'text-red-400' : 'text-green-400'
                    }`}>
                      {transaction.type === 'buy' ? '-' : '+'}${transaction.total.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="p-2 rounded-xl bg-white/5">
                    <p className="text-xs text-muted-foreground mb-1">Amount</p>
                    <p className="text-sm font-semibold text-white">
                      {transaction.amount} {transaction.symbol}
                    </p>
                  </div>
                  <div className="p-2 rounded-xl bg-white/5">
                    <p className="text-xs text-muted-foreground mb-1">Price</p>
                    <p className="text-sm font-semibold text-white">
                      ${transaction.price.toLocaleString()}
                    </p>
                  </div>
                  <div className="p-2 rounded-xl bg-white/5">
                    <p className="text-xs text-muted-foreground mb-1">Type</p>
                    <p className={`text-sm font-semibold ${
                      transaction.type === 'buy' ? 'text-green-400' : 'text-red-400'
                    }`}>
                      {transaction.type.toUpperCase()}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Load More */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full mt-6 py-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium transition-all"
      >
        Load More Transactions
      </motion.button>
    </div>
  );
}
