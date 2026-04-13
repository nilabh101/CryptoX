import { motion } from "motion/react";

export function SkeletonCard() {
  return (
    <div className="glass rounded-3xl p-6 space-y-4">
      <div className="flex items-center gap-4">
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="h-12 w-12 rounded-2xl bg-white/10"
        />
        <div className="flex-1 space-y-2">
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="h-4 w-32 rounded-lg bg-white/10"
          />
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
            className="h-3 w-24 rounded-lg bg-white/10"
          />
        </div>
      </div>
      <motion.div
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
        className="h-24 w-full rounded-2xl bg-white/10"
      />
    </div>
  );
}

export function SkeletonTable() {
  return (
    <div className="glass rounded-3xl p-6">
      <div className="space-y-4">
        {[1, 2, 3, 4, 5].map((i) => (
          <motion.div
            key={i}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1 }}
            className="flex items-center gap-4"
          >
            <div className="h-10 w-10 rounded-xl bg-white/10" />
            <div className="flex-1 h-4 rounded-lg bg-white/10" />
            <div className="h-4 w-20 rounded-lg bg-white/10" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function SkeletonChart() {
  return (
    <div className="glass rounded-3xl p-6">
      <motion.div
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="h-4 w-40 rounded-lg bg-white/10 mb-6"
      />
      <div className="flex items-end gap-2 h-64">
        {[40, 60, 45, 80, 55, 70, 50, 65, 75, 60, 85, 70].map((height, i) => (
          <motion.div
            key={i}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1 }}
            className="flex-1 rounded-t-lg bg-white/10"
            style={{ height: `${height}%` }}
          />
        ))}
      </div>
    </div>
  );
}
