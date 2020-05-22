import { CENTER_MAP } from "../actions/types";

export function centerMap(region) {
  return (dispatch) => {
    dispatch({
      type: CENTER_MAP,
      payload: region,
    });
  };
}
