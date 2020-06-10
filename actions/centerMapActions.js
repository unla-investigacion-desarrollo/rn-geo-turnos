import {
  CENTER_MAP,
  SET_CENTER_MAP,
  CHANGE_CENTER_TO_SETTED,
} from "../actions/types";

export function centerMap(region) {
  return (dispatch) => {
    dispatch({
      type: CENTER_MAP, //Dispatch hacia centerMapReducer
      payload: region,
    });
  };
}

export function configureCenterMap(region) {
  return (dispatch) => {
    dispatch({
      type: SET_CENTER_MAP, //Dispatch hacia centerMapReducer
      payload: region,
    });
  };
}

export function centerMapToSetted() {
  return (dispatch) => {
    dispatch({
      type: CHANGE_CENTER_TO_SETTED, //Dispatch hacia centerMapReducer
    });
  };
}
