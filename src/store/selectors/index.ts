import { APP } from "@models";

export const selectDrawer = (state: APP.App = APP.AppInitialState) =>
  state.drawer;
export const selectModal = (state: APP.App = APP.AppInitialState) =>
  state.modal;
export const selectLoaders = (state: APP.App = APP.AppInitialState) =>
  state.loaders;
export const selectDarkMode = (state: APP.App = APP.AppInitialState) =>
  state.darkMode
export const selectLanguage = (state: APP.App = APP.AppInitialState) =>
  state.language