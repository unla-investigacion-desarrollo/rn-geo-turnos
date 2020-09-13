import { actions } from "./types";

export function showToast(toastOptions) {
    return (dispatch) => {
      dispatch({
        type: actions.TOAST, 
        payload: toastOptions,
      });
    };
  }
  