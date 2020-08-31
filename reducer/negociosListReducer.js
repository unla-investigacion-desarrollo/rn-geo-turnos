import { ADD_NEGOCIO, actions } from "../actions/types";

const initialState = {
  negocios: [
    {
      latitude: -34.7922239,
      longitude: -58.38193479999999,
      direccion: "628 ADA, Jacinto Calvo, José Marmol",
    },
  ],
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
