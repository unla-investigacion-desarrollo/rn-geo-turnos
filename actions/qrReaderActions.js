import { QR_READ, QR_PERMISSIONS } from "./types";

export function dataRead(data_read) {
  return (dispatch) => {
    dispatch({
      type: QR_READ, //Dispath hacia qrReaderReducer
      payload: data_read,
    });
  };
}

export function qrPermissions(qr_permissions) {
  return (dispatch) => {
    dispatch({
      type: QR_PERMISSIONS, //Dispath hacia qrReaderReducer
      payload: qr_permissions,
    });
  };
}
