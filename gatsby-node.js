const path = require(`path`);
// const { createOpenGraphImage } = require('gatsby-plugin-open-graph-images');

async function turnVideosIntoPages({ graphql, actions }) {
  const { createPage } = actions;
  const videoPageTemplate = path.resolve(`src/templates/Video.js`);

  const { data } = await graphql(`
    query {
      allDataJson {
        edges {
          node {
            title
            type
            url
            id
            slug
          }
        }
      }
    }
  `);

  data.allDataJson.edges.forEach((video) => {
    createPage({
      path: `/${video.node.slug}`,
      component: videoPageTemplate,
      context: {
        id: video.node.id,
        type: video.node.type,
        url: video.node.url,
        title: video.node.title,
        slug: video.node.slug,
      },
    });
  });
}

// async function createOGImageSeo({ actions }) {
//   const { createPage } = actions;

//   const openGraphImage = createOpenGraphImage(createPage, {
//     path: '/og-image/joshImage.png',
//     component: path.resolve(`src/templates/OgImage.js`),
//     size: {
//       width: 400,
//       height: 50,
//     }, // (3)
//     context: {
//       description: 'a image created with gatsby-plugin-open-graph-images',
//     },
//   });
// }

exports.createPages = async (params) => {
  await Promise.all([turnVideosIntoPages(params)]);
};
