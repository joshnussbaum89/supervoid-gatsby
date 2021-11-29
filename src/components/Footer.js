import React from 'react';
import LazyLoad from 'react-lazyload';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { motion } from 'framer-motion';

const FooterContainerStyles = styled.footer`
  position: relative;
  height: 100vh;
  width: 100%;
`;

const FooterStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  width: 90%;
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;

  .social-icon {
    fill: var(--accent-secondary);
    font-size: var(--large);
    margin: 1rem;
    :hover {
      fill: var(--accent-primary);
    }
  }

  .social-info {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-decoration: none;
    span {
      color: var(--text-primary);
    }
  }

  .supervoid-logo {
    position: absolute;
    z-index: 100;
    opacity: 0.5;
    right: 25px;
    bottom: 0px;
    width: 75px;
    transition: 0.2s;
    :hover {
      opacity: 1;
    }
  }

  @media (min-width: 768px) {
    width: 70%;

    .supervoid-logo {
      width: 125px;
    }
  }
`;

const Footer = () => {
  return (
    <LazyLoad height={200}>
      <motion.section
        style={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: 'easeInOut', duration: 0.5 }}
      >
        <FooterContainerStyles>
          <FooterStyles>
            <h2 className='contact-header'>Info & Contact</h2>
            <p>
              SUPERVOID is a visual design team that creates surreal mixed media
              content and directs videos for artists and brands looking to stand
              out on stage and on screen.
            </p>
            <div>
              <Link
                to='/'
                onClick={(e) => {
                  window.location = 'mailto: daemon@supervoid.tv';
                  e.preventDefault();
                }}
                target='_blank'
                rel='noopener noreferrer'
                className='social-info'
              >
                <MailOutlineIcon className='social-icon' />
                <span>daemon@supervoid.tv</span>
              </Link>
              <a
                href='https://www.instagram.com/supervoidstudio/'
                target='_blank'
                rel='noopener noferrer'
                className='social-info'
              >
                <InstagramIcon className='social-icon' />
                <span>@supervoidtv</span>
              </a>
            </div>
            <Link to='/'>
              <StaticImage
                src='../assets/images/SUPERVOID-LOGO.png'
                alt='Supervoid Logo'
                title='Supervoid'
                className='supervoid-logo'
              />
            </Link>
          </FooterStyles>
        </FooterContainerStyles>
      </motion.section>
    </LazyLoad>
  );
};

export default Footer;
