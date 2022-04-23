import { createGlobalTheme } from '@vanilla-extract/css';

export const vars = createGlobalTheme(':root', {
  color: {
    primary: "#29A5FF",
    secondary: "#7DFFE8",
    text: {
      default: "#3C5C73",
      secondary: "#66879F"
    },
    background: {
      mint: "#E8FEFA"
    }
  },
  font: {
    body: 'Lato'
  }
});
