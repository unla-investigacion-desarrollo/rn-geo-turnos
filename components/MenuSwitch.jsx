import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Login from "./Login/Login";
import Logged from "./Menu/Logged";
import Toastr from "./Toastr/Toastr";
import { Text } from "react-native";
import { setCredentials } from "../actions/AccessActions";
import { getCredentials } from "../Utils/functions";

function MenuSwitch() {
  const login = useSelector((state) => state.login);
  const access = useSelector((state) => state.access);
  const toast_info = useSelector((state) => state.toast);
  const [token, setToken] = useState("");
  const dispatch = useDispatch();

  return (
    <>
      {login.logged === 1 && access.token !== "" ? <Logged /> : <Login />}
      {toast_info.message !== "" && <Toastr></Toastr>}
    </>
  );
}

export default MenuSwitch;
