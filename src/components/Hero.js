// TODO: This is a placeholder.
// Header should be a Vimeo vid, not a local gif.
import React from 'react';
import styled from 'styled-components';

const HeroStyles = styled.video`
  width: 100%;
  height: 100%;
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
