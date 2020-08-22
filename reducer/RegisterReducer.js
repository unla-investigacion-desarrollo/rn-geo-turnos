import { actions } from "../actions/types";

const initialState = {
  registerData: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actions.SET_REGISTER_DATA:
      return {
        ...state,
        registerData: action.payload,
      };

    default:
      return state;
  }
}
