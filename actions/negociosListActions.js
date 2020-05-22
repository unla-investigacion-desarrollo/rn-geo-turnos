import { ADD_NEGOCIO } from "./types";

export function addNegocio(negocio) {
  return (dispatch) => {
    dispatch({
      type: ADD_NEGOCIO,
      payload: negocio,
    });
  };
}
