// Full-screen Supervoid promo video
import React from 'react';
import styled from 'styled-components';

const HeroStyles = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;

  iframe {
    width: 100vw;
    height: 56.25vw;
    min-height: 100vh;
  }
`;

const Hero = () => {
  return (
    <div id='hero'>
      <HeroStyles>
        <iframe
          title='vimeo-player'
          src='https://player.vimeo.com/video/535068198'
          frameborder='0'
          webkitallowfullscreen
          mozallowfullscreen
          allowfullscreen
        ></iframe>
      </HeroStyles>
    </div>
  );
};

export default Hero;
