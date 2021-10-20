// import deepOrange from '@mui/material/colors/deepOrange';
import grey from '@mui/material/colors/grey';

export const themeList = [
  { themeId: 'light', themeAlias: 'Light' },
  { themeId: 'dark', themeAlias: 'Dark' },
  // { themeId: 'concrete', themeAlias: 'Concrete Jungle' },
  // { themeId: 'monday', themeAlias: 'Monday Blues' },
  // { themeId: 'ocean', themeAlias: 'Ocean Breeze' },
];

export const themes = {
  light: {
    palette: {
      mode: 'light',
      background: {
        // default: deepOrange[900],
        paper: grey[100],
      },
    },
  },
  dark: {
    palette: {
      mode: 'dark',
      // primary: deepOrange,
      // divider: deepOrange[900],
      background: {
        // default: deepOrange[900],
        paper: grey[800],
      },
    },
  },
}