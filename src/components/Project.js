import React from 'react';
import { Link } from 'gatsby';
import LazyLoad from 'react-lazyload';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const VideoContainerStyles = styled.div`
  position: relative;
  cursor: pointer;

  .text-block {
    display: none;
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: var(--text-background);
    color: var(--text-primary);
  }

  h3 {
    text-align: center;
    padding: 1rem;
  }

  @media (min-width: 768px) {
    :hover .text-block {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

const VideoStyles = styled.video`
  width: 100%;
`;

const Project = ({ title, gif, slug }) => {
  return (
    <Link to={`/${slug}`}>
      <LazyLoad height={200}>
        <motion.section
          style={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: 'easeInOut', duration: 0.5 }}
        >
          <VideoContainerStyles>
            <VideoStyles autoPlay loop muted playsInline>
              <source src={gif} type='video/mp4' />
            </VideoStyles>
            <div className='text-block'>
              <h3>{title}</h3>
            </div>
          </VideoContainerStyles>
        </motion.section>
      </LazyLoad>
    </Link>
  );
};

export default Project;
