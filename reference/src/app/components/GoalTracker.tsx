import { Target, TrendingUp, Calendar, DollarSign } from "lucide-react";
import { motion } from "motion/react";

const goals = [
  {
    id: 1,
    name: 'Retirement Fund',
    target: 100000,
    current: 72450,
    deadline: '2028-12-31',
    category: 'Long-term',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 2,
    name: 'Emergency Fund',
    target: 25000,
    current: 18500,
    deadline: '2027-06-30',
    category: 'Short-term',
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 3,
    name: 'New Home Down Payment',
    target: 50000,
    current: 15000,
    deadline: '2029-03-15',
    category: 'Medium-term',
    color: 'from-purple-500 to-pink-500',
  },
];

export function GoalTracker() {
  const getTimeRemaining = (deadline: string) => {
    const now = new Date();
    const end = new Date(deadline);
    const months = Math.round((end.getTime() - now.getTime()) / (1000 * 60 * 60 * 24 * 30));
    return months;
  };

  const getMonthlyTarget = (target: number, current: number, deadline: string) => {
    const remaining = target - current;
    const months = getTimeRemaining(deadline);
    return months > 0 ? remaining / months : 0;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-semibold text-white flex items-center gap-2">
            <Target className="h-5 w-5 text-primary" />
            Financial Goals
          </h3>
          <p className="text-sm text-muted-foreground mt-1">Track your progress</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-2 rounded-2xl gradient-primary text-white font-semibold shadow-lg shadow-primary/30"
        >
          Add Goal
        </motion.button>
      </div>

      {/* Goals */}
      <div className="space-y-4">
        {goals.map((goal, index) => {
          const progress = (goal.current / goal.target) * 100;
          const monthlyTarget = getMonthlyTarget(goal.target, goal.current, goal.deadline);
          const monthsRemaining = getTimeRemaining(goal.deadline);

          return (
            <motion.div
              key={goal.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-3xl p-6 relative overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${goal.color} opacity-10 rounded-full blur-3xl -z-10`} />
              
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="text-lg font-semibold text-white">{goal.name}</h4>
                    <span className="px-2 py-0.5 rounded-lg text-xs font-medium bg-white/10 text-muted-foreground">
                      {goal.category}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{monthsRemaining} months left</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <TrendingUp className="h-4 w-4" />
                      <span>${monthlyTarget.toLocaleString()} /mo needed</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-white">
                    ${goal.current.toLocaleString()}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    of ${goal.target.toLocaleString()}
                  </p>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="font-semibold text-white">{progress.toFixed(1)}%</span>
                </div>
                <div className="h-3 rounded-full bg-white/10 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className={`h-full bg-gradient-to-r ${goal.color}`}
                  />
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-3 mt-4">
                <div className="p-3 rounded-2xl bg-white/5">
                  <p className="text-xs text-muted-foreground mb-1">Remaining</p>
                  <p className="text-sm font-semibold text-white">
                    ${(goal.target - goal.current).toLocaleString()}
                  </p>
                </div>
                <div className="p-3 rounded-2xl bg-white/5">
                  <p className="text-xs text-muted-foreground mb-1">On Track</p>
                  <p className="text-sm font-semibold text-green-400">Yes</p>
                </div>
                <div className="p-3 rounded-2xl bg-white/5">
                  <p className="text-xs text-muted-foreground mb-1">Deadline</p>
                  <p className="text-sm font-semibold text-white">
                    {new Date(goal.deadline).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
