module.exports = {
  siteMetadata: {
    // TODO:
    // Change to https://www.supervoid.tv before production
    url: 'https://supervoidgatsbymain.gatsbyjs.io',
    title: `SUPERVOID STUDIO: Visual Design, Creative Content, Livestreaming,
    Broadcast, Visual FX`,
    author: 'Drew Mercedante',
    description:
      'Philly-native visual design team specializing in lighting, music videos, films, animation and more.',
    keywords: [
      'lighting',
      ' music',
      ' video',
      ' concerts',
      ' film',
      ' design',
      ' animation',
      ' philadelphia',
    ],
    image: '/lights-bones.png',
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
