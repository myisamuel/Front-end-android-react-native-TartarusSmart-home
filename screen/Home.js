import React, { useEffect, useState } from 'react'
import axios from 'axios'
import DeviceButton from '../component/DeviceButton';
import { View } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {ScrollView } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import Device from '../screen/Device';

const Home = ({navigation}) => {

  // const Stack = createStackNavigator();

  let [device,setDevice] = useState([]);
  
  let fetchDevice = async () => {
    let token = await AsyncStorage.getItem('token');
    try{
      const response = await axios.get("http://192.168.1.2:8080/device/getDevice", {
        headers: {
          'Content-Type': 'application/json',
          "Authorization": token
        }
      });
      setDevice(response.data);
    }catch (error){
      console.log(error);
    }
  };

  useEffect(()=>{
    fetchDevice();
  },[]);

  return (
    
      <View>
        <ScrollView>
          {device.length > 0 &&
          device.map((device) => <DeviceButton key={device.idDevice} props={device} navigation={navigation}/>)
          }
        </ScrollView>
      </View>
  )
}


export default Home;