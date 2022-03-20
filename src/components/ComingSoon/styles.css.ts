import { style } from '@vanilla-extract/css';
import { vars } from '../../theme.css';

export const comingSoonStyle = style({
  color: vars.color.text.secondary,
  margin: '8em 0 8em'
})

export const comingSoonImgStyle = style({
  maxWidth: '100%'
})

export const comingSoonH1Style = style({
  textAlign: 'center'
})
