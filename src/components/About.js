import React from 'react';
import styled from 'styled-components';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LazyLoad from 'react-lazyload';

const AboutStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  width: 80%;
  margin: 0 auto;
  padding: 1rem;

  .social-icon--container {
    padding: 1rem 0;
  }
  .social-icon {
    fill: var(--accent-secondary);
    font-size: var(--large);
    margin: 0 1.5rem;
    cursor: pointer;
  }
`;

const About = () => {
  return (
    <LazyLoad height={200}>
      <AboutStyles id='about'>
        <h2>About</h2>
        <p>
          SUPERVOID is a visual design team that creates surreal mixed media
          content and directs videos for artists and brands looking to stand out
          on stage and on screen.
        </p>
        <h3>Contact Us</h3>
        <div className='social-icon--container'>
          <InstagramIcon className='social-icon' />
          <FacebookIcon className='social-icon' />
          <TwitterIcon className='social-icon' />
        </div>
      </AboutStyles>
    </LazyLoad>
  );
};

export default About;
