import React from 'react';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';

const Layout = ({ children }) => {
  return (
    <div>
      <GlobalStyles />
      <Typography />
      {children}
    </div>
  );
};

export default Layout;
