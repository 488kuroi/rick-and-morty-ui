import { createSlice } from "@reduxjs/toolkit";
import * as LOADERS from "../../models/loaders.model";

export const loadersSlice = createSlice({
  name: "loaders",
  initialState: LOADERS.initialState,
  reducers: {
    showLoader(state, payload: any) {
      const newState: any = {
        ...state,
      };

      newState[payload.payload] = true;

      return newState;
    },
    hideLoader(state, payload: any) {
      const newState: any = {
        ...state,
      };

      newState[payload.payload] = false;

      return newState;
    },
    showAllLoaders: (state) => {
      return {
        showCircle: true,
        showLine: true,
      };
    },
    hideAllLoaders: (state) => {
      return LOADERS.initialState;
    },
  },
});

export const { showLoader, hideLoader, showAllLoaders, hideAllLoaders } =
  loadersSlice.actions;

export default loadersSlice.reducer;
