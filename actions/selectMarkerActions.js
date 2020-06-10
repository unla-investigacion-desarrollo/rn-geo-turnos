import { SELECT_MARKER } from "./types";

export function selectMarker(marker) {
  return (dispatch) => {
    dispatch({
      type: SELECT_MARKER, //Dispatch hacia selectMarkerReducer
      payload: marker,
    });
  };
}
