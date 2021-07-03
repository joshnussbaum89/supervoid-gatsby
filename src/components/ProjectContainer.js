import React from 'react';
import styled from 'styled-components';

// Components
import Project from './Project';
import About from './About';

const ContainerStyles = styled.article`
  font-size: 0;

  h2 {
    text-align: center;
  }

  .project-grid {
    display: grid;
    grid-template-columns: 1fr;
  }

  @media (min-width: 768px) {
    .project-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
`;

const ProjectContainer = ({ data }) => {
  const firstSixProjects = data.filter((item) => item.id >= 1 && item.id < 7);
  const projectsAfterBio = data.filter((item) => item.id >= 7);

  const firstProjects = firstSixProjects.map((projectItem) => {
    return (
      <Project
        index={projectItem.id}
        type={projectItem.type}
        title={projectItem.title}
        url={projectItem.url}
      />
    );
  });

  const lastProjects = projectsAfterBio.map((projectItem) => {
    return (
      <Project
        index={projectItem.id}
        type={projectItem.type}
        title={projectItem.title}
        url={projectItem.url}
      />
    );
  });

  return (
    <ContainerStyles id='projects'>
      <div className='project-grid'>{firstProjects}</div>
      <About />
      <div className='project-grid'>{lastProjects}</div>
    </ContainerStyles>
  );
};

export default ProjectContainer;
