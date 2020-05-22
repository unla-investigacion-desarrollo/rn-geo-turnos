import { NEW_NEGOCIO, CENTER_MAP } from "../actions/types";

const initialState = {
  region: {
    latitude: null,
    longitude: null,
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
    case CENTER_MAP:
      return {
        ...state,
        region: action.payload,
      };
      break;

    default:
      return state;
  }
}
