import React from 'react';

// Components
import Project from './Project';

const ProjectContainer = ({ data }) => {
  const firstSixProjects = data.filter((item) => item.id >= 1 && item.id <= 7);
  const projectsAfterBio = data.filter((item) => item.id > 7);

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
    <>
      {firstProjects}
      <h1>bio</h1>
      {lastProjects}
    </>
  );
};

export default ProjectContainer;
