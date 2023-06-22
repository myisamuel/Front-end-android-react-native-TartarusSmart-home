import { createStackNavigator } from '@react-navigation/stack'
import Login from '../screen/Login'
import MainTabNavigation from './MainTabNavigation'
import Register from '../screen/Register'
export default function LoginNavigation() {
  
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
        <Stack.Screen name='Login' component={Login} options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen name='Register' component={Register}options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen name='MainMenu' component={MainTabNavigation} options={{headerShown: false}}></Stack.Screen>
    </Stack.Navigator>
  )
}
