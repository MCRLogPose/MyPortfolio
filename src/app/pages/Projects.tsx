import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'motion/react';
import { useApp } from '../contexts/AppContext';
import { useState, useRef } from 'react';
import { ExternalLink, Github, ChevronRight } from 'lucide-react';
import { translations } from '../i18n/translations';

export function Projects() {
  const { language } = useApp();
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Smoother scroll following with spring physics
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const translateY = useTransform(smoothProgress, [0, 1], [-50, 50]);

  const t = translations[language].projects;

  return (
    <div ref={containerRef} className="relative min-h-screen pt-24 pb-16 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-primary/5 to-secondary/5 dark:from-accent/10 dark:via-primary/10 dark:to-secondary/10" />

      <motion.div
        className="absolute top-40 right-20 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            {t.title}
          </h1>
          <p className="text-xl text-muted-foreground mb-12">{t.subtitle}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Projects List */}
          <div className="space-y-4">
            {t.list.map((project, index) => (
              <motion.div
                key={index}
                // ... (rest of the file)
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
                className={`group relative p-6 rounded-2xl cursor-pointer transition-all duration-300 ${hoveredProject === index
                  ? 'bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border-2 border-primary/50 shadow-lg shadow-primary/5'
                  : 'bg-card/50 border border-border hover:border-primary/30'
                  }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs px-3 py-1 rounded-full bg-primary/20 text-primary font-medium">
                        {project.category}
                      </span>
                      <ChevronRight
                        className={`w-5 h-5 text-primary transition-transform duration-300 ${hoveredProject === index ? 'translate-x-1' : ''
                          }`}
                      />
                    </div>

                    <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                      {project.title}
                    </h3>

                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground border border-border/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Hover actions */}
                <AnimatePresence>
                  {hoveredProject === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="flex gap-4 mt-6 pt-4 border-t border-border/50">
                        <button className="flex items-center gap-2 text-sm font-medium text-primary hover:text-secondary transition-colors underline-offset-4 hover:underline">
                          <ExternalLink className="w-4 h-4" />
                          {t.viewProject}
                        </button>
                        <button className="flex items-center gap-2 text-sm font-medium text-primary hover:text-accent transition-colors underline-offset-4 hover:underline">
                          <Github className="w-4 h-4" />
                          {t.viewCode}
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Preview Panel */}
          <div className="hidden lg:block sticky top-28 h-[calc(100vh-10rem)]">
            <motion.div
              style={{ y: translateY }}
              className="relative w-full h-full rounded-3xl overflow-hidden bg-card border-2 border-border/50 shadow-2xl flex flex-col"
            >
              <AnimatePresence mode="wait">
                {hoveredProject !== null ? (
                  <motion.div
                    key={hoveredProject}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 flex flex-col"
                  >
                    <div className="relative flex-1 overflow-hidden">
                      <motion.img
                        src={t.list[hoveredProject!].image}
                        alt={t.list[hoveredProject!].title}
                        className="w-full h-full object-cover"
                        initial={{ scale: 1.2 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.6 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                    </div>

                    <div className="p-8 bg-card/90 backdrop-blur-md">
                      <motion.h3
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="text-3xl font-bold mb-3 text-foreground"
                      >
                        {t.list[hoveredProject!].title}
                      </motion.h3>
                      <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="text-muted-foreground mb-6"
                      >
                        {t.list[hoveredProject!].description}
                      </motion.p>
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-wrap gap-2"
                      >
                        {t.list[hoveredProject!].tags.map((tag, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </motion.div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5"
                  >
                    <div className="text-center p-8">
                      <motion.div
                        animate={{
                          y: [0, -10, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                        className="text-6xl mb-6"
                      >
                        ✨
                      </motion.div>
                      <p className="text-xl text-muted-foreground font-medium">
                        {language === 'es'
                          ? 'Pasa el cursor sobre un proyecto para verlo'
                          : 'Hover over a project to preview it'}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
