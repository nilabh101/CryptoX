import { Shield, PieChart, Sparkles, TrendingUp, TrendingDown, AlertCircle } from "lucide-react";
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from "recharts";
import { motion } from "motion/react";
import { RiskHeatmap } from "../components/RiskHeatmap";

const riskData = [
  { category: 'Volatility', value: 65 },
  { category: 'Liquidity', value: 85 },
  { category: 'Concentration', value: 45 },
  { category: 'Market Cap', value: 75 },
  { category: 'Regulation', value: 60 },
];

const aiInsights = [
  {
    id: 1,
    title: 'Portfolio Rebalancing Recommended',
    description: 'Your Bitcoin allocation is 15% above target. Consider rebalancing.',
    impact: 'medium',
    category: 'Optimization'
  },
  {
    id: 2,
    title: 'High Volatility Alert',
    description: 'Solana showing 25% higher volatility than average. Monitor closely.',
    impact: 'high',
    category: 'Risk'
  },
  {
    id: 3,
    title: 'Diversification Opportunity',
    description: 'Adding DeFi tokens could reduce portfolio correlation by 12%.',
    impact: 'low',
    category: 'Growth'
  },
  {
    id: 4,
    title: 'Tax Loss Harvesting',
    description: 'Potential tax savings of $1,200 through strategic realization.',
    impact: 'medium',
    category: 'Tax'
  },
];

const metrics = [
  { label: 'Sharpe Ratio', value: '2.45', change: 12, isPositive: true },
  { label: 'Beta', value: '1.15', change: -3, isPositive: false },
  { label: 'Max Drawdown', value: '-18%', change: 5, isPositive: true },
  { label: 'Win Rate', value: '68%', change: 8, isPositive: true },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function Analytics() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-6 pb-20 lg:pb-6"
    >
      {/* Header */}
      <motion.div variants={item}>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Analytics</h1>
        <p className="text-muted-foreground">Deep insights into your portfolio performance</p>
      </motion.div>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric, index) => (
          <motion.div
            key={index}
            variants={item}
            className="glass rounded-3xl p-6 relative overflow-hidden"
          >
            <div className={`absolute top-0 right-0 w-24 h-24 ${metric.isPositive ? 'bg-green-500/10' : 'bg-red-500/10'} rounded-full blur-2xl -z-10`} />
            <p className="text-muted-foreground text-sm mb-2">{metric.label}</p>
            <p className="text-2xl font-bold text-white mb-1">{metric.value}</p>
            <p className={`text-xs flex items-center gap-1 ${metric.isPositive ? 'text-[#10b981]' : 'text-[#ef4444]'}`}>
              {metric.isPositive ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
              {Math.abs(metric.change)}% vs last month
            </p>
          </motion.div>
        ))}
      </div>

      {/* Risk Heatmap */}
      <motion.div variants={item}>
        <RiskHeatmap />
      </motion.div>

      {/* Risk Score and Diversification */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Risk Score */}
        <motion.div variants={item} className="glass rounded-3xl p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-12 w-12 rounded-2xl gradient-danger flex items-center justify-center">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">Risk Analysis</h3>
              <p className="text-sm text-muted-foreground">Multi-dimensional risk assessment</p>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={riskData}>
              <PolarGrid stroke="rgba(255,255,255,0.1)" />
              <PolarAngleAxis dataKey="category" stroke="#9ca3af" style={{ fontSize: '12px' }} />
              <PolarRadiusAxis stroke="#9ca3af" style={{ fontSize: '10px' }} />
              <Radar
                name="Risk Score"
                dataKey="value"
                stroke="#6366f1"
                fill="#6366f1"
                fillOpacity={0.3}
              />
            </RadarChart>
          </ResponsiveContainer>
          <div className="mt-4 p-4 rounded-2xl bg-yellow-500/10 border border-yellow-500/20">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-yellow-500 mt-0.5" />
              <div>
                <p className="font-semibold text-yellow-500 text-sm">Moderate Risk Profile</p>
                <p className="text-xs text-muted-foreground mt-1">Your portfolio has moderate exposure to market volatility. Consider diversification.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Diversification Meter */}
        <motion.div variants={item} className="glass rounded-3xl p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-12 w-12 rounded-2xl gradient-success flex items-center justify-center">
              <PieChart className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">Diversification Score</h3>
              <p className="text-sm text-muted-foreground">Portfolio distribution health</p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-muted-foreground">Overall Score</span>
                <span className="text-2xl font-bold text-white">73/100</span>
              </div>
              <div className="h-4 rounded-full bg-white/10 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '73%' }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="h-full gradient-success"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-foreground">Asset Classes</span>
                  <span className="text-sm font-semibold text-white">85%</span>
                </div>
                <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                  <div className="h-full bg-green-500" style={{ width: '85%' }} />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-foreground">Market Cap Distribution</span>
                  <span className="text-sm font-semibold text-white">68%</span>
                </div>
                <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                  <div className="h-full bg-yellow-500" style={{ width: '68%' }} />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-foreground">Sector Allocation</span>
                  <span className="text-sm font-semibold text-white">56%</span>
                </div>
                <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                  <div className="h-full bg-orange-500" style={{ width: '56%' }} />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* AI Insights Panel */}
      <motion.div variants={item} className="glass rounded-3xl p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-12 w-12 rounded-2xl gradient-primary flex items-center justify-center">
            <Sparkles className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white">AI-Powered Insights</h3>
            <p className="text-sm text-muted-foreground">Personalized recommendations for your portfolio</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {aiInsights.map((insight, index) => (
            <motion.div
              key={insight.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all cursor-pointer"
            >
              <div className="flex items-start justify-between mb-2">
                <span className={`px-2 py-1 rounded-lg text-xs font-semibold ${
                  insight.impact === 'high' ? 'bg-red-500/20 text-red-400' :
                  insight.impact === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                  'bg-blue-500/20 text-blue-400'
                }`}>
                  {insight.category}
                </span>
                <span className={`text-xs font-medium ${
                  insight.impact === 'high' ? 'text-red-400' :
                  insight.impact === 'medium' ? 'text-yellow-400' :
                  'text-blue-400'
                }`}>
                  {insight.impact.toUpperCase()}
                </span>
              </div>
              <h4 className="font-semibold text-white mb-2">{insight.title}</h4>
              <p className="text-sm text-muted-foreground">{insight.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}