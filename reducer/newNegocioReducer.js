import { NEW_NEGOCIO, CENTER_MAP } from "../actions/types";

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

    default:
      return state;
  }
}
