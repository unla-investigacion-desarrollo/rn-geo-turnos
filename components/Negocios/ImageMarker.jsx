import React from "react"
import {Image } from "react-native";

export default function ImageMarker (props) {

    const ImageSelected = () =>{
        switch (props.imageColor) {
            case 1:
            return <Image
                    source={require("../../assets/marcador-1.png")}
                    style={{ height: 35, width: 35 }}
                />; 
            case 2:
            return <Image
                    source={require("../../assets/marcador-2.png")}
                    style={{ height: 35, width: 35 }}
                />; 
            case 3:
            return <Image
                    source={require("../../assets/marcador-3.png")}
                    style={{ height: 35, width: 35 }}
                />; 
            default:return <Image
                    source={require("../../assets/marcador-1.png")}
                    style={{ height: 35, width: 35 }}
                />; 
  }
}
    return <ImageSelected/>
}