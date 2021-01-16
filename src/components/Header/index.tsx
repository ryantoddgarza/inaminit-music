import React, { ReactNode } from 'react';
import { HeaderOuter, HeaderInner } from './styled';

const Header = ({ children }: HeaderProps) => (
  <HeaderOuter>
    <HeaderInner>{children}</HeaderInner>
  </HeaderOuter>
);

export default Header;

type HeaderProps = {
  children: ReactNode;
};
