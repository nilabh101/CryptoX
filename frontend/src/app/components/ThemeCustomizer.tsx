import { useState } from "react";
import { Palette, Sun, Moon, Sparkles, Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const colorThemes = [
  { name: 'Purple/Blue', primary: '#6366f1', secondary: '#8b5cf6', gradient: 'from-indigo-500 to-purple-600' },
  { name: 'Green/Teal', primary: '#10b981', secondary: '#14b8a6', gradient: 'from-green-500 to-teal-600' },
  { name: 'Pink/Rose', primary: '#ec4899', secondary: '#f43f5e', gradient: 'from-pink-500 to-rose-600' },
  { name: 'Orange/Red', primary: '#f59e0b', secondary: '#ef4444', gradient: 'from-orange-500 to-red-600' },
  { name: 'Blue/Cyan', primary: '#3b82f6', secondary: '#06b6d4', gradient: 'from-blue-500 to-cyan-600' },
];

const accentPatterns = [
  { name: 'Gradient', class: 'gradient-primary' },
  { name: 'Solid', class: 'bg-primary' },
  { name: 'Glassmorphic', class: 'glass' },
];

export function ThemeCustomizer() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState(0);
  const [darkMode, setDarkMode] = useState(true);

  return (
    <>
      {/* Trigger Button */}
      <motion.button
        whileHover={{ scale: 1.05, rotate: 180 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.3 }}
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-2xl bg-white/5 p-2.5 text-muted-foreground hover:bg-white/10 hover:text-foreground transition-colors"
      >
        <Palette className="h-5 w-5" />
      </motion.button>

      {/* Customizer Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            className="absolute right-0 top-full mt-2 w-80 glass-strong rounded-3xl shadow-2xl overflow-hidden z-50"
          >
            {/* Header */}
            <div className="p-4 border-b border-white/10">
              <h3 className="font-semibold text-white flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-primary" />
                Customize Theme
              </h3>
              <p className="text-xs text-muted-foreground mt-1">Personalize your experience</p>
            </div>

            <div className="p-4 space-y-6">
              {/* Dark Mode Toggle */}
              <div>
                <label className="text-sm font-medium text-white mb-3 block">Appearance</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setDarkMode(false)}
                    className={`flex items-center justify-center gap-2 p-3 rounded-2xl border transition-all ${
                      !darkMode
                        ? 'border-primary bg-primary/10 text-primary'
                        : 'border-white/10 bg-white/5 text-muted-foreground hover:bg-white/10'
                    }`}
                  >
                    <Sun className="h-4 w-4" />
                    <span className="text-sm font-medium">Light</span>
                  </button>
                  <button
                    onClick={() => setDarkMode(true)}
                    className={`flex items-center justify-center gap-2 p-3 rounded-2xl border transition-all ${
                      darkMode
                        ? 'border-primary bg-primary/10 text-primary'
                        : 'border-white/10 bg-white/5 text-muted-foreground hover:bg-white/10'
                    }`}
                  >
                    <Moon className="h-4 w-4" />
                    <span className="text-sm font-medium">Dark</span>
                  </button>
                </div>
              </div>

              {/* Color Themes */}
              <div>
                <label className="text-sm font-medium text-white mb-3 block">Color Theme</label>
                <div className="space-y-2">
                  {colorThemes.map((theme, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedTheme(index)}
                      className={`w-full flex items-center gap-3 p-3 rounded-2xl border transition-all ${
                        selectedTheme === index
                          ? 'border-white/20 bg-white/10'
                          : 'border-white/10 bg-white/5 hover:bg-white/10'
                      }`}
                    >
                      <div className={`h-10 w-10 rounded-xl bg-gradient-to-br ${theme.gradient}`} />
                      <span className="flex-1 text-left text-sm font-medium text-white">
                        {theme.name}
                      </span>
                      {selectedTheme === index && (
                        <Check className="h-4 w-4 text-primary" />
                      )}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Accent Style */}
              <div>
                <label className="text-sm font-medium text-white mb-3 block">Accent Style</label>
                <div className="grid grid-cols-3 gap-2">
                  {accentPatterns.map((pattern, index) => (
                    <button
                      key={index}
                      className="p-3 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all"
                    >
                      <div className={`h-8 w-full rounded-lg ${pattern.class} mb-2`} />
                      <p className="text-xs text-muted-foreground">{pattern.name}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Apply Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full gradient-primary py-3 rounded-2xl font-semibold text-white shadow-lg shadow-primary/30"
              >
                Apply Theme
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
