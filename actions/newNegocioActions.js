import { NEW_NEGOCIO } from "./types";

export function newNegocio(negocio) {
  return (dispatch) => {
    dispatch({
      type: NEW_NEGOCIO,
      payload: negocio,
    });
  };
}
