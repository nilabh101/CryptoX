import { Sparkles, TrendingUp, AlertCircle, Lightbulb, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

const insights = [
  {
    id: 1,
    type: 'recommendation',
    title: 'Rebalance Opportunity',
    description: 'Your Bitcoin allocation is 15% above your target. Consider selling $5,000 worth to maintain your strategy.',
    impact: 'Medium',
    cta: 'Review Portfolio',
    icon: Sparkles,
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    id: 2,
    type: 'alert',
    title: 'High Volatility Warning',
    description: 'Solana is showing 25% higher volatility than its 30-day average. Monitor your position closely.',
    impact: 'High',
    cta: 'Set Alert',
    icon: AlertCircle,
    gradient: 'from-orange-500 to-red-500',
  },
  {
    id: 3,
    type: 'insight',
    title: 'Tax Optimization',
    description: 'You could save $1,200 in taxes by harvesting losses on your Polkadot holdings before year-end.',
    impact: 'Low',
    cta: 'Learn More',
    icon: Lightbulb,
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    id: 4,
    type: 'opportunity',
    title: 'Diversification Tip',
    description: 'Adding DeFi tokens could reduce your portfolio correlation by 12% and improve risk-adjusted returns.',
    impact: 'Medium',
    cta: 'Explore Assets',
    icon: TrendingUp,
    gradient: 'from-purple-500 to-pink-500',
  },
];

export function SmartInsightCards() {
  return (
    <div className="space-y-4">
      {insights.map((insight, index) => {
        const Icon = insight.icon;
        return (
          <motion.div
            key={insight.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -4 }}
            className="glass rounded-3xl p-6 relative overflow-hidden cursor-pointer group"
          >
            <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${insight.gradient} opacity-10 rounded-full blur-3xl -z-10 group-hover:opacity-20 transition-opacity`} />
            
            <div className="flex items-start gap-4">
              <div className={`h-12 w-12 rounded-2xl bg-gradient-to-br ${insight.gradient} flex items-center justify-center flex-shrink-0`}>
                <Icon className="h-6 w-6 text-white" />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <h4 className="font-semibold text-white">{insight.title}</h4>
                  <span className={`px-2 py-0.5 rounded-lg text-xs font-medium ${
                    insight.impact === 'High' ? 'bg-red-500/20 text-red-400' :
                    insight.impact === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-blue-500/20 text-blue-400'
                  }`}>
                    {insight.impact} Impact
                  </span>
                </div>
                
                <p className="text-sm text-muted-foreground mb-4">
                  {insight.description}
                </p>
                
                <motion.button
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-2 text-sm font-medium text-primary group-hover:text-white transition-colors"
                >
                  <span>{insight.cta}</span>
                  <ArrowRight className="h-4 w-4" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
