import styled from 'styled-components';
import { layout, typography } from '@styles';
import SiteLogo from '@resources/images/logo.svg';

const { rem, unit, breakpoint, container } = layout;

export const HomeOuter = styled.div``;

export const HomeInner = styled.div`
  ${container}
  padding: 4rem 0;

  ${typography}
`;

export const Logo = styled(SiteLogo)`
  height: 6rem;
  max-width: 100%;
  margin-bottom: ${rem(unit(4))};
  fill: ${({ theme }) => theme.colors.fg};
`;

export const Copy = styled.article`
  position: relative;
  padding: 3rem 0;
  max-width: 40rem;

  @media (min-width: ${breakpoint.tablet}) {
    margin: 0 0 0 10%;
  }
`;
