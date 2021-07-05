import React from 'react';
import styled from 'styled-components';
import LazyLoad from 'react-lazyload';

const VideoContainerStyles = styled.div`
  position: relative;
  cursor: pointer;

  :hover .text-block {
    display: flex;
  }

  .text-block {
    display: none;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    padding: 1rem;
    background-color: var(--text-background);
    color: var(--text-primary);
  }
  h4 {
    text-align: right;
  }
`;

const VideoStyles = styled.video`
  width: 100%;
`;

const Project = ({ key, type, title, url }) => {
  return (
    <LazyLoad height={200}>
      <VideoContainerStyles>
        <VideoStyles autoPlay loop muted playsinline>
          <source src={url} type='video/mp4' />
        </VideoStyles>
        <div className='text-block'>
          <h4>{title}</h4>
        </div>
      </VideoContainerStyles>
    </LazyLoad>
  );
};

export default Project;
