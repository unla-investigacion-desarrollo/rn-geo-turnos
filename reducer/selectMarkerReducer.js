import { SELECT_MARKER } from "../actions/types";

const initialState = {
  marcador_seleccionado: {
    latitude: null,
    longitude: null,
    direccion: "",
  },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SELECT_MARKER: //Dispatch desde selectMarkerActions
      return {
        ...state,
        marcador_seleccionado: action.payload,
      };
      break;
    default:
      return state;
  }
}
