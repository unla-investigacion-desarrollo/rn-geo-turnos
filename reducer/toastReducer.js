import { actions } from "../actions/types";

const initialState = {
  text1:"",
  text2:"",
  type:"error",
  visibilityTime:2000
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actions.TOAST:
      return {
        ...state,
        text1: action.payload.text1,
        text2: action.payload.text2,
        type: action.payload.type,
        visibilityTime: action.payload.visibilityTime,
      };

    default:
      return state;
  }
}