import React from 'react';
import styled from 'styled-components';
import LazyLoad from 'react-lazyload';

const ProjectStyles = styled.video`
  display: inline-block;
  width: 100%;
`;

const Project = ({ key, type, title, url }) => {
  return (
    <LazyLoad height={200}>
      <ProjectStyles autoPlay loop muted playsinline>
        <source src={url} type='video/mp4' />
      </ProjectStyles>
    </LazyLoad>
  );
};

export default Project;
