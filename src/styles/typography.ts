import { css } from 'styled-components';
import { rem, unit } from './layout';
import { colors } from './theme';

export const config = {
  h1: {
    size: unit(12),
    margin: unit(6),
  },
  h2: {
    size: unit(10),
    margin: unit(4),
  },
  h3: {
    size: unit(8),
    margin: unit(4),
  },
  h4: {
    size: unit(7),
    margin: unit(4),
  },
  h5: {
    size: unit(6),
    margin: unit(4),
  },
  h6: {
    size: unit(5),
    margin: unit(6),
  },
  p: {
    size: unit(5),
    margin: unit(4),
  },
  small: {
    size: unit(4),
  },
};

export const h1 = css`
  font-size: ${rem(config.h1.size)};
  line-height: ${rem(config.h1.size)};
  margin-top: ${rem(config.h1.margin)};
`;

export const h2 = css`
  font-size: ${rem(config.h2.size)};
  line-height: ${rem(config.h2.size)};
  margin-top: ${rem(config.h2.margin)};
`;

export const h3 = css`
  font-size: ${rem(config.h3.size)};
  line-height: ${rem(config.h3.size)};
  margin-top: ${rem(config.h3.margin)};
`;

export const h4 = css`
  font-size: ${rem(config.h4.size)};
  line-height: ${rem(config.h4.size)};
  margin-top: ${rem(config.h4.margin)};
`;

export const h5 = css`
  font-size: ${rem(config.h5.size)};
  line-height: ${rem(config.h5.size)};
  margin-top: ${rem(config.h5.margin)};
`;

export const h6 = css`
  font-size: ${rem(config.h6.size)};
  line-height: ${rem(config.h6.size)};
  margin-top: ${rem(config.h6.margin)};
`;

export const p = css`
  font-size: ${rem(config.p.size)};
  line-height: ${rem(config.p.size + unit(2))};
  margin-top: ${rem(config.p.margin)};
`;

export const small = css`
  font-size: ${rem(config.small.size)};
`;

export const a = css`
  &:hover {
    color: ${colors.fgDarker};
  }
`;

export const u = css`
  border-bottom: 1px solid ${colors.fgLighter};
`;

const typography = css`
  h1 {
    ${h1}
  }

  h2 {
    ${h2}
  }

  h3 {
    ${h3}
  }

  h4 {
    ${h4}
  }

  h5 {
    ${h5}
  }

  h6 {
    ${h6}
  }

  p {
    ${p}
  }

  small {
    ${small}
  }

  a {
    ${a}
  }

  u {
    ${u}
  }
`;

export default typography;
