import axios from "axios";
import { baseUrl } from "../Utils/constantes"
let token = "";

export const setTokenAxios = (tokenCredential) => {
  token = tokenCredential;
};

export default axios.create({
  baseURL: baseUrl, //Gonza
  //baseURL: "http://192.168.0.3:8080/reactivar/api/",//Lucio
  timeout: 10000000,
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
});
