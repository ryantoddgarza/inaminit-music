import styled from 'styled-components';
import { layout, font } from '@styles';
import SiteLogo from '@resources/images/logo.svg';

export const FooterOuter = styled.footer`
  overflow: hidden;
  z-index: 5000;
`;

export const FooterInner = styled.div`
  ${layout.container}
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  margin: 1rem auto;
`;

export const Column = styled.div`
  ${font.small};
`;

export const Logo = styled(SiteLogo)`
  height: 0.875rem;
  fill: ${({ theme }) => theme.colors.fg};
`;
