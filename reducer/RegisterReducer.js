import { actions } from "../actions/types";

const initialState = {
  registerData: {
    documento: "",
    nroTramite: "",
    nombre: "",
    apellido: "",
    cuil: "",
    password: "",
    direccion: "",
    piso: "",
    depto: "",
    localidad: 0,
    provincia: 0,
    latitude: 0,
    longitude: 0,
  },
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
