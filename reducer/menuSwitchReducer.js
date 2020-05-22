import { SWITCH_MENU } from "../actions/types";
import { VER_NEGOCIOS } from "../actions/menuOptions";

const initialState = {
  menu_option: VER_NEGOCIOS,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SWITCH_MENU:
      return {
        ...state,
        menu_option: action.payload,
      };
      break;
    default:
      return state;
  }
}
