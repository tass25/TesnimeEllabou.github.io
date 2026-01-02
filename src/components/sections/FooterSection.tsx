import { motion } from 'framer-motion';

export const FooterSection = () => {
  return (
    <footer className="py-16 px-6 bg-muted/30 relative">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <p className="font-heading text-2xl md:text-3xl font-medium text-foreground/80">
            "<span className="text-primary font-semibold">Curiosity</span> is my strongest model."
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex items-center justify-center gap-2 text-muted-foreground text-sm"
        >
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span>System Active</span>
          <span className="mx-2">•</span>
          <span>© {new Date().getFullYear()} Tesnime Ellabou</span>
        </motion.div>

        {/* Decorative network line */}
        <motion.svg
          className="w-full max-w-md mx-auto mt-8 h-8"
          viewBox="0 0 400 30"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <motion.path
            d="M0,15 Q50,5 100,15 T200,15 T300,15 T400,15"
            fill="none"
            stroke="url(#footerGradient)"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          <defs>
            <linearGradient id="footerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
              <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="1" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
            </linearGradient>
          </defs>
          
          {/* Nodes on the line */}
          <circle cx="100" cy="15" r="4" fill="hsl(var(--primary))" className="animate-pulse" />
          <circle cx="200" cy="15" r="4" fill="hsl(var(--primary))" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
          <circle cx="300" cy="15" r="4" fill="hsl(var(--primary))" className="animate-pulse" style={{ animationDelay: '1s' }} />
        </motion.svg>
      </div>
    </footer>
  );
};
