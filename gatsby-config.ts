import type { GatsbyConfig, PluginRef } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    siteTitle: `Nga Nguyen's Photos`,
    siteTitleAlt: `Nga Nguyen's Photos | Nga Nguyen`,
    siteHeadline: `Nga Nguyen's Photos | Nga Nguyen`,
    siteUrl: `https://nganguyenphotos.netlify.app`,
    siteDescription: "A place to keep memories of Nga Nguyen's family",
    siteImage: `/banner.jpg`,
    author: `@torn4dom4n`,
  },
  trailingSlash: `never`,
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-emilia`,
      options: {
        name: `Nga Nguyen's Photos`,
        socialMedia: [{}],
        showThemeAuthor: false,
        location: `Vietnam`,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Nga Nguyen's Photos`,
        short_name: `Nga Nguyen`,
        description: `A place to keep memories of Nga Nguyen's family`,
        start_url: `/`,
        background_color: `#fff`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-384x384.png`,
            sizes: `384x384`,
            type: `image/png`,
          },
        ],
      },
    },
  ].filter(Boolean) as Array<PluginRef>,
}

export default config
