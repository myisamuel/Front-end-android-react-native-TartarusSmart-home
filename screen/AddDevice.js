import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { Button, TextInput, View,StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function AddDevice() {


    let [deviceName,setDeviceName] = useState("");
    let [deviceType,setDeviceType] = useState("");
    let [deviceRunTime,setDeviceRunTime] = useState("");
    let [deviceVoltSensitivity,setDeviceVoltSensitivity] = useState(0);


    let addDevice = async () => {
        let token = await AsyncStorage.getItem("token");
  
        try{
          const response = await axios.post("http://192.168.1.2:8080/device/setDevice",{
            name:deviceName,
            type:deviceType,
            runTime:deviceRunTime,
            voltSensitivity:deviceVoltSensitivity
          }, {
            headers: {
              'Content-Type': 'application/json',
              "Authorization": token
            }
          });
          console.log(response);
        }catch (error){
          console.log(error);
        }
      };
    
  return (
    <View style={styles.container}>
      
      <TextInput style={formStyle.form} placeholder='deviceName' onChangeText={(text)=>{setDeviceName(text);}}></TextInput>
      <TextInput style={formStyle.form} placeholder='deviceType' onChangeText={(text)=>{setDeviceType(text)}} required></TextInput>
      <TextInput style={formStyle.form} placeholder='deviceRuntime' onChangeText={(text)=>{setDeviceRunTime(text)}}></TextInput>
      <TextInput style={formStyle.form} placeholder='deviceVoltSensitivity' onChangeText={(text)=>{setDeviceVoltSensitivity(text)}}></TextInput>
      <Button onPress={()=>addDevice()} title='Add Device'></Button>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5f9ea0',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const formStyle = StyleSheet.create({
  form:{
    paddingLeft:10,
    backgroundColor:'#fff',
    height:40,
    width:200,
    margin:10,
    borderRadius:5,
  },
});