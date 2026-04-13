import { User, Bell, Shield, Palette, Globe, HelpCircle } from "lucide-react";
import { motion } from "motion/react";
import * as Switch from '@radix-ui/react-switch';

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

export function Settings() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-6 pb-20 lg:pb-6 max-w-4xl"
    >
      {/* Header */}
      <motion.div variants={item}>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Settings</h1>
        <p className="text-muted-foreground">Manage your account and preferences</p>
      </motion.div>

      {/* Profile Settings */}
      <motion.div variants={item} className="glass rounded-3xl p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-12 w-12 rounded-2xl gradient-primary flex items-center justify-center">
            <User className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white">Profile Settings</h3>
            <p className="text-sm text-muted-foreground">Update your personal information</p>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-muted-foreground mb-2 block">Full Name</label>
              <input
                type="text"
                defaultValue="John Doe"
                className="w-full rounded-2xl bg-white/5 border border-white/10 px-4 py-3 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-2 block">Email Address</label>
              <input
                type="email"
                defaultValue="john.doe@example.com"
                className="w-full rounded-2xl bg-white/5 border border-white/10 px-4 py-3 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>
          </div>
          <div>
            <label className="text-sm text-muted-foreground mb-2 block">Bio</label>
            <textarea
              rows={3}
              defaultValue="Cryptocurrency enthusiast and investor"
              className="w-full rounded-2xl bg-white/5 border border-white/10 px-4 py-3 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="gradient-primary px-6 py-3 rounded-2xl font-semibold text-white shadow-lg shadow-primary/30"
          >
            Save Changes
          </motion.button>
        </div>
      </motion.div>

      {/* Notifications */}
      <motion.div variants={item} className="glass rounded-3xl p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-12 w-12 rounded-2xl gradient-success flex items-center justify-center">
            <Bell className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white">Notifications</h3>
            <p className="text-sm text-muted-foreground">Manage your notification preferences</p>
          </div>
        </div>
        
        <div className="space-y-4">
          {[
            { label: 'Price Alerts', description: 'Get notified when prices hit your targets', defaultChecked: true },
            { label: 'Portfolio Updates', description: 'Daily summary of your portfolio performance', defaultChecked: true },
            { label: 'News & Trends', description: 'Latest crypto news and market trends', defaultChecked: false },
            { label: 'AI Insights', description: 'Personalized recommendations from our AI', defaultChecked: true },
            { label: 'Email Notifications', description: 'Receive updates via email', defaultChecked: false },
          ].map((setting, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors"
            >
              <div className="flex-1">
                <p className="font-semibold text-white mb-1">{setting.label}</p>
                <p className="text-sm text-muted-foreground">{setting.description}</p>
              </div>
              <Switch.Root
                className="w-11 h-6 rounded-full relative bg-white/10 data-[state=checked]:bg-primary transition-colors"
                defaultChecked={setting.defaultChecked}
              >
                <Switch.Thumb className="block w-5 h-5 bg-white rounded-full transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[22px]" />
              </Switch.Root>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Security */}
      <motion.div variants={item} className="glass rounded-3xl p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-12 w-12 rounded-2xl gradient-danger flex items-center justify-center">
            <Shield className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white">Security</h3>
            <p className="text-sm text-muted-foreground">Keep your account secure</p>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-muted-foreground mb-2 block">Current Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full rounded-2xl bg-white/5 border border-white/10 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-2 block">New Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full rounded-2xl bg-white/5 border border-white/10 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>
          </div>
          <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5">
            <div>
              <p className="font-semibold text-white mb-1">Two-Factor Authentication</p>
              <p className="text-sm text-muted-foreground">Add an extra layer of security</p>
            </div>
            <Switch.Root
              className="w-11 h-6 rounded-full relative bg-white/10 data-[state=checked]:bg-primary transition-colors"
              defaultChecked={true}
            >
              <Switch.Thumb className="block w-5 h-5 bg-white rounded-full transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[22px]" />
            </Switch.Root>
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="gradient-danger px-6 py-3 rounded-2xl font-semibold text-white shadow-lg shadow-red-500/30"
          >
            Update Password
          </motion.button>
        </div>
      </motion.div>

      {/* Preferences */}
      <motion.div variants={item} className="glass rounded-3xl p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
            <Palette className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white">Preferences</h3>
            <p className="text-sm text-muted-foreground">Customize your experience</p>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-muted-foreground mb-2 block">Currency</label>
              <select className="w-full rounded-2xl bg-white/5 border border-white/10 px-4 py-3 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all">
                <option>USD ($)</option>
                <option>EUR (€)</option>
                <option>GBP (£)</option>
                <option>JPY (¥)</option>
              </select>
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-2 block">Language</label>
              <select className="w-full rounded-2xl bg-white/5 border border-white/10 px-4 py-3 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all">
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
                <option>German</option>
              </select>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Support */}
      <motion.div variants={item} className="glass rounded-3xl p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
            <HelpCircle className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white">Support & Help</h3>
            <p className="text-sm text-muted-foreground">Get assistance when you need it</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            className="p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-left"
          >
            <p className="font-semibold text-white mb-1">Help Center</p>
            <p className="text-sm text-muted-foreground">Browse our knowledge base</p>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            className="p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-left"
          >
            <p className="font-semibold text-white mb-1">Contact Support</p>
            <p className="text-sm text-muted-foreground">Get in touch with our team</p>
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}
