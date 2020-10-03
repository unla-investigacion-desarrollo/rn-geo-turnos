import { actions } from "../actions/types";

const initialState = {
  token: "",
  idPersona: 0,
};

export default function (state = initialState, action) {
  switch (action.type) {
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
