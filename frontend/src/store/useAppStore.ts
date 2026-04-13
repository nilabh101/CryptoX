import { create } from 'zustand';

export interface Holding {
  name: string;
  symbol: string;
  price: number;
  change: number;
  amount: number;
  value: number;
}

interface AppState {
  user: any | null;
  isAuthenticated: boolean;
  holdings: Holding[];
  totalValue: number;
  profitLoss: number;
  profitLossPercent: number;
  setHoldings: (holdings: Holding[]) => void;
  setUser: (user: any) => void;
  logout: () => void;
}

export const useAppStore = create<AppState>((set) => ({
  user: null,
  isAuthenticated: false,
  holdings: [
    { name: "Bitcoin", symbol: "BTC", price: 42350.25, change: 5.42, amount: 0.85, value: 35997.71 },
    { name: "Ethereum", symbol: "ETH", price: 2245.80, change: -2.15, amount: 8.5, value: 19089.30 },
    { name: "Cardano", symbol: "ADA", price: 0.52, change: 8.23, amount: 18500, value: 9620.00 },
    { name: "Solana", symbol: "SOL", price: 98.45, change: 3.67, amount: 72, value: 7088.40 },
    { name: "Polkadot", symbol: "DOT", price: 6.85, change: -1.23, amount: 450, value: 3082.50 },
  ],
  totalValue: 72450.32,
  profitLoss: 12450.32,
  profitLossPercent: 20.78,
  setHoldings: (holdings) => set({ holdings }),
  setUser: (user) => set({ user, isAuthenticated: !!user }),
  logout: () => set({ user: null, isAuthenticated: false }),
}));
