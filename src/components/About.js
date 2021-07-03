import React from 'react';
import styled from 'styled-components';

const AboutStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100vh;
  margin: 0 2rem;
`;

const About = () => {
  return (
    <AboutStyles id='about'>
      <h2>About</h2>
      <p>
        SUPERVOID is a visual design team that creates surreal mixed media
        content and directs videos for artists and brands looking to stand out
        on stage and on screen.
      </p>
    </AboutStyles>
  );
};

export default About;
