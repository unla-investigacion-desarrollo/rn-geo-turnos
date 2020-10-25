import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Login from "./Login/Login";
import Logged from "./Menu/Logged";
import Toastr from "./Toastr/Toastr";
import {apiCalls} from "../api/apiCalls"
import {configureCenterMap} from '../actions/centerMapActions'

function MenuSwitch() {
  const login = useSelector((state) => state.login);
  const access = useSelector((state) => state.access);
  const toast_info = useSelector((state) => state.toast);
  const dispatch = useDispatch();


  useEffect(() => {
    if (login.logged === 1 && access.token !== ""){
      apiCalls
      .getUbicacionPersona(access.idPersona, access.token)
      .then((response) => {
        dispatch(configureCenterMap({
            latitude: parseFloat(response.data.latitud),
            longitude: parseFloat(response.data.longitud),
            direccion: "",
        }))
      })
      .catch((res) => {
        console.log("Api GetUbicacion")
        console.log(res.message)
      });
    }
   
  })

  return (
    <>
      {login.logged === 1 && access.token !== "" ? <Logged /> : <Login />}
      {toast_info.message !== "" && <Toastr></Toastr>}
    </>
  );
}

export default MenuSwitch;
