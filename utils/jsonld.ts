import { AppConstant } from '../constant'

interface JsonldBreadcrumbParam {
  categoryTitle: string;
  categorySlug: string;
  title: string;
  slug: string;
}

interface JsonldArticleParam {
  cover: string;
  title: string;
  slug: string;
  desc: string;
}

export function getJsonLdWebsite (): string {
  return JSON.stringify({
    '@context': 'http://schema.org',
    '@type': 'WebSite',
    url: `${AppConstant.PATH}`,
    description: 'Baca Al-Qur\'an dimana saja, langsung dari web browser Anda | Qur\'an Web',
    image: `${AppConstant.PATH}icon.png`,
    thumbnailUrl: `${AppConstant.PATH}icon.png`,
    name: 'Quran Web',
    sameAs: [
      'https://www.facebook.com/mazipanneh',
      'https://instagram.com/maz_ipan',
      'https://twitter.com/Maz_Ipan',
      'https://id.linkedin.com/in/mazipan',
      'https://www.slideshare.net/IrfanMaulana21',
      'https://github.com/mazipan'
    ]
  })
}

export function getJsonLdBreadcrumb ({ categoryTitle, categorySlug, title, slug }: JsonldBreadcrumbParam): string {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: AppConstant.PATH
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: categoryTitle,
        item: `${AppConstant.PATH}${categorySlug}/`
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: title,
        item: `${AppConstant.PATH}${slug}/`
      }
    ]
  })
}

export function getJsonLdArticle ({ slug, title, cover, desc }: JsonldArticleParam): string {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${AppConstant.PATH}${slug}/`
    },
    headline: title,
    image: [
      `${AppConstant.PATH}${cover}`
    ],
    datePublished: process.env.envBuildTime,
    dateModified: process.env.envBuildTime,
    author: {
      '@type': 'Person',
      name: 'Irfan Maulana'
    },
    description: desc
  })
}
