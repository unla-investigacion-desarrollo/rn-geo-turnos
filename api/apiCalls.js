import api from './api';

function postArticulo(parameters){
    return api.post('/articulo', parameters)
}

export const apiCalls = {
    postArticulo,
}