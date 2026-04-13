import { NavLink } from "react-router";
import { 
  LayoutDashboard, 
  Wallet, 
  BarChart3, 
  Bell, 
  Newspaper, 
  Settings,
  TrendingUp
} from "lucide-react";
import { motion } from "motion/react";

const navItems = [
  { to: "/", label: "Dashboard", icon: LayoutDashboard, exact: true },
  { to: "/portfolio", label: "Portfolio", icon: Wallet },
  { to: "/analytics", label: "Analytics", icon: BarChart3 },
  { to: "/alerts", label: "Alerts", icon: Bell },
  { to: "/news", label: "News", icon: Newspaper },
  { to: "/settings", label: "Settings", icon: Settings },
];

export function Sidebar() {
  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="fixed left-0 top-0 z-40 hidden h-screen w-64 lg:block">
        <div className="glass-strong h-full overflow-y-auto">
          <div className="flex h-full flex-col">
            {/* Logo */}
            <div className="flex items-center gap-3 border-b border-white/10 p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl gradient-primary">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-white">CryptoPulse AI</h1>
                <p className="text-xs text-muted-foreground">Portfolio Tracker</p>
              </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 space-y-1 p-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.exact}
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-2xl px-4 py-3 transition-all duration-200 ${
                      isActive
                        ? "bg-primary/10 text-primary shadow-lg shadow-primary/20"
                        : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <motion.div
                      className="flex items-center gap-3 w-full"
                      whileHover={{ x: 4 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <item.icon className="h-5 w-5" />
                      <span className="font-medium">{item.label}</span>
                      {isActive && (
                        <motion.div
                          layoutId="activeIndicator"
                          className="ml-auto h-2 w-2 rounded-full bg-primary"
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        />
                      )}
                    </motion.div>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* User Section */}
            <div className="border-t border-white/10 p-4">
              <div className="glass rounded-2xl p-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500" />
                  <div className="flex-1">
                    <p className="font-semibold text-sm text-white">John Doe</p>
                    <p className="text-xs text-muted-foreground">Premium Plan</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden glass-strong border-t border-white/10">
        <nav className="flex items-center justify-around p-2">
          {navItems.slice(0, 5).map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.exact}
              className={({ isActive }) =>
                `flex flex-col items-center gap-1 rounded-xl px-3 py-2 transition-all ${
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground"
                }`
              }
            >
              <item.icon className="h-5 w-5" />
              <span className="text-xs">{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </>
  );
}
