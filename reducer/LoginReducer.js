import { actions } from "../actions/types";

const initialState = {
  logged: 0,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actions.LOGGED:
      return {
        ...state,
        logged: action.payload,
      };
      break;

    default:
      return state;
  }
}
