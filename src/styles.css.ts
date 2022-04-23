import { style } from '@vanilla-extract/css';
import { vars } from './theme.css';

export const indexPageStyle = style({
  color: vars.color.text.default,
  maxWidth: 1280,
  width: "95%",
  margin: `0 auto`,
  lineHeight: 1.6,
  fontFamily: "Lato, -apple-system, Roboto, sans-serif",
})

export const pageHeroStyle = style({
  borderRadius: '0.25rem',
  padding: '1rem 2rem',
  margin: '1rem 0',
  backgroundColor: vars.color.background.mint,
})
