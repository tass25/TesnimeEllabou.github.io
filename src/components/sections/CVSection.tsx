import { motion } from 'framer-motion';
import { FileText, Download } from 'lucide-react';
import { InteractiveNode } from '../InteractiveNode';

export const CVSection = () => {
  const cvLink = '#'; // Replace with actual Google Drive link

  return (
    <section id="cv" className="section-container bg-muted/30 relative">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <span className="text-primary font-mono text-sm tracking-wider uppercase">// CV Node</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mt-2 mb-4">Resume</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </motion.div>

        <InteractiveNode size="lg" delay={0.2}>
          <a
            href={cvLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            <div className="flex flex-col items-center gap-4">
              <motion.div
                className="w-20 h-20 rounded-2xl bg-gradient-primary flex items-center justify-center"
                whileHover={{ rotate: [0, -5, 5, 0] }}
                transition={{ duration: 0.5 }}
              >
                <FileText className="w-10 h-10 text-primary-foreground" />
              </motion.div>

              <div>
                <h3 className="font-heading text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  View My Resume
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Download or view my complete professional experience
                </p>
              </div>

              <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 text-primary font-medium group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Download className="w-4 h-4" />
                <span>Open in Google Drive</span>
              </div>
            </div>
          </a>
        </InteractiveNode>
      </div>
    </section>
  );
};
