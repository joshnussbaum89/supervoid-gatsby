import React from 'react';
import styled from 'styled-components';

const HeroStyles = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;

  iframe {
    width: 100vw;
    height: 56.25vw;
  }
`;

const Hero = () => {
  return (
    <div id='hero'>
      <HeroStyles>
        <iframe
          title='vimeo-player'
          src='https://player.vimeo.com/video/584075790'
          frameBorder='0'
          webkitallowfullscreen='true'
          mozallowfullscreen='true'
          allowFullScreen
        ></iframe>
      </HeroStyles>
    </div>
  );
};

export default Hero;
