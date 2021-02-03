import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { SEO } from '@components';
import { NotFoundOuter, NotFoundInner } from './styled';

const NotFound = () => {
  const {
    site: {
      siteMetadata: { email },
    },
  } = useStaticQuery(graphql`
    query NotFoundQuery {
      site {
        siteMetadata {
          email
        }
      }
    }
  `);

  return (
    <>
      <SEO title="Page not found" />
      <NotFoundOuter>
        <NotFoundInner>
          <h1>404</h1>
          <p>Page not found... the sadness.</p>
          <p>
            <u>
              <a href={`mailto:${email}`}>
                Let us know what you&apos;re looking for
              </a>
            </u>
          </p>
        </NotFoundInner>
      </NotFoundOuter>
    </>
  );
};

export default NotFound;
