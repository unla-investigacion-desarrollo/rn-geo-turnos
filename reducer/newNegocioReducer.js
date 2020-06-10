import { NEW_NEGOCIO, ADD_NEGOCIO, DELETE_NEGOCIO } from "../actions/types";

const initialState = {
  negocio: {
    latitude: null,
    longitude: null,
    direccion: "",
  },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case NEW_NEGOCIO: //Dispatch desde newNegocioActions
      return {
        ...state,
        negocio: action.payload,
      };
      break;
    case DELETE_NEGOCIO: //Dispatch desde newNegocioActions
      return {
        ...state,
        negocio: action.payload,
      };
      break;
    case ADD_NEGOCIO: //Al agregar un negocio limpio el negocio que estaba dando de alta
      return {
        ...state,
        negocio: { latitude: null, longitude: null, direccion: "" },
      };
      break;
    default:
      return state;
  }
}
