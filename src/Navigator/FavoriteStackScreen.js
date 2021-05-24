import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { useSelector } from 'react-redux'

import DetailScreen from '../Screen/DetailScreen'
import DropDown from '../Component/DropBar'
import {FavoriteScreen} from '../Screen'

const FavoriteStack = createStackNavigator();

export default function FavoriteStackScreen() {
    const color = useSelector(state => state.theme.colors.primary)

    return (
        <FavoriteStack.Navigator screenOptions={{
            headerStyle: { backgroundColor: color },
            headerTitleAlign: "center",
            headerMode: 'screen',
            headerTitleStyle: { color: 'white' },
            headerTintColor: 'white',
        }}>
            <FavoriteStack.Screen name='FavoriteScreen' component={FavoriteScreen} options={{ headerRight: props => <DropDown />, }} />
            <FavoriteStack.Screen name='DetailScreen' component={DetailScreen} />
        </FavoriteStack.Navigator>
    )
}