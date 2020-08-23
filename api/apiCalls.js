import api from './api';

function postArticulo(parameters){
    return api.post('/articulo', parameters)
}

function postAltaUsuario(parameters){
    return api.post('/fisica', parameters)
}

export const apiCalls = {
    postArticulo,
    postAltaUsuario,
}