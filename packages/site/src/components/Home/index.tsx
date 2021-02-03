import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { SEO } from '@components';
import { HomeOuter, HomeInner, Copy, Logo } from './styled';

const Home = () => {
  const {
    site: {
      siteMetadata: { email },
    },
  } = useStaticQuery(graphql`
    query HomeQuery {
      site {
        siteMetadata {
          email
        }
      }
    }
  `);

  return (
    <>
      <SEO />
      <HomeOuter>
        <HomeInner>
          <Copy>
            <Logo />
            <p>Inaminit Music is an independent record label.</p>
            <p>
              <u>
                <a href={`mailto:${email}`}>Email</a>
              </u>
              {' for licensing, press, and radio.'}
            </p>
          </Copy>
        </HomeInner>
      </HomeOuter>
    </>
  );
};

export default Home;
