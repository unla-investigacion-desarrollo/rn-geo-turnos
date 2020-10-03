import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import MenuSwitch from "./MenuSwitch";
import { setCredentials } from "../actions/AccessActions";
import { getCredentials } from "../Utils/functions";
import { setTokenAxios } from "../api/api";

function Init() {
  const dispatch = useDispatch();

  useEffect(() => {
    getCredentials().then((credentials) => {
      if (credentials !== "") {
        setTokenAxios(credentials.token);
        dispatch(setCredentials(credentials));
      }
    });
  });

  return <MenuSwitch />;
}

export default Init;
