import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { Header, Footer, Navbar } from '@components';
import { theme } from '@styles';
import { GlobalStyle, SiteWrapper } from './styled';

const Layout = ({ children }: LayoutProps) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <SiteWrapper>
      <Header>
        <Navbar />
      </Header>
      <main>{children}</main>
      <Footer />
    </SiteWrapper>
  </ThemeProvider>
);

export default Layout;

type LayoutProps = {
  children: ReactNode;
};
