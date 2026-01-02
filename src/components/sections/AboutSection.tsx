import { motion } from "framer-motion";
import { Brain, Heart, Users, Lightbulb } from "lucide-react";
import { InteractiveNode } from "../InteractiveNode";
import profileImage from "../IMG_9977.JPG";

export const AboutSection = () => {
  const traits = [
    {
      icon: Brain,
      label: "Curiosity-Driven",
      description: "Always exploring new frontiers in AI",
    },
    {
      icon: Lightbulb,
      label: "Problem Solver",
      description: "Transforming complex challenges into solutions",
    },
    {
      icon: Users,
      label: "Mentor & Leader",
      description: "Empowering the next generation of AI practitioners",
    },
    {
      icon: Heart,
      label: "Impact-Focused",
      description: "Building systems that make a difference",
    },
  ];

  const textLines = [
    "Hey, I'm Tesnime Ellabou 👋",
    "I mix curiosity, code, and creativity to turn wild ideas into AI-powered reality.",
    "",
    "I tinker with deep learning, break it (sometimes),",
    "and then rebuild it smarter—think adversarial attacks, explainable AI, and cutting-edge projects 🚀.",
    "",
    "Beyond the code, I mentor, lead workshops, and spark curiosity 🎓,",
    "because sharing knowledge is how we make AI human-friendly.",
    "",
    "This is more than a portfolio—it's my playground, lab, and launchpad.",
    "Dive in, explore my experiments, and see why my CV is just the tip of the iceberg ✨",
  ];

  return (
    <section id="about" className="section-container bg-background relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-wider uppercase">
            // Identity Node
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mt-2 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <InteractiveNode size="lg" delay={0.2}>
            <div className="space-y-4">
              {textLines.map((line, i) => (
                <motion.p
                  key={i}
                  className={`text-lg ${
                    line === "" ? "h-4" : "text-foreground/90"
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  {line}
                </motion.p>
              ))}
            </div>
          </InteractiveNode>

          {/* Portrait placeholder */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-primary opacity-20 blur-2xl" />

              {/* Portrait frame */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-primary/30 bg-card">
                <div className="aspect-square flex items-center justify-center bg-gradient-to-br from-card to-muted">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto rounded-full bg-gradient-primary flex items-center justify-center mb-4">
                      <img
                        src={profileImage}
                        alt="Tesnime Ellabou"
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Professional Portrait
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating decorative nodes */}
              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 rounded-xl bg-primary/20 backdrop-blur-sm border border-primary/30 flex items-center justify-center"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Brain className="w-8 h-8 text-primary" />
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 w-14 h-14 rounded-xl bg-accent/20 backdrop-blur-sm border border-accent/30 flex items-center justify-center"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
              >
                <Lightbulb className="w-7 h-7 text-accent" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Traits */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          {traits.map((trait, i) => (
            <motion.div
              key={trait.label}
              className="group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + i * 0.1 }}
            >
              <div className="node-base p-4 text-center h-full">
                <div className="node-glow" />
                <div className="relative z-10">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <trait.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-sm mb-1">
                    {trait.label}
                  </h3>
                  <p className="text-muted-foreground text-xs">
                    {trait.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};