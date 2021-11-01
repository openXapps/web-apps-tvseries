/**
 * Local storage object types
 */
 export const storageObjects = {
  settings: 'gd-tv-settings',
  favourites: 'gd-tv-favourites'
};

/**
 * Default data for app local storage
 */
 export const defaultStorage = {
  // gd-tv-settings
  settings: {
    appVersion: '1.0',
    theme: 'auto',
  }
};

/**
 * Write local storage object
 * @param {string} item Local storage item to write
 * @param {any} data Local storage object to write
 */
export const saveLocalStorage = (item, data) => {
  try {
    localStorage.setItem(item, JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
};

/**
 * Get local storage object
 * @param {string} item Local storage item to get
 * @returns Returns an object {statusOk: boolean, data: any}
 */
export const getLocalStorage = (item) => {
  let result = {
    statusOK: false,
    data: defaultStorage[item],
  };
  try {
    const response = JSON.parse(localStorage.getItem(storageObjects[item]));
    if (response) {
      result = {
        statusOK: true,
        data: response
      };
    } else {
      throw new Error('No items found in localStorage');
    }
  } catch (err) {
    // Life goes on ...
    // console.log(err);
  }
  return result;
};

/**
* Write initial storage on first time usage
 */
export const initialUse = () => {
  const settings = getLocalStorage('settings');

  // On first use
  if (!settings.statusOK) saveLocalStorage(storageObjects.settings, defaultStorage.settings);
};