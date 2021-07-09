import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const SEO = ({ description, lang, meta, title }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
            keywords
            image
          }
        }
      }
    `
  );

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title || site.siteMetadata.title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: description || site.siteMetadata.description,
        },
        {
          name: `keywords`,
          content: site.siteMetadata.keywords,
        },

        // Open Graph data
        {
          property: `og:title`,
          content: title || site.siteMetadata.title,
        },
        {
          property: `og:url`,
          content: `https://www.supervoid.tv`,
        },
        {
          property: `og:type`,
          content: `company`,
        },
        {
          property: `og:description`,
          content: description || site.siteMetadata.description,
        },
        {
          property: `og:image`,
          // TODO:
          // This needs to be changed to a valid picture
          content: `https://supervoidgatsbymain.gatsbyjs.io${site.siteMetadata.image}`,
        },

        // Twitter card
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:title`,
          content: title || site.siteMetadata.title,
        },
        {
          name: `twitter:description`,
          content: description || site.siteMetadata.description,
        },
        {
          name: `twitter:url`,
          content: `https://www.supervoid.tv`,
        },
        {
          name: `twitter:image`,
          // TODO:
          // This needs to be changed to a valid picture
          content: `https://supervoidgatsbymain.gatsbyjs.io${site.siteMetadata.image}`,
        },
      ].concat(meta)}
    />
  );
};

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

export default SEO;
