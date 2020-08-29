import React, { useState, useEffect} from "react";
import { StyleSheet, View, TouchableOpacity, Text, Slider, Button } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import * as Print from 'expo-print';

import QRCode from 'react-native-qrcode-svg';

export default class Pdf extends React.Component {
    constructor(props) {
        super(props)
        this.state = { qrData: "" }
        this.callback = this.callback.bind(this)
    }
    
    componentDidMount () {
      this.getDataURL(); // => Calling this in here to make sure the QRCode component did mount
    }
    
    print = () => {
      Print.printAsync({
        html: `
           <h3>Hello World</h3>
           <img src="data:image/jpeg;base64,${this.state.qrData}"/>
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
          <View>
        <QRCode
          value="Just some string value"
          size={200}
          getRef={(c) => (this.svg = c)}
        />
        <Button title="Print QR to HTML" onPress={this.print} />
        </View>
      );
    }
}
