import React from 'react';
import styled from 'styled-components';

const ProjectStyles = styled.video`
  display: inline-block;
  width: 100%;
`;

const Project = ({ index, type, title, url }) => {
  return (
    <ProjectStyles autoPlay loop muted playsinline>
      <source src={url} type='video/mp4' />
    </ProjectStyles>
  );
};

export default Project;
