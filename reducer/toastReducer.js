import { actions } from "../actions/types";

const initialState = {
  message: "Toastr Creado para ReactivAR",
  type: "error",
  visibilityTime: 0,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actions.TOAST:
      return {
        ...state,
        message: action.payload.message,
        type: action.payload.type,
        visibilityTime: action.payload.visibilityTime,
      };

    default:
      return state;
  }
}
