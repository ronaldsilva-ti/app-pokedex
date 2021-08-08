import { createAction, createReducer } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  loading:false,
  error:false,
  pokeList:[]
};

export const pokeListAction = createAction('MODAL_OPEN_ACTION');
export const pokeListActionSuccess = createAction('MODAL_OPEN_ACTION');
export const pokeListActionError = createAction('MODAL_OPEN_ACTION');

export default createReducer(INITIAL_STATE, {
  [pokeListAction.type]: (state) => {
    return {
      ...state,
      loading:true
    };
  },
  [pokeListActionSuccess.type]: (state, payload) => {
    return {
      ...state,
      loading:false,
      pokeList:[payload]
    };
  },
  [pokeListActionError.type]:(state,payload) => {
    return {
      ...state,
      loading:false,
      error:true
    };
  }
});
