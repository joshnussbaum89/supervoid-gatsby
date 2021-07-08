module.exports = {
  siteMetadata: {
    siteUrl: 'https://supervoid.tv',
    title: `SUPERVOID STUDIO: Visual Design, Creative Content, Livestreaming,
    Broadcast, Visual FX`,
    author: 'Drew Mercedante',
    description:
      'Philly-native visual design team specializing in lighting, music videos, films, animation and more.',
    keywords: [
      'lighting',
      'music',
      'video',
      'concerts',
      'film',
      'design',
      'animation',
      'philadelphia',
    ],
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-gatsby-cloud',
    'gatsby-transformer-json',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
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
  ],
};
