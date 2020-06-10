import { QR_READ, QR_PERMISSIONS } from "../actions/types";

const initialState = {
  hasPermission: null,
  loadingPermissions: true,

  data: [],
  url: "https://pokeapi.co/api/v2/pokemon/",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case QR_READ: //Dispath desde qrReaderActions
      return {
        ...state,
        data: action.payload,
      };
      break;
    case QR_PERMISSIONS: //Dispath desde qrReaderActions
      return {
        ...state,
        hasPermission: action.payload.hasPermission,
        loadingPermissions: action.payload.loadingPermissions,
      };
      break;

    default:
      return state;
  }
}
