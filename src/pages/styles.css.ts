import { style } from '@vanilla-extract/css';
import { vars } from '../theme.css';

export const indexPageStyle = style({
  color: vars.color.text.default,
  padding: 96,
  fontFamily: "Lato, -apple-system, Roboto, sans-serif",
})
