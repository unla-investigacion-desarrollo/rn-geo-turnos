import React, { useEffect } from "react";
import { View } from "react-native";
import ToastrError from "./ToastrError";
import ToastrInfo from "./ToastrInfo";
import ToastrSuccess from "./ToastrSuccess";
import ToastrWarning from "./ToastrWarning";
import { useDispatch, useSelector } from "react-redux";
import { showToast } from "../../actions/toastActions";

export default function Toastr() {
  const toastr = useSelector((state) => state.toast);
  const dispatch = useDispatch();

  useEffect(() => {
    if (toastr.visibilityTime > 0) {
      setTimeout(() => {
        dispatch(
          showToast({
            message: "",
            type: "success",
            visibilityTime: 20000,
          })
        );
      }, toastr.visibilityTime);
    }
  });

  const cerrarToastr = () => {
    dispatch(
      showToast({
        message: "",
        type: "success",
        visibilityTime: 20000,
      })
    );
  };

  const toastrType = () => {
    switch (toastr.type) {
      case "success":
        return (
          <ToastrSuccess message={toastr.message} cerrarToastr={cerrarToastr} />
        );
      case "error":
        return (
          <ToastrError message={toastr.message} cerrarToastr={cerrarToastr} />
        );
      case "info":
        return (
          <ToastrInfo message={toastr.message} cerrarToastr={cerrarToastr} />
        );
      case "warning":
        return (
          <ToastrWarning message={toastr.message} cerrarToastr={cerrarToastr} />
        );
    }
  };

  return (
    <View
      style={{
        width: "100%",
        position: "absolute",
        top: "15%",
        elevation: 100,
        zIndex: 100,
        padding: 10,
      }}
    >
      {toastrType()}
    </View>
  );
}
