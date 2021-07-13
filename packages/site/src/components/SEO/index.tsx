import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useStaticQuery, graphql } from 'gatsby';

const SEO = ({
  title = '',
  description = '',
  author = '',
  image = '',
  type = '',
}: SEOProps) => {
  const {
    site: {
      siteMetadata: {
        siteUrl,
        siteName,
        titleTemplate,
        siteDescription,
        siteImage,
        siteAuthor,
        twitter,
      },
    },
  } = useStaticQuery(graphql`
    query SEOQuery {
      site {
        siteMetadata {
          siteUrl
          siteName
          titleTemplate
          siteDescription: description
          siteImage: image
          siteAuthor: author
          twitter
        }
      }
    }
  `);

  let seo = {
    siteName,
    title: title || siteName,
    type: type || 'website',
    description: description || siteDescription,
    image: image || `${siteUrl}/${siteImage}`,
    url: siteUrl,
    author: author || siteAuthor,
  };

  useEffect(() => {
    const isClient = window !== 'undefined';

    if (!isClient) {
      return;
    }

    const pathname = isClient && window.location.pathname;

    seo = {
      ...seo,
      url: `${siteUrl}${pathname}`,
    };
  });

  return (
    <Helmet
      title={seo.title}
      titleTemplate={seo.title === siteName ? null : titleTemplate}
    >
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="author" content={seo.author} />

      <meta property="og:title" content={seo.title} />
      <meta property="og:type" content={seo.type} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:site_name" content={seo.siteName} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={seo.url} />
      <meta property="twitter:title" content={seo.title} />
      <meta property="twitter:description" content={seo.description} />
      <meta property="twitter:image" content={seo.image} />
      <meta name="twitter:site" content={twitter} />
      <meta name="twitter:creator" content={twitter} />
    </Helmet>
  );
};

export default SEO;

type SEOProps = {
  title?: string;
  description?: string;
  author?: string;
  image?: string;
  type?: string;
};
