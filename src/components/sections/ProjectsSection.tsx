import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, Cpu, Wind, Heart, Shield } from 'lucide-react';
import { InteractiveNode } from '../InteractiveNode';

interface Project {
  id: string;
  title: string;
  icon: typeof Cpu;
  color: string;
  problem: string;
  techStack: string[];
  outcome: string;
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    id: 'mega-capsule',
    title: 'MEGA Capsule',
    icon: Cpu,
    color: 'from-cyan-glow to-primary',
    problem: 'Building intelligent systems that can reason and explain their decisions in natural language.',
    techStack: ['Python', 'PyTorch', 'LLaMA', 'LangChain', 'Coqui TTS'],
    outcome: 'A conversational AI system capable of multi-turn dialogue with explainable reasoning.',
    github: '#',
    demo: '#',
  },
  {
    id: 'wind-farm',
    title: 'Wind Farm Optimization',
    icon: Wind,
    color: 'from-emerald-400 to-teal-500',
    problem: 'Maximizing energy output from wind farms through predictive maintenance and layout optimization.',
    techStack: ['Python', 'TensorFlow', 'SQL', 'Azure ML', 'Power BI'],
    outcome: 'Achieved 15% improvement in energy prediction accuracy and optimized turbine placement.',
    github: '#',
  },
  {
    id: 'mediplus',
    title: 'MediPlus',
    icon: Heart,
    color: 'from-rose-400 to-pink-500',
    problem: 'Streamlining healthcare workflows and patient data management with intelligent automation.',
    techStack: ['Python', 'FastAPI', 'PostgreSQL', 'React', 'Docker'],
    outcome: 'Reduced administrative overhead by 40% through automated patient triage and scheduling.',
    github: '#',
    demo: '#',
  },
  {
    id: 'heart-classifier',
    title: 'Heart Disease Classifier',
    icon: Shield,
    color: 'from-amber-accent to-orange-500',
    problem: 'Early detection of heart disease using machine learning on clinical data.',
    techStack: ['Python', 'Scikit-learn', 'XGBoost', 'SHAP', 'Streamlit'],
    outcome: '94% accuracy with interpretable predictions using SHAP explanations.',
    github: '#',
  },
];

export const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="section-container bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.1" className="text-border" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-wider uppercase">// Projects Node</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mt-2 mb-4">Featured Work</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </motion.div>

        {/* Project Nodes Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <InteractiveNode
              key={project.id}
              delay={0.1 * i}
              onClick={() => setSelectedProject(project)}
              isActive={selectedProject?.id === project.id}
            >
              <div className="flex items-start gap-4">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center flex-shrink-0`}>
                  <project.icon className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-heading font-semibold text-lg mb-1">{project.title}</h3>
                  <p className="text-muted-foreground text-sm line-clamp-2">{project.problem}</p>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="px-2 py-0.5 rounded-full bg-muted text-muted-foreground text-xs">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </InteractiveNode>
          ))}
        </div>

        {/* Project Detail Modal */}
        <AnimatePresence>
          {selectedProject && (
            <>
              <motion.div
                className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
              />
              <motion.div
                className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-2xl md:w-full z-50"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
              >
                <div className="node-base p-8 h-full overflow-auto">
                  <div className="node-glow" />
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${selectedProject.color} flex items-center justify-center`}>
                          <selectedProject.icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="font-heading text-2xl font-bold">{selectedProject.title}</h3>
                      </div>
                      <button
                        onClick={() => setSelectedProject(null)}
                        className="p-2 rounded-lg hover:bg-muted transition-colors"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="font-heading font-semibold text-primary mb-2">Problem</h4>
                        <p className="text-foreground/90">{selectedProject.problem}</p>
                      </div>

                      <div>
                        <h4 className="font-heading font-semibold text-primary mb-2">Tech Stack</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-heading font-semibold text-primary mb-2">Outcome</h4>
                        <p className="text-foreground/90">{selectedProject.outcome}</p>
                      </div>

                      <div className="flex gap-3 pt-4">
                        {selectedProject.github && (
                          <a
                            href={selectedProject.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors"
                          >
                            <Github className="w-4 h-4" />
                            <span className="text-sm font-medium">GitHub</span>
                          </a>
                        )}
                        {selectedProject.demo && (
                          <a
                            href={selectedProject.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-primary text-primary-foreground"
                          >
                            <ExternalLink className="w-4 h-4" />
                            <span className="text-sm font-medium">Live Demo</span>
                          </a>
                        )}
                      </div>
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
