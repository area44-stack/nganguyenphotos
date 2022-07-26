module.exports = {
  pathPrefix: "/nganguyen",
  siteMetadata: {
    // See all options: https://github.com/LekoArts/gatsby-themes/blob/master/themes/gatsby-theme-emilia-core/gatsby-config.js
    siteTitle: `Nga Nguyen's Photos`,
    siteTitleAlt: `Nga Nguyen's Photos | 📷 by Nga Nguyen`,
    siteHeadline: `Nga Nguyen's Photos | 📷 by Nga Nguyen`,
    siteUrl: `https://itslongnhatnguyen.github.io/nganguyen/`,
    siteDescription: "📷 by Nga Nguyen",
    siteLanguage: `vi`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-emilia`,
      options: {
        name: `Nga Nguyen's Photos`,
        socialMedia: [{}],
        location: `Vietnam`,
      },
    },
  ],
}
