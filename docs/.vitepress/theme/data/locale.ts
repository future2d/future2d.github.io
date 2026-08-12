export type SiteLocale = 'en' | 'zh'

export function getLocalizedPath(path: string, locale: SiteLocale): string {
  const normalized = path.replace(/^\/zh(?=\/|$)/, '') || '/'
  return locale === 'zh' ? `/zh${normalized}` : normalized
}
