import { Link, useLocation } from 'react-router-dom';
import { Moon, Sun, Globe, Menu, X } from 'lucide-react';
import { useApp } from '../contexts/AppContext';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

import { translations } from '../i18n/translations';

export function Navbar() {
  const { language, setLanguage, theme, setTheme } = useApp();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const t = translations[language].navbar;

  const navLinks = [
    { path: '/', label: t.home },
    { path: '/about', label: t.about },
    { path: '/projects', label: t.projects },
    { path: '/contact', label: t.contact },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 dark:bg-[#0f0f23]/70 backdrop-blur-xl border-b border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Name (Optional, if you have one) */}
          <div className="flex-shrink-0 lg:hidden">
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              MP
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="relative text-foreground/70 hover:text-foreground transition-colors font-medium"
              >
                {link.label}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-5 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Controls & Hamburger */}
          <div className="flex items-center gap-2 md:gap-3">
            {/* Language & Theme Toggles (Always visible) */}
            <div className="flex items-center gap-2">
              <motion.button
                onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
                className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10 hover:from-primary/20 hover:to-secondary/20 border border-primary/20 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle language"
              >
                <Globe className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium uppercase">{language}</span>
              </motion.button>

              <motion.button
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                className="p-2 md:p-2.5 rounded-xl bg-gradient-to-r from-accent/10 to-primary/10 hover:from-accent/20 hover:to-primary/20 border border-accent/20 transition-all"
                whileHover={{ scale: 1.05, rotate: 180 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle theme"
              >
                {theme === 'light' ? (
                  <Moon className="w-4 h-4 md:w-5 md:h-5 text-accent" />
                ) : (
                  <Sun className="w-4 h-4 md:w-5 md:h-5 text-accent" />
                )}
              </motion.button>
            </div>

            {/* Hamburger Menu Button */}
            <div className="md:hidden ml-1">
              <motion.button
                onClick={toggleMenu}
                className="p-2 rounded-xl bg-foreground/5 hover:bg-foreground/10 text-foreground transition-colors"
                whileTap={{ scale: 0.9 }}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-primary/10 bg-white/95 dark:bg-[#0f0f23]/95 backdrop-blur-xl overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${location.pathname === link.path
                      ? 'bg-primary/10 text-primary'
                      : 'text-foreground/70 hover:bg-foreground/5 hover:text-foreground'
                    }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}