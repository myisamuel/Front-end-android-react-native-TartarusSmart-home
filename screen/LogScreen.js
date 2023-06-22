import React from 'react'
import { ScrollView,Text,View } from 'react-native';
import { useState,useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

LogScreen = ({route}) => {

    const {idDevice} = route.params;
    let [deviceLog,setDeviceLog]=useState([]);

    const fetchLog = async () => {
        let token = await AsyncStorage.getItem("token");
    
        let header = {
          headers: {
            'Content-Type': 'application/json',
            "Authorization": token
          },}
    
        try{
          let response = await axios.get(`http://192.168.1.2:8080/log/${idDevice}`,header);
          setDeviceLog(response.data);
          console.log(response.data);
        }catch(error){
            console.log(error);
        }finally{
    
        }
      }
    
      useEffect(()=>{
        fetchLog();
      },[])  

  return (
    <View style={{backgroundColor:'#5f9ea0'}}>
        <ScrollView>
        {deviceLog.map(log=>{
        return (
        <View key={log.idLog} style={{borderWidth:1,borderColor:"#000000",padding:5}}>
            <Text>id log: {log.idLog}</Text>
            <Text>time  : {log.time}</Text>
            <Text>watt  : {log.watt}</Text>
            <Text>volt  : {log.volt}</Text>
        </View>);
        })}
    </ScrollView>
  </View>
  )
};

export default LogScreen;
