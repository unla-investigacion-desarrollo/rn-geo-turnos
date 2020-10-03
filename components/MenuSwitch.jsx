import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Login from "./Login/Login";
import Logged from "./Menu/Logged";
import Toastr from "./Toastr/Toastr";
import { getToken } from "../Utils/functions";

function MenuSwitch() {
  const login = useSelector((state) => state.login);
  const toast_info = useSelector((state) => state.toast);
  const [token, setToken] = useState("");

  useEffect(() => {
    let pepe = getToken().then();

    console.log(pepe);
  });

  return (
    <>
      {login.logged === 1 ? <Logged /> : <Login />}
      {toast_info.message !== "" && <Toastr></Toastr>}
    </>
  );
}

export default MenuSwitch;
