import { actions } from "./types";

export function setNegocioFilters(filters) {
  return (dispatch) => {
    dispatch({
      type: actions.SET_NEGOCIO_FILTERS, 
      payload: filters,
    });
  };
}
