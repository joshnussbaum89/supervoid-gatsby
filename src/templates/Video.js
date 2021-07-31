import React from 'react';
import styled from 'styled-components';

// Components
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const VideoStyles = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;

  iframe {
    width: 100vw;
    height: 56.25vw;
    min-height: 100vh;
  }
`;

const Video = ({ pageContext }) => {
  let { url, isAvailable } = pageContext;

  return (
    <Layout>
      <SEO siteTitle={`SUPERVOID STUDIO: ${pageContext.title}`} />
      {isAvailable ? (
        <VideoStyles>
          <iframe
            title='video-player'
            src={`${url}`}
            frameBorder='0'
            webkitallowfullscreen='true'
            mozallowfullscreen='true'
            allowFullScreen
            crossOrigin='anonymous'
          ></iframe>
        </VideoStyles>
      ) : (
        <h2>Coming Soon!</h2>
      )}
    </Layout>
  );
};

export default Video;
