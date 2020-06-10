import { NEW_NEGOCIO, DELETE_NEGOCIO } from "./types";

export function newNegocio(negocio) {
  return (dispatch) => {
    dispatch({
      type: NEW_NEGOCIO, //Dispatch hacia centerMapReducer y newNegocioReducer
      payload: negocio,
    });
  };
}
export function deleteNegocio(negocio) {
  return (dispatch) => {
    dispatch({
      type: DELETE_NEGOCIO, //Dispatch hacia  newNegocioReducer
      payload: negocio,
    });
  };
}
