import {
  NEW_NEGOCIO,
  CENTER_MAP,
  CHANGE_CENTER_TO_SETTED,
  SET_CENTER_MAP,
} from "../actions/types";

const initialState = {
  region: {
    latitude: -34.7922239,
    longitude: -58.38193479999999,
    direccion: "",
  },
  region_setted: {
    //Posicion configurada en el menu de posicion del usuario NO CAMBIARLO
    latitude: -34.7922239,
    longitude: -58.38193479999999,
    direccion: "",
  },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case NEW_NEGOCIO:
      return {
        ...state,
        region: {
          latitude: action.payload.latitude,
          longitude: action.payload.longitude,
        },
      };
      break;
    case CENTER_MAP: //Dispatch desde centerMapActions
      return {
        ...state,
        region: action.payload,
      };
      break;
    case SET_CENTER_MAP: //Dispatch desde centerMapActions
      return {
        ...state,
        region: action.payload,
        region_setted: action.payload,
      };
      break;
    case CHANGE_CENTER_TO_SETTED: //Dispatch desde centerMapActions
      return {
        ...state,
        region: state.region_setted,
      };
      break;

    default:
      return state;
  }
}
