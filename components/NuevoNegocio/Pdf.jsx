import React, { useState, useEffect} from "react";
import { StyleSheet, View, TouchableOpacity, Text, Slider, Button } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import * as Print from 'expo-print';

import QRCode from 'react-native-qrcode-svg';

export default class Pdf extends React.Component {
    constructor(props) {
        super(props)
        this.state = { qrData: "" }
    }
    
    componentDidMount () {
    }
    
    print = () => {
      Print.printAsync({
        html: `
           <h3>Hello World</h3>
           <img src="data:image/jpeg;base64,${this.state.qrData}"/>
         `
      });
    }
    

    render() {
      return (
          <View style={{flex:1, alignItems:'center', alignContent:'center'}}>
        <QRCode
          value={"http://google.com.ar"}
          size={300}
          bgColor='purple'
          fgColor='white'/>
        <Button title="Print QR to HTML" onPress={this.print} />
        </View>
      );
    }
}
