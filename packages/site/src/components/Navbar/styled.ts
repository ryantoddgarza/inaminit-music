import styled, { css } from 'styled-components';
import SiteLogo from '@resources/images/logo.svg';

export const NavbarOuter = styled.div`
  display: flex;
  align-items: center;
  height: 3rem;
`;

export const NavbarInner = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const headerItem = css`
  :not(:last-child) {
    margin-right: 1rem;
  }
`;

export const Title = styled.div`
  ${headerItem}
`;

export const Logo = styled(SiteLogo)`
  height: 1rem;
  fill: ${({ theme }) => theme.colors.fg};
`;

export const Nav = styled.nav`
  ${headerItem}
`;
