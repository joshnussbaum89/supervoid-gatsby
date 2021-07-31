import React from 'react';
import { Link } from 'gatsby';
import LazyLoad from 'react-lazyload';
import styled from 'styled-components';

const VideoContainerStyles = styled.div`
  position: relative;
  cursor: pointer;

  :hover .text-block {
    display: flex;
    align-items: center;
    justify-content: center;
  }

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

  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

const VideoStyles = styled.video`
  width: 100%;
`;

const Project = ({ title, gif, slug }) => {
  return (
    <Link to={`/${slug}`}>
      <LazyLoad height={200}>
        <VideoContainerStyles>
          <VideoStyles autoPlay loop muted playsinline>
            <source src={gif} type='video/mp4' />
          </VideoStyles>
          <div className='text-block'>
            <h4>{title}</h4>
          </div>
        </VideoContainerStyles>
      </LazyLoad>
    </Link>
  );
};

export default Project;
