import styled, { createGlobalStyle } from 'styled-components';
import { reset, global } from '@styles';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  ${global}
`;

export const SiteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  main {
    flex: 1;
  }
`;
