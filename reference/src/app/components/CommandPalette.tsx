import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Search, TrendingUp, ArrowRight, Command } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const commands = [
  { id: 1, label: 'Dashboard', path: '/', category: 'Navigate', icon: '📊' },
  { id: 2, label: 'Portfolio', path: '/portfolio', category: 'Navigate', icon: '💼' },
  { id: 3, label: 'Analytics', path: '/analytics', category: 'Navigate', icon: '📈' },
  { id: 4, label: 'Alerts', path: '/alerts', category: 'Navigate', icon: '🔔' },
  { id: 5, label: 'News', path: '/news', category: 'Navigate', icon: '📰' },
  { id: 6, label: 'Settings', path: '/settings', category: 'Navigate', icon: '⚙️' },
  { id: 7, label: 'Buy Crypto', action: 'buy', category: 'Action', icon: '💰' },
  { id: 8, label: 'Create Alert', path: '/alerts', category: 'Action', icon: '➕' },
  { id: 9, label: 'View Transactions', path: '/portfolio', category: 'Action', icon: '📜' },
  { id: 10, label: 'Toggle Theme', action: 'theme', category: 'Settings', icon: '🎨' },
];

export function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(true);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const filteredCommands = commands.filter(cmd =>
    cmd.label.toLowerCase().includes(search.toLowerCase()) ||
    cmd.category.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelect = (command: typeof commands[0]) => {
    if (command.path) {
      navigate(command.path);
    }
    setIsOpen(false);
    setSearch("");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-start justify-center bg-black/60 backdrop-blur-sm p-4 pt-[20vh]"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-2xl glass-strong rounded-3xl shadow-2xl overflow-hidden"
          >
            {/* Search Input */}
            <div className="flex items-center gap-3 p-4 border-b border-white/10">
              <Search className="h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Type a command or search..."
                className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none"
                autoFocus
              />
              <div className="flex items-center gap-1 px-2 py-1 rounded-lg bg-white/10 text-xs text-muted-foreground">
                <Command className="h-3 w-3" />
                <span>K</span>
              </div>
            </div>

            {/* Results */}
            <div className="max-h-96 overflow-y-auto p-2">
              {filteredCommands.length > 0 ? (
                <div className="space-y-1">
                  {filteredCommands.map((command, index) => (
                    <motion.button
                      key={command.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => handleSelect(command)}
                      onMouseEnter={() => setSelected(index)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all ${
                        selected === index
                          ? 'bg-primary/10 text-primary'
                          : 'hover:bg-white/5 text-foreground'
                      }`}
                    >
                      <span className="text-2xl">{command.icon}</span>
                      <div className="flex-1 text-left">
                        <p className="font-medium">{command.label}</p>
                        <p className="text-xs text-muted-foreground">{command.category}</p>
                      </div>
                      <ArrowRight className="h-4 w-4 opacity-50" />
                    </motion.button>
                  ))}
                </div>
              ) : (
                <div className="py-12 text-center">
                  <p className="text-muted-foreground">No results found</p>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between p-4 border-t border-white/10 text-xs text-muted-foreground">
              <div className="flex gap-4">
                <span>↑↓ Navigate</span>
                <span>↵ Select</span>
                <span>ESC Close</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
