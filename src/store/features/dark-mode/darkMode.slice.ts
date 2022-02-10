import { createSlice } from '@reduxjs/toolkit'
import { DARK_MODE } from '@models';
import StorageManager from '@src/core/utils/storage-manager';
const STORAGE_KEY = process.env.REACT_APP_STORAGE_KEY;

export const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState: DARK_MODE.initialState,
  reducers: {
    setIsDark: state => {
      const newState = {
        isDark: true
      };
      StorageManager.storeItem(`${STORAGE_KEY}_darkMode`, newState);
      return newState;
    },
    setIsLight: state => {
      const newState = {
        isDark: false
      };
      StorageManager.storeItem(`${STORAGE_KEY}_darkMode`, newState);
      return newState;
    },
    toggleDark: (state, payload) => {
      const newState = {
        isDark: payload.payload
      };
      StorageManager.storeItem(`${STORAGE_KEY}_darkMode`, newState);
      return newState;
    }
  }
})

export const { setIsDark, setIsLight, toggleDark } = darkModeSlice.actions

export default darkModeSlice.reducer