import { NEW_NEGOCIO, CENTER_MAP, ADD_NEGOCIO } from "../actions/types";

const initialState = {
  negocio: {
    latitude: null,
    longitude: null,
    direccion: "",
  },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case NEW_NEGOCIO:
      return {
        ...state,
        negocio: action.payload,
        region: {
          latitude: action.payload.latitude,
          longitude: action.payload.longitude,
        },
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
