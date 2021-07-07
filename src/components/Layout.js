import React from 'react';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
import styled from 'styled-components';
import '../styles/font.css';

const LayoutStyles = styled.div`
  font-family: 'Bright Fate', sans-serif;
`;

const Layout = ({ children }) => {
  return (
    <LayoutStyles>
      <GlobalStyles />
      <Typography />
      {children}
    </LayoutStyles>
  );
};

export default Layout;
