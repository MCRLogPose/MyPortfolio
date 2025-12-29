import { motion } from 'motion/react';
import { useApp } from '../contexts/AppContext';
import { Code, Palette, Zap } from 'lucide-react';
import { translations } from '../i18n/translations';

export function About() {
  const { language } = useApp();
  const t = translations[language].about;

  const valuesIcons = {
    cleanCode: Code,
    creativeDesign: Palette,
    highPerformance: Zap,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative min-h-screen pt-24 pb-16 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-accent/5 to-primary/5 dark:from-secondary/10 dark:via-accent/10 dark:to-primary/10" />

      <motion.div
        className="absolute top-32 left-10 w-72 h-72 bg-secondary/10 rounded-full filter blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, -50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl mb-8 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"
          >
            {t.title}
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl text-foreground/80 mb-6"
          >
            {t.intro}
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground mb-12"
          >
            {t.description}
          </motion.p>

          <motion.h2
            variants={itemVariants}
            className="text-3xl mb-6 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent"
          >
            {t.experience}
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground mb-12"
          >
            {t.experienceText}
          </motion.p>

          <motion.div variants={itemVariants} className="grid md:grid-cols-3 gap-6">
            {Object.entries(t.values).map(([key, value], index) => {
              const Icon = valuesIcons[key as keyof typeof valuesIcons];
              return (
                <motion.div
                  key={index}
                  className="relative p-6 rounded-2xl bg-gradient-to-br from-card to-card/50 border border-primary/10 backdrop-blur-sm overflow-hidden group"
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {/* Gradient overlay on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity"
                  />

                  <div className="relative z-10">
                    <div className="w-14 h-14 mb-4 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl mb-2 text-foreground">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}