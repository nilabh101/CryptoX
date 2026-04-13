import { useState } from "react";
import { DollarSign, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const currencies = [
  { code: 'USD', symbol: '$', name: 'US Dollar', flag: '🇺🇸', rate: 1 },
  { code: 'EUR', symbol: '€', name: 'Euro', flag: '🇪🇺', rate: 0.92 },
  { code: 'GBP', symbol: '£', name: 'British Pound', flag: '🇬🇧', rate: 0.79 },
  { code: 'JPY', symbol: '¥', name: 'Japanese Yen', flag: '🇯🇵', rate: 149.50 },
  { code: 'AUD', symbol: 'A$', name: 'Australian Dollar', flag: '🇦🇺', rate: 1.53 },
  { code: 'CAD', symbol: 'C$', name: 'Canadian Dollar', flag: '🇨🇦', rate: 1.36 },
];

export function CurrencySelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(currencies[0]);

  const handleSelect = (currency: typeof currencies[0]) => {
    setSelected(currency);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded-2xl bg-white/5 px-3 py-2 hover:bg-white/10 transition-colors"
      >
        <span className="text-xl">{selected.flag}</span>
        <span className="font-semibold text-white text-sm">{selected.code}</span>
        <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            className="absolute right-0 top-full mt-2 w-64 glass-strong rounded-3xl shadow-2xl overflow-hidden z-50"
          >
            <div className="p-2">
              {currencies.map((currency, index) => (
                <motion.button
                  key={currency.code}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => handleSelect(currency)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all ${
                    selected.code === currency.code
                      ? 'bg-primary/10 text-primary'
                      : 'hover:bg-white/5 text-foreground'
                  }`}
                >
                  <span className="text-2xl">{currency.flag}</span>
                  <div className="flex-1 text-left">
                    <p className="font-semibold text-sm">{currency.code}</p>
                    <p className="text-xs text-muted-foreground">{currency.name}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">
                      {currency.symbol}{currency.rate.toFixed(2)}
                    </p>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
