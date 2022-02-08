import { createSlice } from '@reduxjs/toolkit'
import * as MODAL from '../../models/modal.model';

const getPayload = ( payload: any ) => {
  return {
    type: payload.type,
    ...payload.payload,
  } || {};
}


export const modalSlice = createSlice({
  name: 'modal',
  initialState: MODAL.initialState,
  reducers: {
    openModal: ( state, payload: any ) => {
      
      return {
        ...state,
        ...getPayload( payload ),
        isOpen: true,
      }

    },
    closeModal: ( state ) => {
      return MODAL.initialState
    }
  }
})

export const { openModal, closeModal } = modalSlice.actions

export default modalSlice.reducer