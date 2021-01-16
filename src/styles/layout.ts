import { css } from 'styled-components';
import { layout } from './theme';

const {
  breakpoints: { phone, tablet, desktop, widescreen },
  base: { fontSize: baseFontSize, unit: baseUnit },
} = layout;

export const rem = (px: number) => `${px / baseFontSize}rem`;

export const unit = (n: number) => n * baseUnit;

export const container = css`
  width: 90%;
  margin: 0 auto;
`;

export const breakpoint = {
  phone: rem(phone),
  tablet: rem(tablet),
  desktop: rem(desktop),
  widescreen: rem(widescreen),
};
