import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

// Components
import Layout from '../components/Layout';

const NotFoundPageStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 2rem 1rem;

  p {
    font-size: var(--medium);
    margin: 2rem 0;
  }

  button {
    background: var(--bg-primary);
    color: var(--accent-secondary);
    font-size: var(--small);
    border: 1px solid var(--accent-secondary);
    padding: 1rem;
    margin: 2rem 0;
    cursor: pointer;
  }

  button:hover {
    background: var(--accent-secondary);
    color: var(--bg-primary);
  }
`;

const NotFoundPage = () => {
  return (
    <Layout>
      <NotFoundPageStyles>
        <h2>Page Not Found</h2>
        <p>Looks like you've entered uncharted territory.</p>
        <Link to='/'>
          <button>Go Back</button>
        </Link>
      </NotFoundPageStyles>
    </Layout>
  );
};

export default NotFoundPage;
