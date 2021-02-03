import { css } from 'styled-components';

const global = css`
  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    font-family: 'Abhaya Libre';
    color: ${(props) => props.theme.colors.fg};
    background-color: ${(props) => props.theme.colors.bg};
  }

  a,
  button,
  label {
    cursor: pointer;
  }

  img {
    user-select: none;
  }
`;

export default global;
