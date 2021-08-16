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
            siteUrl
            keywords
            image
            author
          }
        }
      }
    `
  );

  const { title, description, siteUrl, keywords, image, author } =
    site.siteMetadata;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={siteTitle || title}
      titleTemplate={siteTitle || title}
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
          content: siteUrl,
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
          content: `${siteUrl}${image}`,
        },

        // Twitter card
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: author,
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
          content: siteUrl,
        },
        {
          name: `twitter:image`,
          content: `${siteUrl}${image}`,
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
