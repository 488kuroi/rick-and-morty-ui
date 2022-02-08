import { createSlice } from '@reduxjs/toolkit'
import i18next from '@translations/index';
import { LANGUAGE } from '@models';
import CredentialsManager from '@src/core/utils/credentialsmanager';
const STORAGE_KEY = process.env.REACT_APP_STORAGE_KEY;

export const languageSlice = createSlice({
  name: 'darkMode',
  initialState: LANGUAGE.initialState,
  reducers: {
    setLanguage: (state, payload) => {
      
      i18next.changeLanguage(payload.payload,)

      const newState = {
        language: payload.payload,
      };
      CredentialsManager.storeItem(`${STORAGE_KEY}_language`, newState);
      return newState;
    }
  }
})

export const { setLanguage } = languageSlice.actions

export default languageSlice.reducer