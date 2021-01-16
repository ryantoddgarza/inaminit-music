import styled from 'styled-components';
import { layout, typography } from '@styles';

const { rem, unit, breakpoint, container } = layout;

export const HomeOuter = styled.div``;

export const HomeInner = styled.div`
  ${container}
  padding: 4rem 0;

  ${typography}
`;

export const Copy = styled.article`
  position: relative;
  padding: 3rem 0;
  max-width: 40rem;

  @media (min-width: ${breakpoint.tablet}) {
    margin: 0 0 0 10%;
  }

  h1 {
    margin-bottom: ${rem(unit(6))};
  }
`;
