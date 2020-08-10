import { combineReducers } from "redux";

import NuevoNegocioReducer from "./NuevoNegocioReducer";
import menuSwitchReducer from "./menuSwitchReducer";
import centerMapReducer from "./centerMapReducer";
import negociosListReducer from "./negociosListReducer";
import selectMarkerReducer from "./selectMarkerReducer";
import qrReaderReducer from "./qrReaderReducer";

//combino los states de los reducers en 1 solo para poder accederlo desde los componentes
export default combineReducers({
  nuevoNegocio: NuevoNegocioReducer,
  menu_option: menuSwitchReducer,
  center_map: centerMapReducer,
  lista_negocios: negociosListReducer,
  marker_seleccionado: selectMarkerReducer,
  qr_state: qrReaderReducer,
});
