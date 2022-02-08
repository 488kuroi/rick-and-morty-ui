
import * as DRAWER from "./drawer.model";
import * as MODAL from "./modal.model";
import * as LOADERS from "./loaders.model";
import * as DARK_MODE from "./darkMode.model";
import * as LANGUAGE from "./language.model";

export interface App {
  drawer: DRAWER.Drawer;
  modal: MODAL.Modal;
  loaders: LOADERS.Loaders;
  darkMode: DARK_MODE.DarkMode;
  language: LANGUAGE.Language;
}

export const AppInitialState: App = {
  drawer: DRAWER.initialState,
  modal: MODAL.initialState,
  loaders: LOADERS.initialState,
  darkMode: DARK_MODE.initialState,
  language: LANGUAGE.initialState,
};
