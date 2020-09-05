import { actions } from "../actions/types";

const initialState = {
  dataNegocio: {
    capacidadPersonas: "14",
    cuit: "1234",
    telefono: "1535949261",
    depto: "1",
    calle: "Jacinto Calvo",
    numero: "628",
    emprendimiento: "1",
    latitude: -34.7922239,
    localidad: "1",
    longitude: -58.38193479999999,
    nombre: "Tecweel",
    piso: "333",
    provincia: "1",
    rubro: "1",
  },
  horarios: {
    horarios: [
      {
        diaSemana: 1,
        horaDesde1: "00:00",
        horaDesde2: "04:00",
        horaHasta1: "02:30",
        horaHasta2: "05:30",
      },
    ],
    tiempoAtencion: 5,
  },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actions.SET_DATA_NEGOCIO: //Dispatch desde newNegocioActions
      return {
        ...state,
        dataNegocio: action.payload,
      };
      break;
    case actions.SET_HORARIOS_NEGOCIO: //Dispatch desde newNegocioActions
      return {
        ...state,
        horarios: action.payload,
      };
      break;

    default:
      return state;
  }
}
