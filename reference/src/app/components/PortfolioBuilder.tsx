import { useState } from "react";
import { Plus, Trash2, RefreshCw } from "lucide-react";
import { motion } from "motion/react";
import * as Slider from '@radix-ui/react-slider';

const availableAssets = [
  { symbol: 'BTC', name: 'Bitcoin', color: '#f7931a' },
  { symbol: 'ETH', name: 'Ethereum', color: '#627eea' },
  { symbol: 'ADA', name: 'Cardano', color: '#0033ad' },
  { symbol: 'SOL', name: 'Solana', color: '#14f195' },
  { symbol: 'DOT', name: 'Polkadot', color: '#e6007a' },
  { symbol: 'MATIC', name: 'Polygon', color: '#8247e5' },
];

export function PortfolioBuilder() {
  const [allocations, setAllocations] = useState([
    { symbol: 'BTC', name: 'Bitcoin', allocation: 40, color: '#f7931a' },
    { symbol: 'ETH', name: 'Ethereum', allocation: 30, color: '#627eea' },
    { symbol: 'ADA', name: 'Cardano', allocation: 20, color: '#0033ad' },
    { symbol: 'SOL', name: 'Solana', allocation: 10, color: '#14f195' },
  ]);

  const totalAllocation = allocations.reduce((sum, asset) => sum + asset.allocation, 0);
  const isValid = totalAllocation === 100;

  const updateAllocation = (index: number, value: number) => {
    const newAllocations = [...allocations];
    newAllocations[index].allocation = value;
    setAllocations(newAllocations);
  };

  const removeAsset = (index: number) => {
    setAllocations(allocations.filter((_, i) => i !== index));
  };

  const autoBalance = () => {
    const count = allocations.length;
    const equalShare = Math.floor(100 / count);
    const remainder = 100 - (equalShare * count);
    
    setAllocations(allocations.map((asset, i) => ({
      ...asset,
      allocation: i === 0 ? equalShare + remainder : equalShare
    })));
  };

  return (
    <div className="glass rounded-3xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-semibold text-white">Portfolio Builder</h3>
          <p className="text-sm text-muted-foreground">Design your ideal allocation</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={autoBalance}
          className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/10 hover:bg-white/15 text-white transition-colors"
        >
          <RefreshCw className="h-4 w-4" />
          Auto Balance
        </motion.button>
      </div>

      {/* Total Allocation Indicator */}
      <div className={`mb-6 p-4 rounded-2xl border transition-all ${
        isValid 
          ? 'bg-green-500/10 border-green-500/30' 
          : 'bg-red-500/10 border-red-500/30'
      }`}>
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-white">Total Allocation</span>
          <span className={`text-lg font-bold ${
            isValid ? 'text-green-400' : 'text-red-400'
          }`}>
            {totalAllocation}%
          </span>
        </div>
        <div className="h-2 rounded-full bg-white/10 overflow-hidden">
          <motion.div
            animate={{ width: `${Math.min(totalAllocation, 100)}%` }}
            className={`h-full ${
              isValid ? 'bg-green-500' : 'bg-red-500'
            }`}
          />
        </div>
      </div>

      {/* Asset Allocations */}
      <div className="space-y-4 mb-6">
        {allocations.map((asset, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 rounded-2xl bg-white/5 border border-white/10"
          >
            <div className="flex items-center gap-3 mb-3">
              <div 
                className="h-10 w-10 rounded-xl flex items-center justify-center font-bold text-white"
                style={{ backgroundColor: asset.color }}
              >
                {asset.symbol.charAt(0)}
              </div>
              <div className="flex-1">
                <p className="font-semibold text-white">{asset.name}</p>
                <p className="text-sm text-muted-foreground">{asset.symbol}</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-white">{asset.allocation}%</p>
              </div>
              <button
                onClick={() => removeAsset(index)}
                className="p-2 rounded-xl hover:bg-red-500/20 text-red-400 transition-colors"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>

            {/* Slider */}
            <Slider.Root
              className="relative flex items-center select-none touch-none w-full h-5"
              value={[asset.allocation]}
              onValueChange={(value) => updateAllocation(index, value[0])}
              max={100}
              step={1}
            >
              <Slider.Track className="bg-white/10 relative grow rounded-full h-2">
                <Slider.Range 
                  className="absolute h-full rounded-full"
                  style={{ backgroundColor: asset.color }}
                />
              </Slider.Track>
              <Slider.Thumb
                className="block w-5 h-5 bg-white shadow-lg rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary/50"
                aria-label="Allocation"
              />
            </Slider.Root>
          </motion.div>
        ))}
      </div>

      {/* Add Asset */}
      <button className="w-full p-4 rounded-2xl border-2 border-dashed border-white/20 hover:border-primary/50 hover:bg-white/5 transition-all flex items-center justify-center gap-2 text-muted-foreground hover:text-primary">
        <Plus className="h-5 w-5" />
        <span className="font-medium">Add Asset</span>
      </button>

      {/* Action Buttons */}
      <div className="flex gap-3 mt-6">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          disabled={!isValid}
          className={`flex-1 py-3 rounded-2xl font-semibold text-white transition-all ${
            isValid
              ? 'gradient-primary shadow-lg shadow-primary/30'
              : 'bg-white/10 opacity-50 cursor-not-allowed'
          }`}
        >
          Apply Allocation
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="px-6 py-3 rounded-2xl bg-white/10 hover:bg-white/15 font-semibold text-white transition-colors"
        >
          Save as Template
        </motion.button>
      </div>
    </div>
  );
}
