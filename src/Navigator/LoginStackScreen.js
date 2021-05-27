import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux'

import { LoginScreen, RegistrationScreen, AccountInfo, ChangeInfoScreen } from '../Screen';

const LoginStack = createStackNavigator();

export default function LoginStackScreen() {

    const uinfo = useSelector(state => state.uinfo)
    const color = useSelector(state => state.theme.colors.primary)

    return (
        <LoginStack.Navigator screenOptions={{
            headerStyle: { backgroundColor: color },
            headerTitleAlign: "center",
            headerMode: 'screen',
            headerTitleStyle: { color: 'white' },
            headerTintColor: 'white',
        }}>
            {
                (uinfo.id != 'Guest') ? (
                    <>
                        <LoginStack.Screen name='Account' component={AccountInfo} />
                    </>
                ) : (
                    <>
                        <LoginStack.Screen name="Login" component={LoginScreen} />
                        <LoginStack.Screen name="Registration" component={RegistrationScreen} />
                    </>
                )
            }
        </LoginStack.Navigator>
    )
}