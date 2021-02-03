import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { FooterOuter, FooterInner, Column, Logo } from './styled';

const Footer = () => {
  const {
    site: {
      siteMetadata: { siteName },
    },
  } = useStaticQuery(graphql`
    query FooterQuery {
      site {
        siteMetadata {
          siteName
        }
      }
    }
  `);

  return (
    <FooterOuter>
      <FooterInner>
        <Column>
          <Link to="/">{<Logo /> || siteName}</Link>
        </Column>
        <Column>make stuff</Column>
        <Column>
          {`© ${new Date().getFullYear()} ${siteName}, All Rights Reserved`}
        </Column>
      </FooterInner>
    </FooterOuter>
  );
};

export default Footer;
