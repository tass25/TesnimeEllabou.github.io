import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface InteractiveNodeProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  onClick?: () => void;
  isActive?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const InteractiveNode = ({
  children,
  className = '',
  delay = 0,
  onClick,
  isActive = false,
  size = 'md',
}: InteractiveNodeProps) => {
  const sizeClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  return (
    <motion.div
      className={`node-base ${sizeClasses[size]} cursor-pointer ${className} ${
        isActive ? 'border-primary ring-2 ring-primary/30' : ''
      }`}
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.02, y: -5 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
    >
      <div className="node-glow" />
      <div className="relative z-10">{children}</div>
      
      {/* Pulse effect for active nodes */}
      {isActive && (
        <motion.div
          className="absolute inset-0 rounded-2xl border-2 border-primary"
          animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      )}
    </motion.div>
  );
};
