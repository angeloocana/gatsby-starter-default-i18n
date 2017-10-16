var defaultLangKey = 'en';

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    languages: {
      defaultLangKey: defaultLangKey,
      langs: ['en', 'pt']
    }
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyForNull: 'any',
        langKeyDefault: defaultLangKey,
        useLangKeyLayout: false
      }
    }],
}
