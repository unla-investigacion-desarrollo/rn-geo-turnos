import React, { useState, useEffect} from "react";
import { StyleSheet, View, TouchableOpacity, Text, Slider, Button } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import * as Print from 'expo-print';

import QRCode from 'react-native-qrcode-svg';

export default class Pdf extends React.Component {
    constructor(props) {
        super(props)
        this.state = { qrData: "", qrCodeData: "www.google.com.ar" }
        this.callback = this.callback.bind(this)
    }
    
    componentDidMount () {
      this.getDataURL(); 
    }
    
    print = () => {
      Print.printAsync({
        html: `
          <style>
            .alignCenter {
              text-align: center;
            }
          </style>
          <style>
            .alignRight {
              text-align: right;
            }
          </style>
          <div class= "alignCenter">
            <h1>Bienvenido a Nombre del negocio</h1>
            <h2>Dirección del negocio</h2>
            <br/>
            <br/>
            <br/>
            <img src="data:image/jpeg;base64,${this.state.qrData}"/>
          </div>
          <br/>
          <br/>
          <br/>
          <h2 class="alignRight">ReactivAR</h2>

         `
      });
    }
    
    getDataURL() {
      this.svg.toDataURL(this.callback);
    }
    callback(dataURL) {
      this.setState({qrData: dataURL});
    }
    render() {
      return (
        <View style={{ backgroundColor: "#fff", flex: 1,  }}>

            <View style={{justifyContent:'center', alignItems: 'center', paddingTop:30}}>
            <QRCode
              value={this.state.qrCodeData}
              size={150}
              getRef={(c) => (this.svg = c)}
            />
            <TouchableOpacity
                onPress={this.print}
                style={{
                  backgroundColor: "white",
                  height: 30,
                  marginLeft: 50,
                  marginRight: 50,
                  marginTop: 20,
                  borderRadius: 5,
                }}
              >
                <Text
                  style={{
                    color: "#2572FF",
                    fontSize: 15,
                    textAlign: "center",
                    padding: 5,
                  }}
                >
                  Imprimir código QR
                </Text>
          </TouchableOpacity>
            </View>
            
        </View>
      );
    }
}
