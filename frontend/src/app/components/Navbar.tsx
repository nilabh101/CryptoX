import { Search } from "lucide-react";
import { NotificationCenter } from "./NotificationCenter";
import { ThemeCustomizer } from "./ThemeCustomizer";
import { CurrencySelector } from "./CurrencySelector";

export function Navbar() {
  return (
    <header className="sticky top-0 z-30 glass-strong border-b border-white/10">
      <div className="flex items-center justify-between gap-4 px-4 py-4 md:px-6">
        {/* Search */}
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search assets, news... (⌘K)"
              className="w-full rounded-2xl bg-white/5 border border-white/10 py-2.5 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3">
          {/* Currency Selector */}
          <CurrencySelector />

          {/* Theme Customizer */}
          <div className="relative">
            <ThemeCustomizer />
          </div>

          {/* Notifications */}
          <NotificationCenter />

          {/* Profile - Hidden on mobile */}
          <div className="hidden md:flex items-center gap-3 rounded-2xl bg-white/5 px-3 py-2 hover:bg-white/10 transition-colors cursor-pointer">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500" />
            <div className="text-left">
              <p className="text-sm font-semibold text-white">John Doe</p>
              <p className="text-xs text-muted-foreground">Premium</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}