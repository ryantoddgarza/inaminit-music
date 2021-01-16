import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { NavbarOuter, NavbarInner, Nav, Title, Logo } from './styled';

const Navbar = () => {
  const {
    site: {
      siteMetadata: { siteName },
    },
  } = useStaticQuery(graphql`
    query NavbarQuery {
      site {
        siteMetadata {
          siteName
        }
      }
    }
  `);

  return (
    <NavbarOuter>
      <NavbarInner>
        <Title>
          <Link to="/">{<Logo /> || siteName}</Link>
        </Title>
        <Nav />
      </NavbarInner>
    </NavbarOuter>
  );
};

export default Navbar;
