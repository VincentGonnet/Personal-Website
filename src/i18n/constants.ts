export const languages = {
    en: 'En',
    fr: 'Fr',
};

export const defaultLang = 'en';
export const showDefaultLang = false;

export const routes = {
    en: {
        'timeline': 'timeline',
        'projects': 'projects',
        'contact': 'contact',
    },
    fr: {
        'timeline': 'chronologie',
        'projects': 'projets',
        'contact': 'contact',
    },
} as const;

export const ui = {
    en: {
        'nav.home': 'Home',
        'nav.timeline': 'Timeline',
        'nav.projects': 'Projects',
        'nav.contacts': 'Contacts',
    },
    fr: {
        'nav.home': 'Accueil',
        'nav.timeline': 'Chronologie',
        'nav.projects': 'Projets',
        'nav.contacts': 'Contacts',
    },
} as const;