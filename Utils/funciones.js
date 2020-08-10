export const validarCamposDatosNegocio = (object) => {
  if (object.nombre === "") {
    return false;
  }
  if (object.cuit === "") {
    return false;
  }
  if (object.direccion === "") {
    return false;
  }
  if (object.rubro === 0) {
    return false;
  }
  if (object.localidad === 0) {
    return false;
  }
  if (object.provincia === 0) {
    return false;
  }
  if (object.latitude === 0) {
    return false;
  }
  if (object.longitude === 0) {
    return false;
  }
  if (object.capacidadPersonas === 0) {
    return false;
  }
  return true;
};
