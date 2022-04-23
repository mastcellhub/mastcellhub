import { style } from '@vanilla-extract/css';
import { vars } from '../../theme.css';

export const comingSoonStyle = style({
  color: vars.color.text.secondary,
  margin: '2rem 0',
  textAlign: 'center'
})

export const comingSoonImgStyle = style({
  maxWidth: '60%'
})

export const comingSoonH1Style = style({
  textAlign: 'center'
})
