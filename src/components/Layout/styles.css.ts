import { style } from '@vanilla-extract/css';
import { vars } from '../../theme.css';

export const layoutStyle = style({
  color: vars.color.text.default,
  maxWidth: 1280,
  width: "95%",
  margin: `0 auto`,
  lineHeight: 1.6,
  fontFamily: "Lato, -apple-system, Roboto, sans-serif",
})
