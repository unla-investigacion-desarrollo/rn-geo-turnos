import React, {useEffect} from "react";
import { useSelector } from "react-redux";
import Login from "./Login/Login";
import Logged from "./Menu/Logged";
import Toast from 'react-native-toast-message'



function MenuSwitch() {
  const login = useSelector((state) => state.login);
  const toast_info = useSelector((state) => state.toast);


  useEffect(() => {
    Toast.show({
      text1: toast_info.text1,
      text2: toast_info.text2,
      type: toast_info.type,
      position: "bottom"
    })
  }, [toast_info]);

  return login.logged === 1 ? <Logged /> : <Login />;
}

export default MenuSwitch;
