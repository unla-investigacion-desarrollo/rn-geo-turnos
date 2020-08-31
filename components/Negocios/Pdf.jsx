import React, { useState, useEffect} from "react";
import {  View, TouchableOpacity, Text, Image } from "react-native";
import * as Print from 'expo-print';
import {googlePlayBase64} from '../../assets/googlePlayBase64.jsx'
import {appStoreBase64} from '../../assets/appStoreBase64.jsx'
import QRCode from 'react-native-qrcode-svg';

export default class Pdf extends React.Component {
    constructor(props) {
        super(props)
        this.state = { qrData: "", qrCodeData: "www.google.com.ar", googlePlay:"",appStore:"" }
        this.callback = this.callback.bind(this)

    }
    
    componentDidMount () {
      this.getDataURL(); 
    }
    
    print = () => {
      // console.log (this.state.qrData)
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
              padding-top: "20px";
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
          <div class="alignRight">
            <h2 >ReactivAR</h2>
            <img src="${googlePlayBase64}" alt="Smiley face" height="50" width="100"/>
            <img src="${appStoreBase64}" alt="Smiley face" height="50" width="100"/>
            
          </div>
          

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
