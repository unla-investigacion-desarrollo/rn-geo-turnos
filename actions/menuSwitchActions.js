import { SWITCH_MENU } from "./types";

export function switchMenu(menuOption) {
  return (dispatch) => {
    dispatch({
      type: SWITCH_MENU,
      payload: menuOption,
    });
  };
}
