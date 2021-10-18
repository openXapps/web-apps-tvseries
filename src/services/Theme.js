import deepOrange from '@mui/material/colors/deepOrange';

export const themes = {
  light: {
    palette: {
      mode: 'light',
    },
  },
  dark: {
    palette: {
      mode: 'dark',
      primary: deepOrange,
      divider: deepOrange[900],
      // background: {
      //   default: deepOrange[900],
      //   paper: deepOrange[900],
      // },
    },
  },
}