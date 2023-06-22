import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screen/Home';
import Device from '../screen/Device';
import LogScreen from '../screen/LogScreen'
export default function HomeNavigation() {
  
   const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}></Stack.Screen>
        <Stack.Screen name="Device" component={Device}></Stack.Screen>
        <Stack.Screen name="DeviceLog" component={LogScreen}></Stack.Screen>
    </Stack.Navigator>
  )
}
