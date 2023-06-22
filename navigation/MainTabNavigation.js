import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AddDevice from '../screen/AddDevice';
import HomeNavigation from './HomeNavigation';

export default function MainTabNavigation() {
  const Tab = createBottomTabNavigator();
  return (
        <Tab.Navigator>
                
            <Tab.Screen name='HomeNav' component={HomeNavigation} options={{headerShown: false}}></Tab.Screen>
            <Tab.Screen name='AddDevice' component={AddDevice} options={{headerShown: false}}></Tab.Screen>
          
        </Tab.Navigator>    
  )
}
