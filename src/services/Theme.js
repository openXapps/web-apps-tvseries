import grey from '@mui/material/colors/grey';

import { getLocalStorage, storageObjects, defaultStorage } from '../services/Storage';

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
        paper: grey[100],
      },
    },
  },
  dark: {
    palette: {
      mode: 'dark',
      background: {
        paper: grey[800],
      },
    },
  },
};

/**
 * 
 */
export const getTheme = () => {
  const settings = getLocalStorage('settings');
  let currentTheme = defaultStorage.settings.theme;
};