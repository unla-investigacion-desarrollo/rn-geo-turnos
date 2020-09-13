import React from "react";
import { View, Text } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { TouchableOpacity } from "react-native";

export default function ToastrInfo({ message, cerrarToastr }) {
  return (
    <View
      style={{
        backgroundColor: "white",
        height: 70,
        width: "100%",
        borderRadius: 10,
        elevation: 20,
        borderLeftWidth: 6,
        borderLeftColor: "#19d0e1",
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
          <FontAwesomeIcon icon={faInfoCircle} size={30} color="#19d0e1" />
        </View>
        <View
          style={{
            flex: 3,
            justifyContent: "center",

            width: "70%",
          }}
        >
          <Text style={{ color: "#19d0e1", fontWeight: "bold" }}>
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
