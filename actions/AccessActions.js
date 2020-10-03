import { actions } from "./types";

export function setCredentials(credentials) {
  return (dispatch) => {
    dispatch({
      type: actions.CREDENTIALS, //Dispatch hacia centerMapReducer
      payload: credentials,
    });
  };
}
