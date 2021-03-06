module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.supervoid.tv',
    title: `SUPERVOID TV: Visual Design, Creative Content, Livestreaming,
    Broadcast, Visual FX`,
    author: 'Drew Mercedante',
    description:
      'Philadelphia visual design team specializing in lighting, music videos, films, animation and more.',
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
    image: '/SUPERVOID-FAVICON.png',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-gatsby-cloud',
    'gatsby-transformer-json',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/assets/images/SUPERVOID-FAVICON.png',
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
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
}
