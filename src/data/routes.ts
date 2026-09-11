import type { Locale } from '../i18n/translations';

export const routes = {
  home: { en: '/en', fr: '/fr' },
  company: { en: '/en/company', fr: '/fr/entreprise' },
  solutions: { en: '/en/solutions', fr: '/fr/solutions' },
  products: { en: '/en/products', fr: '/fr/produits' },
  procurement: { en: '/en/procurement', fr: '/fr/approvisionnement' },
  industries: { en: '/en/industries', fr: '/fr/secteurs' },
  capabilities: { en: '/en/capabilities', fr: '/fr/capacites' },
  contact: { en: '/en/contact', fr: '/fr/contact' },
  rfq: { en: '/en/request-a-quote', fr: '/fr/demande-de-devis' },
  privacy: { en: '/en/privacy', fr: '/fr/confidentialite' },
  terms: { en: '/en/terms', fr: '/fr/conditions' },
} as const;

export type RouteKey = keyof typeof routes;

function normalizePath(pathname: string) {
  return pathname.length > 1 ? pathname.replace(/\/$/, '') : pathname;
}

export function getRoute(key: RouteKey, locale: Locale) {
  return routes[key][locale];
}

export function getRouteKey(pathname: string): RouteKey | undefined {
  const normalized = normalizePath(pathname);
  return (Object.keys(routes) as RouteKey[]).find((key) =>
    Object.values(routes[key]).some((path) => path === normalized),
  );
}

export function getAlternateRoute(pathname: string, locale: Locale) {
  const key = getRouteKey(pathname);
  return key ? routes[key][locale] : routes.home[locale];
}
