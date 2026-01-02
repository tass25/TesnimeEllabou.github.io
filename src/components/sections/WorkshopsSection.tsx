import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Calendar, Users, X } from 'lucide-react';
import { InteractiveNode } from '../InteractiveNode';

interface Workshop {
  id: string;
  title: string;
  description: string;
  place: string;
  type: 'in-person' | 'online';
  date?: string;
  image?: string;
}

const workshops: Workshop[] = [
  {
    id: 'llm-workshop',
    title: 'LLM Applications Workshop',
    description: 'Hands-on workshop covering practical applications of Large Language Models, from prompt engineering to building RAG systems.',
    place: 'Algiers, Algeria',
    type: 'in-person',
    date: '2024',
  },
  {
    id: 'ml-bootcamp',
    title: 'Machine Learning Bootcamp',
    description: 'Intensive 3-day bootcamp covering ML fundamentals, from data preprocessing to model deployment.',
    place: 'Online',
    type: 'online',
    date: '2024',
  },
  {
    id: 'ai-ethics',
    title: 'AI Ethics & Explainability',
    description: 'Workshop on building responsible AI systems with a focus on interpretability and bias detection.',
    place: 'University Campus',
    type: 'in-person',
    date: '2023',
  },
  {
    id: 'python-ds',
    title: 'Python for Data Science',
    description: 'Introduction to Python programming for data analysis and visualization, targeting beginners.',
    place: 'Online',
    type: 'online',
    date: '2023',
  },
];

export const WorkshopsSection = () => {
  const [selectedWorkshop, setSelectedWorkshop] = useState<Workshop | null>(null);

  return (
    <section id="workshops" className="section-container bg-background relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-wider uppercase">// Workshops & Mentorship Node</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mt-2 mb-4">Sharing Knowledge</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </motion.div>

        {/* Central node visualization */}
        <div className="relative mb-12">
          <motion.div
            className="w-24 h-24 mx-auto rounded-full bg-gradient-primary flex items-center justify-center"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Users className="w-10 h-10 text-primary-foreground" />
          </motion.div>
          
          {/* Connecting lines to workshops */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ top: '-50%', height: '200%' }}>
            <defs>
              <linearGradient id="workshopLine" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.5" />
                <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Workshops Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {workshops.map((workshop, i) => (
            <InteractiveNode
              key={workshop.id}
              delay={0.1 * i}
              onClick={() => setSelectedWorkshop(workshop)}
            >
              <div className="flex flex-col h-full">
                {/* Placeholder for workshop image */}
                <div className="w-full h-32 rounded-lg bg-gradient-to-br from-muted to-card mb-4 flex items-center justify-center overflow-hidden">
                  <div className="text-center text-muted-foreground">
                    <Users className="w-8 h-8 mx-auto mb-2 opacity-50" />
                    <span className="text-xs">Workshop Image</span>
                  </div>
                </div>

                <h3 className="font-heading font-semibold text-lg mb-2">{workshop.title}</h3>
                <p className="text-muted-foreground text-sm flex-1 line-clamp-2">{workshop.description}</p>

                <div className="flex items-center gap-4 mt-4 text-sm">
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>{workshop.place}</span>
                  </div>
                  <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                    workshop.type === 'in-person' 
                      ? 'bg-emerald-500/20 text-emerald-500' 
                      : 'bg-primary/20 text-primary'
                  }`}>
                    {workshop.type === 'in-person' ? 'In-Person' : 'Online'}
                  </span>
                </div>
              </div>
            </InteractiveNode>
          ))}
        </div>

        {/* Workshop Detail Modal */}
        <AnimatePresence>
          {selectedWorkshop && (
            <>
              <motion.div
                className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedWorkshop(null)}
              />
              <motion.div
                className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-lg md:w-full z-50"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
              >
                <div className="node-base p-6 h-full overflow-auto">
                  <div className="node-glow" />
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="font-heading text-xl font-bold">{selectedWorkshop.title}</h3>
                      <button
                        onClick={() => setSelectedWorkshop(null)}
                        className="p-2 rounded-lg hover:bg-muted transition-colors"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Image placeholder */}
                    <div className="w-full h-48 rounded-lg bg-gradient-to-br from-muted to-card mb-4 flex items-center justify-center">
                      <div className="text-center text-muted-foreground">
                        <Users className="w-12 h-12 mx-auto mb-2 opacity-50" />
                        <span className="text-sm">Workshop Image</span>
                      </div>
                    </div>

                    <p className="text-foreground/90 mb-4">{selectedWorkshop.description}</p>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span>{selectedWorkshop.place}</span>
                        <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                          selectedWorkshop.type === 'in-person' 
                            ? 'bg-emerald-500/20 text-emerald-500' 
                            : 'bg-primary/20 text-primary'
                        }`}>
                          {selectedWorkshop.type === 'in-person' ? 'In-Person' : 'Online'}
                        </span>
                      </div>
                      {selectedWorkshop.date && (
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>{selectedWorkshop.date}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
