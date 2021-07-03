// TODO: This is a placeholder.
// Header should be a Vimeo vid, not a local gif.
import React from 'react';
import styled from 'styled-components';

const HeroStyles = styled.video`
  /* position: fixed;
  right: 0;
  bottom: 0; */
  min-width: 100vw;
  min-height: 100vh;
`;

const Hero = ({ data }) => {
  return (
    <div id='hero'>
      <HeroStyles autoPlay loop muted playsinline>
        <source src={data[0].url} type='video/mp4' />
      </HeroStyles>
    </div>
  );
};

export default Hero;
