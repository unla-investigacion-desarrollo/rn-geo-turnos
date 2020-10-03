import axios from "axios";
//import { getToken } from "../Utils/functions";

export default axios.create({
  baseURL: "http://192.168.1.56:8080/api/",
  timeout: 10000000,
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
    /* Authorization: getToken().then((token) => {
      return token;
    }),*/
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, GET, OPTIONS, PUT, DELETE",
    Accept: "application/json",
  },
});
