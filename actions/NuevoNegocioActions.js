import { actions } from "./types";

export function setDataNegocio(dataNegocio) {
  return (dispatch) => {
    dispatch({
      type: actions.SET_DATA_NEGOCIO,
      payload: dataNegocio,
    });
  };
}
export function setHorariosNegocio(horariosNegocio) {
  return (dispatch) => {
    dispatch({
      type: actions.SET_HORARIOS_NEGOCIO,
      payload: horariosNegocio,
    });
  };
}
