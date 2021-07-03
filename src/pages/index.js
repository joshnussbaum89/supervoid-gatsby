import React from 'react';
import { data } from '../assets/data';

// Styles
import 'normalize.css';

// Components
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import ProjectContainer from '../components/ProjectContainer';

const IndexPage = () => {
  return (
    <Layout>
      <Hero data={data} />
      <ProjectContainer data={data} />
    </Layout>
  );
};

export default IndexPage;
