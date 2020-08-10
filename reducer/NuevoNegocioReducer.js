import { actions } from "../actions/types";

const initialState = {
  dataNegocio: {},
  horarios: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actions.SET_DATA_NEGOCIO: //Dispatch desde newNegocioActions
      return {
        ...state,
        dataNegocio: action.payload,
      };
      break;
    case actions.SET_HORARIOS_NEGOCIO: //Dispatch desde newNegocioActions
      return {
        ...state,
        horarios: action.payload,
      };
      break;

    default:
      return state;
  }
}
