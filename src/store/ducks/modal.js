import { createAction, createReducer } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  openModal: false,
  contentModal:null
};

export const openModalAction = createAction('MODAL_OPEN_ACTION');
export const closeModalAction = createAction('MODAL_CLOSE_ACTION');

export default createReducer(INITIAL_STATE, {
  [openModalAction.type]: (state,{payload}) => {
    return {
      ...state,
      openModal: true,
      contentModal:payload
    };
  },
  [closeModalAction.type]: (state) => {
    return {
      ...state,
      openModal: false,
    };
  },
});
