import { actions } from "./types";

export function setRegisterData(registerData) {
  return (dispatch) => {
    dispatch({
      type: actions.SET_REGISTER_DATA, //Dispatch hacia centerMapReducer
      payload: registerData,
    });
  };
}
