import React from 'react';
import styled from 'styled-components';

// Components
import Layout from '../components/Layout';

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

const video = ({ pageContext }) => {
  let { url } = pageContext;

  return (
    <Layout>
      <VideoStyles>
        <iframe
          title='vimeo-player'
          src={`${url}`}
          frameBorder='0'
          webkitallowfullscreen='true'
          mozallowfullscreen='true'
          allowFullScreen
        ></iframe>
      </VideoStyles>
    </Layout>
  );
};

export default video;
