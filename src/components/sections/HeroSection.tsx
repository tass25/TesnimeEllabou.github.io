import { motion } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';
import { NetworkBackground } from '../NetworkBackground';

interface HeroSectionProps {
  onEnterSystem: () => void;
}

export const HeroSection = ({ onEnterSystem }: HeroSectionProps) => {
  const nameLetters = "TESNIME ELLABOU".split('');
  
  const mottoLines = [
    "Transforming data into intelligence.",
    "Building systems that learn, explain, and impact."
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      <NetworkBackground nodeCount={60} />
      
      {/* Logo placeholder - top left */}
      <motion.div
        className="absolute top-6 left-6 z-20"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
            <span className="text-primary-foreground font-heading font-bold text-lg">TE</span>
          </div>
          <span className="font-heading font-medium text-foreground hidden sm:block">Tesnime E.</span>
        </div>
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Name with letter animation */}
        <motion.h1
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {nameLetters.map((letter, i) => (
            <motion.span
              key={i}
              className="inline-block"
              style={{ 
                background: letter === ' ' ? 'transparent' : 'linear-gradient(135deg, hsl(190 100% 65%), hsl(260 60% 65%))',
                WebkitBackgroundClip: letter === ' ' ? undefined : 'text',
                WebkitTextFillColor: letter === ' ' ? undefined : 'transparent',
                backgroundClip: letter === ' ' ? undefined : 'text',
              }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.05, duration: 0.5 }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          ))}
        </motion.h1>

        {/* Motto with line-by-line animation */}
        <div className="space-y-2 mb-12">
          {mottoLines.map((line, i) => (
            <motion.p
              key={i}
              className="text-lg md:text-xl lg:text-2xl text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 + i * 0.3, duration: 0.6 }}
            >
              {line}
            </motion.p>
          ))}
        </div>

        {/* Enter System Button */}
        <motion.button
          onClick={onEnterSystem}
          className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-primary text-primary-foreground font-heading font-semibold text-lg overflow-hidden"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.2, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative z-10 flex items-center gap-2">
            <Sparkles className="w-5 h-5" />
            Enter System
          </span>
          
          {/* Shimmer effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
          />
        </motion.button>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-muted-foreground"
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-40 h-40 rounded-full bg-accent/10 blur-3xl" />
    </section>
  );
};
