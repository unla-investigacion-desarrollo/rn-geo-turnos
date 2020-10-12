import { combineReducers } from "redux";

import NuevoNegocioReducer from "./NuevoNegocioReducer";
import menuSwitchReducer from "./menuSwitchReducer";
import centerMapReducer from "./centerMapReducer";
import negociosListReducer from "./negociosListReducer";
import selectMarkerReducer from "./selectMarkerReducer";
import qrReaderReducer from "./qrReaderReducer";
import LoginReducer from "./LoginReducer";
import RegisterReducer from "./RegisterReducer";
import toastReducer from "./toastReducer";
import AccessReducer from "./AccessReducer";
import FilterReducer from "./FilterReducer"
//combino los states de los reducers en 1 solo para poder accederlo desde los componentes
export default combineReducers({
  nuevoNegocio: NuevoNegocioReducer,
  menu_option: menuSwitchReducer,
  center_map: centerMapReducer,
  lista_negocios: negociosListReducer,
  marker_seleccionado: selectMarkerReducer,
  qr_state: qrReaderReducer,
  login: LoginReducer,
  registro: RegisterReducer,
  toast: toastReducer,
  access: AccessReducer,
  filterNegocio: FilterReducer,
});
