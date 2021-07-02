import React from 'react';
import 'normalize.css';
import Layout from '../components/Layout';
// import MainVideo from '../assets/gifs/horrendous.mp4';

// Add all video data here
const data = [
  {
    title: '',
    url: '',
    // etc.
  },
];

// https://github.com/gatsbyjs/gatsby/blob/master/examples/using-video/src/pages/index.js
const IndexPage = () => {
  return (
    <Layout>
      {/* <video style={{ width: `100%` }} autoPlay loop>
        <source src={MainVideo} type='video/mp4' />
      </video> */}
    </Layout>
  );
};

export default IndexPage;
