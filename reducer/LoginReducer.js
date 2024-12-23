import { actions } from "../actions/types";

const initialState = {
  logged: 1,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actions.LOGGED:
      return {
        ...state,
        logged: action.payload,
      };
      break;

    case actions.CREDENTIALS:
      return {
        ...state,
        token: action.payload.token,
        idPersona: action.payload.idPersona,
      };
      break;

    default:
      return state;
  }
}
