import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const SEO = ({ siteDescription, lang, meta, siteTitle }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            url
            keywords
            image
          }
        }
      }
    `
  );

  const { title, description, url, keywords, image } = site.siteMetadata;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={siteTitle || title}
      titleTemplate={`%s | ${title}`}
      meta={[
        {
          name: `description`,
          content: siteDescription || description,
        },
        {
          name: `keywords`,
          content: keywords,
        },

        // Open Graph data
        {
          property: `og:title`,
          content: siteTitle || title,
        },
        {
          property: `og:url`,
          content: url,
        },
        {
          property: `og:type`,
          content: `company`,
        },
        {
          property: `og:description`,
          content: siteDescription || description,
        },
        {
          property: `og:image`,
          content: `${url}${image}`,
        },

        // Twitter card
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:title`,
          content: siteTitle || title,
        },
        {
          name: `twitter:description`,
          content: siteDescription || description,
        },
        {
          name: `twitter:url`,
          content: url,
        },
        {
          name: `twitter:image`,
          content: `${url}${image}`,
        },
      ].concat(meta)}
    />
  );
};

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  siteDescription: ``,
};

SEO.propTypes = {
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  siteTitle: PropTypes.string,
  siteDescription: PropTypes.string,
};

export default SEO;
