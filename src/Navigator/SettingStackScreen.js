import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { useSelector } from 'react-redux'
import {SettingScreen} from '../Screen';

const SettingStack = createStackNavigator();

function SettingStackScreen() {
  const color = useSelector(state => state.theme.colors.primary)
  return (
    <SettingStack.Navigator screenOptions={{
      headerStyle: { backgroundColor: color },
      headerTitleAlign: "center",
      headerMode: 'screen',
      headerTitleStyle: { color: 'white' },
      headerTintColor: 'white',
    }}>
      <SettingStack.Screen name="SettingScreen" component={SettingScreen} options={{
        title: "Setting"
      }} />
    </SettingStack.Navigator>
  );
}
export default SettingStackScreen;