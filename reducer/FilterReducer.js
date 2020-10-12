import {
    actions
  } from "../actions/types";
  
  const initialState = {
    km: 3,
    rubro: 0
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
        case actions.SET_NEGOCIO_FILTERS:
            return {
                ...state,
                km: action.payload.km,
                rubro: action.payload.rubro
              };
  
      default:
        return state;
    }
  }
  