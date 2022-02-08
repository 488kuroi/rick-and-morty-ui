import { createSlice } from '@reduxjs/toolkit'
import * as DRAWER from '../../models/drawer.model';

export const DrawerSlice = createSlice({
  name: 'drawer',
  initialState: DRAWER.initialState,
  reducers: {
    toggleDrawer: ( _state: any, payload: any ) => ( { isOpen: payload.payload } )
  }
})

export const { toggleDrawer } = DrawerSlice.actions

export default DrawerSlice.reducer