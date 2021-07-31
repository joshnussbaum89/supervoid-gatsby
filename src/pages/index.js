import React from 'react';
import { graphql } from 'gatsby';

// Styles
import 'normalize.css';

// Components
import SEO from '../components/SEO';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import ProjectContainer from '../components/ProjectContainer';

const IndexPage = ({ data }) => {
  const videoData = data.allDataJson.edges;

  return (
    <Layout>
      <SEO />
      <Hero />
      <ProjectContainer data={videoData} />
    </Layout>
  );
};

export const query = graphql`
  query MyQuery {
    allDataJson {
      edges {
        node {
          title
          type
          url
          id
          slug
          isAvailable
          gif {
            publicURL
          }
        }
      }
    }
  }
`;

export default IndexPage;
