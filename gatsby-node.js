const path = require(`path`);

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

exports.createPages = async (params) => {
  await Promise.all([turnVideosIntoPages(params)]);
};
