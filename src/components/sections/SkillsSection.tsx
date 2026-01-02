import { useState } from 'react';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  category: 'language' | 'ml' | 'tools' | 'cloud';
}

const skills: Skill[] = [
  // Languages
  { name: 'Python', category: 'language' },
  { name: 'SQL', category: 'language' },
  { name: 'JavaScript', category: 'language' },
  
  // ML & AI
  { name: 'PyTorch', category: 'ml' },
  { name: 'TensorFlow', category: 'ml' },
  { name: 'Scikit-learn', category: 'ml' },
  { name: 'LangChain', category: 'ml' },
  { name: 'LLaMA', category: 'ml' },
  { name: 'Coqui TTS', category: 'ml' },
  { name: 'Hugging Face', category: 'ml' },
  
  // Tools
  { name: 'MLflow', category: 'tools' },
  { name: 'Docker', category: 'tools' },
  { name: 'Git', category: 'tools' },
  { name: 'FastAPI', category: 'tools' },
  
  // Cloud
  { name: 'Azure', category: 'cloud' },
  { name: 'AWS', category: 'cloud' },
  { name: 'GCP', category: 'cloud' },
];

const categoryColors = {
  language: 'from-cyan-glow to-blue-500',
  ml: 'from-purple-accent to-pink-500',
  tools: 'from-emerald-400 to-teal-500',
  cloud: 'from-amber-accent to-orange-500',
};

const categoryLabels = {
  language: 'Languages',
  ml: 'ML & AI',
  tools: 'Tools',
  cloud: 'Cloud',
};

export const SkillsSection = () => {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = ['language', 'ml', 'tools', 'cloud'] as const;

  return (
    <section id="skills" className="section-container bg-muted/30 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-wider uppercase">// Skills Node</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mt-2 mb-4">Technical Arsenal</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <motion.button
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeCategory === null
                ? 'bg-primary text-primary-foreground'
                : 'bg-card border border-border hover:border-primary/50'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            All
          </motion.button>
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-card border border-border hover:border-primary/50'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {categoryLabels[cat]}
            </motion.button>
          ))}
        </div>

        {/* Skills Network */}
        <div className="relative">
          {/* Connection lines SVG */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
                <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="1" />
                <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>

          {/* Skills Grid */}
          <div className="flex flex-wrap justify-center gap-4">
            {skills
              .filter((skill) => !activeCategory || skill.category === activeCategory)
              .map((skill, i) => (
                <motion.div
                  key={skill.name}
                  className="relative"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03 }}
                  onMouseEnter={() => setActiveSkill(skill.name)}
                  onMouseLeave={() => setActiveSkill(null)}
                >
                  <motion.div
                    className={`relative px-5 py-3 rounded-xl cursor-pointer transition-all duration-300 ${
                      activeSkill === skill.name
                        ? 'bg-gradient-to-r ' + categoryColors[skill.category] + ' text-white shadow-lg'
                        : 'bg-card border border-border hover:border-primary/50'
                    }`}
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    <span className={`font-medium text-sm ${
                      activeSkill === skill.name ? 'text-white' : 'text-foreground'
                    }`}>
                      {skill.name}
                    </span>

                    {/* Pulse effect on hover */}
                    {activeSkill === skill.name && (
                      <motion.div
                        className={`absolute inset-0 rounded-xl bg-gradient-to-r ${categoryColors[skill.category]}`}
                        initial={{ scale: 1, opacity: 0.5 }}
                        animate={{ scale: 1.2, opacity: 0 }}
                        transition={{ duration: 0.5, repeat: Infinity }}
                      />
                    )}
                  </motion.div>
                </motion.div>
              ))}
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-6 mt-12">
          {categories.map((cat) => (
            <div key={cat} className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${categoryColors[cat]}`} />
              <span className="text-sm text-muted-foreground">{categoryLabels[cat]}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
