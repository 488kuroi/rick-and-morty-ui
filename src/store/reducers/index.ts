import { combineReducers, configureStore } from "@reduxjs/toolkit";

import drawerReducer from "@features/drawer/drawer.slice";
import modalReducer from "@features/modal/modal.slice";
import loadersReducer from "@features/loaders/loaders.slice";
import darkModeReducer from "@features/dark-mode/darkMode.slice";
import languageReducer from "@features/language/language.slice";

export const RootReducer = combineReducers({
  drawer: drawerReducer,
  modal: modalReducer,
  loaders: loadersReducer,
  darkMode: darkModeReducer,
  language: languageReducer,
});

export const store = configureStore({
  reducer: RootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
