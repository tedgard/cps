import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_SOCIAL_IMAGE_PATH,
  SITE_FULL_NAME,
  SITE_NAME,
  getSiteOrigin,
} from '../config/site'

type SeoProps = {
  title: string
  description?: string
  imagePath?: string
  noIndex?: boolean
}

type MetaAttribute = 'name' | 'property'

const upsertMetaTag = (attribute: MetaAttribute, key: string, value: string) => {
  let element = document.head.querySelector(
    `meta[${attribute}="${key}"]`,
  ) as HTMLMetaElement | null

  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }

  element.setAttribute('content', value)
}

const upsertCanonicalLink = (href: string) => {
  let element = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null

  if (!element) {
    element = document.createElement('link')
    element.rel = 'canonical'
    document.head.appendChild(element)
  }

  element.href = href
}

const toAbsoluteUrl = (origin: string, pathOrUrl: string) =>
  pathOrUrl.startsWith('http') ? pathOrUrl : new URL(pathOrUrl, `${origin}/`).toString()

const SOCIAL_IMAGE_ALT = 'Creative Problem Solving site preview'

function Seo({
  title,
  description = DEFAULT_DESCRIPTION,
  imagePath = DEFAULT_SOCIAL_IMAGE_PATH,
  noIndex = false,
}: SeoProps) {
  const { pathname } = useLocation()

  useEffect(() => {
    const siteOrigin = getSiteOrigin()
    const pageUrl = new URL(pathname || '/', `${siteOrigin}/`).toString()
    const imageUrl = toAbsoluteUrl(siteOrigin, imagePath)
    const pageTitle = `${title} | ${SITE_NAME}`
    const robotsContent = noIndex ? 'noindex,nofollow' : 'index,follow'

    document.title = pageTitle
    document.documentElement.lang = 'en'

    upsertMetaTag('name', 'description', description)
    upsertMetaTag('name', 'robots', robotsContent)

    upsertMetaTag('property', 'og:type', 'website')
    upsertMetaTag('property', 'og:site_name', SITE_FULL_NAME)
    upsertMetaTag('property', 'og:locale', 'en_US')
    upsertMetaTag('property', 'og:title', pageTitle)
    upsertMetaTag('property', 'og:description', description)
    upsertMetaTag('property', 'og:url', pageUrl)
    upsertMetaTag('property', 'og:image', imageUrl)
    upsertMetaTag('property', 'og:image:alt', SOCIAL_IMAGE_ALT)

    upsertMetaTag('name', 'twitter:card', 'summary_large_image')
    upsertMetaTag('name', 'twitter:title', pageTitle)
    upsertMetaTag('name', 'twitter:description', description)
    upsertMetaTag('name', 'twitter:image', imageUrl)
    upsertMetaTag('name', 'twitter:image:alt', SOCIAL_IMAGE_ALT)

    upsertCanonicalLink(pageUrl)
  }, [description, imagePath, noIndex, pathname, title])

  return null
}

export default Seo
