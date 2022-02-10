import { createSlice } from '@reduxjs/toolkit'
import i18next from '@translations/index';
import { LANGUAGE } from '@models';
import StorageManager from '@src/core/utils/storage-manager';
const STORAGE_KEY = process.env.REACT_APP_STORAGE_KEY;

export const languageSlice = createSlice({
  name: 'language',
  initialState: LANGUAGE.initialState,
  reducers: {
    setLanguage: (state, payload) => {
      
      i18next.changeLanguage(payload.payload,)

      const newState = {
        language: payload.payload,
      };
      StorageManager.storeItem(`${STORAGE_KEY}_language`, newState);
      return newState;
    }
  }
})

export const { setLanguage } = languageSlice.actions

export default languageSlice.reducer