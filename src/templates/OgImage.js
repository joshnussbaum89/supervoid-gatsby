import React from 'react';
import { Helmet } from 'react-helmet';

const OgImage = ({ pageContext }) => {
  console.log(pageContext);
  return (
    <Helmet>
      <meta property='og:image' content={pageContext.ogImage.path} />
      <meta property='og:image:width' content='400' />
      <meta property='og:image:height' content='50' />
    </Helmet>
  );
};

export default OgImage;
