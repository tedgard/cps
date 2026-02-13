export const SITE_NAME = 'CPS'
export const SITE_FULL_NAME = 'Creative Problem Solving'
export const DEFAULT_DESCRIPTION =
  "Method-focused archive site documenting Win Wenger's Creative Problem Solving techniques with source-linked guidance."
export const DEFAULT_SOCIAL_IMAGE_PATH = '/og-image.svg'
export const FALLBACK_SITE_URL = 'https://cps.edgardn.top'

const isHttpUrl = (value: string) => /^https?:\/\//i.test(value)

export const getSiteOrigin = (): string => {
  const configuredSiteUrl = import.meta.env.VITE_SITE_URL?.trim()

  if (configuredSiteUrl && isHttpUrl(configuredSiteUrl)) {
    try {
      return new URL(configuredSiteUrl).origin
    } catch {
      // Ignore invalid environment values and fall through to runtime origin.
    }
  }

  if (typeof window !== 'undefined' && isHttpUrl(window.location.origin)) {
    return window.location.origin
  }

  return FALLBACK_SITE_URL
}
