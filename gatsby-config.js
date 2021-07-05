module.exports = {
  siteMetadata: {
    siteUrl: 'https://supervoid.tv',
    title: 'Supervoid TV',
    description:
      'Philly-native visual design team specializing in lighting, music videos, films, animation and more.',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-gatsby-cloud',
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'add ID # here',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'supervoidAssets',
        path: './src/assets/',
      },
      __key: 'supervoidAssets',
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
  ],
};
