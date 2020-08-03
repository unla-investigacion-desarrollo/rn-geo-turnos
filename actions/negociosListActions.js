import { ADD_NEGOCIO } from "./types";

export function addNegocios(negocio) {
  return (dispatch) => {
    dispatch({
      type: ADD_NEGOCIO, //Dispatch hacia negociosListReducer y newNegocioReducer
      payload: negocio,
    });
  };
}
