import { motion } from 'framer-motion';
import { FileText, ExternalLink, BookOpen } from 'lucide-react';
import { InteractiveNode } from '../InteractiveNode';

interface Research {
  id: string;
  title: string;
  description: string;
  link: string;
}

const research: Research[] = [
  {
    id: 'adversarial',
    title: 'Adversarial Robustness of Deep Vision Models',
    description: 'Exploring vulnerabilities in deep learning vision systems and developing defense mechanisms against adversarial attacks.',
    link: '#', // Replace with actual Google Drive / GitHub link
  },
  {
    id: 'sentiment-fraud',
    title: 'Sentiment-Aware Fraud Detection',
    description: 'Combining sentiment analysis with transaction patterns to enhance fraud detection accuracy in financial systems.',
    link: '#', // Replace with actual Google Drive / GitHub link
  },
];

export const ResearchSection = () => {
  return (
    <section id="research" className="section-container bg-background relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary font-mono text-sm tracking-wider uppercase">// Research Node</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mt-2 mb-4">Research Papers</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-6">
          {research.map((paper, i) => (
            <InteractiveNode key={paper.id} delay={0.1 * i}>
              <a
                href={paper.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/30 transition-colors">
                  <BookOpen className="w-7 h-7 text-accent" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-heading font-semibold text-lg group-hover:text-primary transition-colors">
                      {paper.title}
                    </h3>
                    <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-muted-foreground text-sm">{paper.description}</p>
                </div>
                <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium">
                  <FileText className="w-3.5 h-3.5" />
                  View Paper
                </div>
              </a>
            </InteractiveNode>
          ))}
        </div>

        {/* Visual connection to Projects */}
        <motion.div
          className="flex justify-center mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <div className="w-8 h-px bg-border" />
            <span className="font-mono text-xs">linked_to: projects</span>
            <div className="w-8 h-px bg-border" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
