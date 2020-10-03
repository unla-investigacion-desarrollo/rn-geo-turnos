import { ADD_NEGOCIO, actions } from "../actions/types";

const initialState = {
  negocios: [],
  showInfoNegocio: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_NEGOCIO: //Dispatch desde NegociosListActions
      return {
        ...state,
        negocios: action.payload, //Agrego un local a la lista de locales
      };

    case actions.SHOW_INFO_NEGOCIOS: //Dispatch desde NegociosListActions
      return {
        ...state,
        showInfoNegocio: action.payload, //Agrego un local a la lista de locales
      };

    default:
      return state;
  }
}
