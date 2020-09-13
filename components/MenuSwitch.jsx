import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Login from "./Login/Login";
import Logged from "./Menu/Logged";
import Toastr from "./Toastr/Toastr";

function MenuSwitch() {
  const login = useSelector((state) => state.login);
  const toast_info = useSelector((state) => state.toast);

  return (
    <>
      {login.logged === 1 ? <Logged /> : <Login />}
      {toast_info.message !== "" && <Toastr></Toastr>}
    </>
  );
}

export default MenuSwitch;
