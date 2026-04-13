import { TrendingUp, TrendingDown, Clock, ExternalLink } from "lucide-react";
import { motion } from "motion/react";

const newsArticles = [
  {
    id: 1,
    title: 'Bitcoin Breaks $45,000 Barrier Amid Institutional Interest',
    source: 'CryptoNews',
    time: '2 hours ago',
    sentiment: 'bullish',
    category: 'Bitcoin',
    image: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=800&q=80',
    excerpt: 'Major institutional investors continue to show strong interest in Bitcoin, pushing prices to new monthly highs...',
  },
  {
    id: 2,
    title: 'Ethereum 2.0 Upgrade Shows Promising Results',
    source: 'BlockChain Today',
    time: '4 hours ago',
    sentiment: 'bullish',
    category: 'Ethereum',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80',
    excerpt: 'The latest Ethereum upgrade demonstrates significant improvements in transaction speed and energy efficiency...',
  },
  {
    id: 3,
    title: 'Regulatory Concerns Impact Market Sentiment',
    source: 'Financial Times',
    time: '6 hours ago',
    sentiment: 'bearish',
    category: 'Regulation',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80',
    excerpt: 'New regulatory proposals from major economies create uncertainty in the cryptocurrency market...',
  },
  {
    id: 4,
    title: 'DeFi Protocols See Record Trading Volumes',
    source: 'DeFi Pulse',
    time: '8 hours ago',
    sentiment: 'bullish',
    category: 'DeFi',
    image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&q=80',
    excerpt: 'Decentralized finance platforms report unprecedented trading activity as users migrate from traditional exchanges...',
  },
  {
    id: 5,
    title: 'Solana Network Experiences Brief Outage',
    source: 'CryptoWatch',
    time: '12 hours ago',
    sentiment: 'bearish',
    category: 'Solana',
    image: 'https://images.unsplash.com/photo-1622630998477-20aa696ecb05?w=800&q=80',
    excerpt: 'The Solana blockchain faced a temporary disruption, raising questions about network stability...',
  },
  {
    id: 6,
    title: 'NFT Market Shows Signs of Recovery',
    source: 'NFT Insider',
    time: '1 day ago',
    sentiment: 'neutral',
    category: 'NFT',
    image: 'https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?w=800&q=80',
    excerpt: 'Digital art and collectibles market stabilizes after months of declining valuations...',
  },
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

export function News() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-6 pb-20 lg:pb-6"
    >
      {/* Header */}
      <motion.div variants={item}>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Crypto News</h1>
        <p className="text-muted-foreground">Stay updated with the latest cryptocurrency news and trends</p>
      </motion.div>

      {/* Filters */}
      <motion.div variants={item} className="flex flex-wrap gap-3">
        <button className="px-4 py-2 rounded-2xl bg-primary/10 text-primary font-medium transition-colors">
          All News
        </button>
        <button className="px-4 py-2 rounded-2xl bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-foreground font-medium transition-colors">
          Bitcoin
        </button>
        <button className="px-4 py-2 rounded-2xl bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-foreground font-medium transition-colors">
          Ethereum
        </button>
        <button className="px-4 py-2 rounded-2xl bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-foreground font-medium transition-colors">
          DeFi
        </button>
        <button className="px-4 py-2 rounded-2xl bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-foreground font-medium transition-colors">
          Regulation
        </button>
      </motion.div>

      {/* News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsArticles.map((article, index) => (
          <motion.article
            key={article.id}
            variants={item}
            whileHover={{ y: -8 }}
            className="glass rounded-3xl overflow-hidden cursor-pointer group"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute top-4 left-4 flex gap-2">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md ${
                  article.sentiment === 'bullish' 
                    ? 'bg-green-500/80 text-white'
                    : article.sentiment === 'bearish'
                    ? 'bg-red-500/80 text-white'
                    : 'bg-gray-500/80 text-white'
                }`}>
                  {article.sentiment === 'bullish' && <TrendingUp className="inline h-3 w-3 mr-1" />}
                  {article.sentiment === 'bearish' && <TrendingDown className="inline h-3 w-3 mr-1" />}
                  {article.sentiment.charAt(0).toUpperCase() + article.sentiment.slice(1)}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-md text-white">
                  {article.category}
                </span>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                <span className="font-medium">{article.source}</span>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  <span>{article.time}</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                {article.title}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                {article.excerpt}
              </p>
              <div className="flex items-center gap-2 text-primary font-medium text-sm">
                <span>Read more</span>
                <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Load More */}
      <motion.div variants={item} className="flex justify-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 rounded-2xl bg-white/10 hover:bg-white/15 text-white font-semibold transition-colors"
        >
          Load More Articles
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
