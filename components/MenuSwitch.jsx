import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Login from "./Login/Login";
import Logged from "./Menu/Logged";

function MenuSwitch() {
  const login = useSelector((state) => state.login);
  return login.logged === 1 ? <Logged /> : <Login />;
}

export default MenuSwitch;
