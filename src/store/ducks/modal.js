import { createAction, createReducer } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  openModal: true,
};

export const openModalAction = createAction('MODAL_OPEN_ACTION');
export const closeModalAction = createAction('MODAL_CLOSE_ACTION');

export default createReducer(INITIAL_STATE, {
  [openModalAction.type]: (state) => {
    return {
      ...state,
      openModal: true,
    };
  },
  [closeModalAction.type]: (state) => {
    return {
      ...state,
      openModal: false,
    };
  },
});
