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

export const articleGridStyle = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gridGap: '1rem',
  fontSize: '0.8rem'
})

export const articleGridTitle = style({
  color: vars.color.primary,
  lineClamp: 1,
  marginBottom: '0.2rem'
})

export const articleGridDescription = style({
  display: '-webkit-box',
  margin: '0.5rem 0',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 5,
  overflow: 'hidden',
})

export const collectionTitle = style({
  marginBottom: '0.5rem',
  color: vars.color.primary,
  fontSize: '2rem',
})

export const articleLink = style({
  color: vars.color.primary,
  textDecoration: 'none',
  ':hover': {
    textDecoration: 'underline',
  },
})

export const artlcePublisherStyle = style({
  color: vars.color.text.secondary
})
