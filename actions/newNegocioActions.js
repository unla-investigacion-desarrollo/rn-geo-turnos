import { NEW_NEGOCIO, DELETE_NEGOCIO } from "./types";

export function newNegocio(negocio) {
  return (dispatch) => {
    dispatch({
      type: NEW_NEGOCIO,
      payload: negocio,
    });
  };
}
export function deleteNegocio(negocio) {
  return (dispatch) => {
    dispatch({
      type: DELETE_NEGOCIO,
      payload: negocio,
    });
  };
}
