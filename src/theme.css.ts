import { createGlobalTheme } from '@vanilla-extract/css';

export const vars = createGlobalTheme(':root', {
  color: {
    primary: "#29A5FF",
    secondary: "#7DFFE8",
    text: {
      default: "#3C5C73",
      secondary: "#66879F",
      green: "#246464"
    },
    background: {
      white: "#F8F8F8",
      mint: "#E8FEFA"
    }
  },
  font: {
    body: 'Lato'
  }
});
