import { combineReducers } from "redux";

import newNegocioReducer from "./newNegocioReducer";
import menuSwitchReducer from "./menuSwitchReducer";
import centerMapReducer from "./centerMapReducer";
import negociosListReducer from "./negociosListReducer";
import selectMarkerReducer from "./selectMarkerReducer";

export default combineReducers({
  negocio_reducer: newNegocioReducer,
  menu_option: menuSwitchReducer,
  center_map: centerMapReducer,
  lista_negocios: negociosListReducer,
  marker_seleccionado: selectMarkerReducer,
});
