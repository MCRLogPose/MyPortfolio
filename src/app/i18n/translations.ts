import es from './es.json';
import en from './en.json';

export const translations = {
    es,
    en,
};

export type Language = 'es' | 'en';
export type TranslationType = typeof translations.es;
