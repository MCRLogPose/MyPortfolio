import { motion } from 'motion/react';
import { useApp } from '../contexts/AppContext';
import { Mail, Github, Linkedin, Twitter, Send } from 'lucide-react';
import { translations } from '../i18n/translations';

export function Contact() {
    const { language } = useApp();
    const t = translations[language].contact;

    const socialLinks = [
        {
            icon: Github,
            label: 'GitHub',
            href: 'https://github.com',
            color: 'hover:text-[#333] dark:hover:text-white',
        },
        {
            icon: Linkedin,
            label: 'LinkedIn',
            href: 'https://linkedin.com',
            color: 'hover:text-[#0077b5]',
        },
        {
            icon: Twitter,
            label: 'X (Twitter)',
            href: 'https://twitter.com',
            color: 'hover:text-[#1DA1F2]',
        },
    ];

    return (
        <div className="relative min-h-screen pt-24 pb-16 overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 dark:from-primary/10 dark:via-accent/10 dark:to-secondary/10" />

            <motion.div
                className="absolute bottom-20 right-10 w-80 h-80 bg-accent/10 rounded-full filter blur-3xl"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            />

            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl md:text-6xl mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                        {t.title}
                    </h1>
                    <p className="text-xl text-muted-foreground">{t.subtitle}</p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Email Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div className="p-8 rounded-3xl bg-card/50 border border-border backdrop-blur-sm group hover:border-primary/50 transition-colors">
                            <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white">
                                <Mail className="w-8 h-8" />
                            </div>
                            <h2 className="text-2xl font-semibold mb-4 text-foreground">{t.emailMe}</h2>
                            <p className="text-muted-foreground mb-8 text-lg">
                                {t.emailDescription}
                            </p>
                            <a
                                href="mailto:example@email.com"
                                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-primary text-white font-medium hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/25"
                            >
                                <Send className="w-5 h-5" />
                                {t.emailMe}
                            </a>
                        </div>

                        <div className="p-8 rounded-3xl bg-card/50 border border-border backdrop-blur-sm">
                            <h2 className="text-2xl font-semibold mb-6 text-foreground">{t.socials}</h2>
                            <div className="flex gap-4">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`p-4 rounded-2xl bg-muted/50 text-muted-foreground transition-all duration-300 ${social.color} hover:bg-muted hover:scale-110`}
                                        whileHover={{ y: -5 }}
                                        aria-label={social.label}
                                    >
                                        <social.icon className="w-6 h-6" />
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Optional: Contact Form placeholder or info */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="p-8 rounded-3xl bg-gradient-to-br from-card to-card/50 border border-border backdrop-blur-sm shadow-xl"
                    >
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-foreground/80">{t.form.name}</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 rounded-xl bg-muted/30 border border-border focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all outline-none"
                                    placeholder="Tu nombre"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-foreground/80">{t.form.email}</label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-3 rounded-xl bg-muted/30 border border-border focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all outline-none"
                                    placeholder="tu@email.com"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-foreground/80">{t.form.subject}</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 rounded-xl bg-muted/30 border border-border focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all outline-none"
                                    placeholder="Asunto"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-foreground/80">{t.form.message}</label>
                                <textarea
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-xl bg-muted/30 border border-border focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all outline-none resize-none"
                                    placeholder="Escribe tu mensaje aquí..."
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-semibold hover:opacity-90 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-primary/20"
                            >
                                {t.form.send}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
