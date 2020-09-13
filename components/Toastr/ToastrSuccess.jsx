import React from "react";
import { View, Text } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCheckCircle, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function ToastrSuccess({ message, cerrarToastr }) {
  return (
    <View
      style={{
        backgroundColor: "white",
        height: 70,
        width: "100%",
        borderRadius: 10,
        borderLeftWidth: 6,
        borderLeftColor: "#15c13d",
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
          height: 2,
          width: 1,
        },
      }}
    >
      <View style={{ flexDirection: "row", height: 70 }}>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <FontAwesomeIcon icon={faCheckCircle} size={30} color="#15c13d" />
        </View>
        <View
          style={{
            flex: 3,
            justifyContent: "center",
            alignItems: "left",
            width: "70%",
          }}
        >
          <Text style={{ color: "#15c13d", fontWeight: "bold" }}>
            {message}
          </Text>
        </View>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <TouchableOpacity onPress={cerrarToastr}>
            <FontAwesomeIcon icon={faTimes} size={17} color="#ccc" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
