import React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LazyLoad from 'react-lazyload';
import SupervoidBio from '../assets/gifs/SUPERVOID-BIO.mp4';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';

const AboutStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  width: 90%;
  margin: 0 auto;
  padding: 1rem;

  .contact-header {
    margin-top: 3rem;
  }

  .social-icon--container {
    padding: 1rem 0;
  }
  .social-icon {
    fill: var(--accent-secondary);
    font-size: var(--large);
    margin: 3rem;
    :hover {
      fill: var(--accent-primary);
    }
  }

  .supervoid-logo {
    display: block;
    margin: auto;
    width: 375px;
    border-radius: 10px;
  }

  @media (min-width: 820px) {
    width: 70%;
  }
`;

const VideoStyles = styled.video`
  width: 100%;
  height: 100%;
`;

const About = () => {
  return (
    <LazyLoad height={200}>
      <motion.section
        style={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: 'easeInOut', duration: 0.5 }}
      >
        <AboutStyles id='about'>
          <h2>About</h2>
          <p>
            SUPERVOID is a visual design team that creates surreal mixed media
            content and directs videos for artists and brands looking to stand
            out on stage and on screen.
          </p>
        </AboutStyles>
      </motion.section>
      <motion.section
        style={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: 'easeInOut', duration: 0.5 }}
      >
        <div>
          <VideoStyles autoPlay loop muted playsinline>
            <source src={SupervoidBio} type='video/mp4' />
          </VideoStyles>
        </div>
      </motion.section>
      <motion.section
        style={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: 'easeInOut', duration: 0.5 }}
      >
        <AboutStyles>
          <h2 className='contact-header'>Contact Us</h2>
          <div className='social-icon--container'>
            <StaticImage
              src='../assets/images/SUPERVOID-LOGO.png'
              alt='Supervoid Logo'
              title='Supervoid'
              className='supervoid-logo'
            />
            <Link
              to='/'
              onClick={(e) => {
                window.location = 'mailto: daemon@supervoid.tv';
                e.preventDefault();
              }}
              target='_blank'
              rel='noopener noreferrer'
            >
              <MailOutlineIcon className='social-icon' />
            </Link>
            <Link
              to='https://www.instagram.com/supervoidstudio/'
              target='_blank'
              rel='noopener noferrer'
            >
              <InstagramIcon className='social-icon' />
            </Link>
          </div>
        </AboutStyles>
      </motion.section>
    </LazyLoad>
  );
};

export default About;
