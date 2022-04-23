import { style } from '@vanilla-extract/css';
import { vars } from '../../theme.css';

const linkStyle = style({
  color: vars.color.text.default,
  fontWeight: "bold",
  fontSize: '1em',
  verticalAlign: "5%",
  textDecoration: "none"
})

export const navStyle = style({
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0.5rem 0'
})

export const navLinkStyle = style([
  linkStyle
])

export const navItemListStyle = style({
  display: "flex",
})

export const navItemStyle = style({
  listStyleType: "none",
  marginRight: '1em',
})
