import { Trophy, Flame, Star, Award, TrendingUp } from "lucide-react";
import { motion } from "motion/react";

const badges = [
  { id: 1, name: 'Early Adopter', icon: '🚀', unlocked: true, description: 'Joined CryptoPulse AI' },
  { id: 2, name: 'Diversifier', icon: '🎯', unlocked: true, description: 'Own 5+ different assets' },
  { id: 3, name: 'Diamond Hands', icon: '💎', unlocked: true, description: 'Hold for 30+ days' },
  { id: 4, name: 'Profit Maker', icon: '💰', unlocked: false, description: 'Achieve 20% ROI' },
  { id: 5, name: 'Risk Manager', icon: '🛡️', unlocked: false, description: 'Set 10 price alerts' },
  { id: 6, name: 'News Junkie', icon: '📰', unlocked: true, description: 'Read 50 articles' },
];

export function GamificationPanel() {
  const level = 12;
  const currentXP = 2450;
  const nextLevelXP = 3000;
  const progress = (currentXP / nextLevelXP) * 100;
  const streak = 7;

  return (
    <div className="space-y-6">
      {/* Level & Progress */}
      <div className="glass rounded-3xl p-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl -z-10" />
        
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="h-16 w-16 rounded-2xl gradient-primary flex items-center justify-center">
              <Trophy className="h-8 w-8 text-white" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Current Level</p>
              <p className="text-3xl font-bold text-white">Level {level}</p>
            </div>
          </div>
          
          <div className="text-right">
            <p className="text-sm text-muted-foreground">Daily Streak</p>
            <div className="flex items-center gap-2 mt-1">
              <Flame className="h-5 w-5 text-orange-500" />
              <p className="text-2xl font-bold text-white">{streak} days</p>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Progress to Level {level + 1}</span>
            <span className="font-semibold text-white">{currentXP} / {nextLevelXP} XP</span>
          </div>
          <div className="h-3 rounded-full bg-white/10 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="h-full gradient-primary"
            />
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className="glass rounded-3xl p-6">
        <div className="flex items-center gap-2 mb-6">
          <Award className="h-5 w-5 text-primary" />
          <h3 className="text-xl font-semibold text-white">Achievements</h3>
          <span className="ml-auto text-sm text-muted-foreground">
            {badges.filter(b => b.unlocked).length} / {badges.length}
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {badges.map((badge, index) => (
            <motion.div
              key={badge.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className={`p-4 rounded-2xl border transition-all ${
                badge.unlocked
                  ? 'bg-white/10 border-primary/30 hover:bg-white/15'
                  : 'bg-white/5 border-white/10 opacity-50'
              }`}
            >
              <div className="text-3xl mb-2">{badge.icon}</div>
              <p className="font-semibold text-white text-sm mb-1">{badge.name}</p>
              <p className="text-xs text-muted-foreground line-clamp-2">{badge.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="glass rounded-3xl p-6">
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-primary" />
          Recent Activity
        </h3>
        <div className="space-y-3">
          {[
            { action: 'Portfolio Rebalanced', xp: '+50 XP', time: '2 hours ago' },
            { action: 'Price Alert Created', xp: '+20 XP', time: '1 day ago' },
            { action: 'News Article Read', xp: '+10 XP', time: '1 day ago' },
            { action: 'Badge Unlocked: News Junkie', xp: '+100 XP', time: '2 days ago' },
          ].map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-between p-3 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Star className="h-4 w-4 text-yellow-500" />
                <div>
                  <p className="text-sm font-medium text-white">{activity.action}</p>
                  <p className="text-xs text-muted-foreground">{activity.time}</p>
                </div>
              </div>
              <span className="text-sm font-semibold text-primary">{activity.xp}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
