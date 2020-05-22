import { ADD_NEGOCIO } from "../actions/types";

const initialState = {
  negocios: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_NEGOCIO:
      return {
        ...state,
        negocios: agregarNegocio(state.negocios, action.payload),
      };
      break;

    default:
      return state;
  }
}
function agregarNegocio(listNegocios, nuevo_negocio) {
  const foundIndex = listNegocios.findIndex(
    (negocio) =>
      negocio.latitude === nuevo_negocio.latitude &&
      negocio.longitude === nuevo_negocio.longitude
  );

  if (foundIndex === -1) {
    return [...listNegocios, nuevo_negocio];
  } else {
    return [...listNegocios];
  }
}
