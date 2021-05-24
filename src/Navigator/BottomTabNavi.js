import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import LoginStackScreen from './LoginStackScreen';
import HomeStackScreen from './HomeStackScreen';
import FavoriteStackScreen from '../Navigator/FavoriteStackScreen'
import SettingStackScreen from './SettingStackScreen'

const Tab = createBottomTabNavigator();

function BottomTabNavi(){
  return(
    <Tab.Navigator screenOptions={({route}) => ({
      tabBarIcon: ({ focused , color , size }) => {
        let iconName;
        if(route.name === "Home") {
          iconName = focused ? 'ios-home' : 'ios-home-outline';
        } else if(route.name === 'Settings') {
          iconName = focused ? 'ios-settings' : 'ios-settings-outline';
        }
        return <Ionicons name={iconName} size={size} color={color} />;
      }
    })}
    >
        <Tab.Screen name="Home" component={HomeStackScreen} options={{ title: "Home", }}/>
        <Tab.Screen name="Favorite" component={FavoriteStackScreen} options={{
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            iconName = focused ? 'albums' : 'albums-outline';
            return <Ionicons name={iconName} size={size} color={color} />
          },
        }} />
        <Tab.Screen name="Settings" component={SettingStackScreen} options={{ title: "Setting" }}/>
        <Tab.Screen name="Account" component={LoginStackScreen} options={{ 
          title: "Account",
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            iconName = focused ? 'ios-person' : 'ios-person-outline';
            return <Ionicons name={iconName} size={size} color={color} />
          },
        }} />
    </Tab.Navigator>
  )
}
export default BottomTabNavi;