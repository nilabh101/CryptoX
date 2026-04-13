import { useState } from "react";
import { Bell, X, TrendingUp, TrendingDown, AlertCircle, Sparkles, Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const notifications = [
  {
    id: 1,
    type: 'alert',
    title: 'Bitcoin Price Alert',
    message: 'BTC has reached $45,000',
    time: '2 minutes ago',
    unread: true,
    icon: TrendingUp,
    color: 'text-green-400',
  },
  {
    id: 2,
    type: 'recommendation',
    title: 'Portfolio Rebalancing',
    message: 'AI recommends reducing BTC allocation by 5%',
    time: '1 hour ago',
    unread: true,
    icon: Sparkles,
    color: 'text-primary',
  },
  {
    id: 3,
    type: 'warning',
    title: 'High Volatility Detected',
    message: 'SOL showing 25% higher volatility',
    time: '3 hours ago',
    unread: false,
    icon: AlertCircle,
    color: 'text-yellow-400',
  },
  {
    id: 4,
    type: 'price',
    title: 'Ethereum Price Drop',
    message: 'ETH decreased by 5% in the last hour',
    time: '5 hours ago',
    unread: false,
    icon: TrendingDown,
    color: 'text-red-400',
  },
];

export function NotificationCenter() {
  const [isOpen, setIsOpen] = useState(false);
  const [items, setItems] = useState(notifications);
  
  const unreadCount = items.filter(n => n.unread).length;

  const markAsRead = (id: number) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, unread: false } : item
    ));
  };

  const markAllAsRead = () => {
    setItems(items.map(item => ({ ...item, unread: false })));
  };

  return (
    <>
      {/* Notification Button */}
      <div className="relative">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="relative rounded-2xl bg-white/5 p-2.5 text-muted-foreground hover:bg-white/10 hover:text-foreground transition-colors"
        >
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -right-1 -top-1 h-5 w-5 rounded-full bg-danger text-[10px] font-bold text-white flex items-center justify-center"
            >
              {unreadCount}
            </motion.span>
          )}
        </motion.button>

        {/* Notification Panel */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              className="absolute right-0 top-full mt-2 w-96 glass-strong rounded-3xl shadow-2xl overflow-hidden z-50"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-white/10">
                <div>
                  <h3 className="font-semibold text-white">Notifications</h3>
                  <p className="text-xs text-muted-foreground">{unreadCount} unread</p>
                </div>
                <div className="flex items-center gap-2">
                  {unreadCount > 0 && (
                    <button
                      onClick={markAllAsRead}
                      className="text-xs text-primary hover:underline"
                    >
                      Mark all read
                    </button>
                  )}
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1 rounded-lg hover:bg-white/10 text-muted-foreground transition-colors"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Notifications List */}
              <div className="max-h-[400px] overflow-y-auto">
                {items.map((notification, index) => {
                  const Icon = notification.icon;
                  return (
                    <motion.div
                      key={notification.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className={`flex gap-3 p-4 border-b border-white/5 hover:bg-white/5 transition-colors cursor-pointer ${
                        notification.unread ? 'bg-white/5' : ''
                      }`}
                      onClick={() => markAsRead(notification.id)}
                    >
                      <div className={`mt-1 ${notification.color}`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <p className="font-medium text-white text-sm">{notification.title}</p>
                          {notification.unread && (
                            <div className="h-2 w-2 rounded-full bg-primary flex-shrink-0 mt-1" />
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground mb-1">{notification.message}</p>
                        <p className="text-xs text-muted-foreground">{notification.time}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Footer */}
              <div className="p-3 border-t border-white/10 text-center">
                <button className="text-sm text-primary hover:underline">
                  View all notifications
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
