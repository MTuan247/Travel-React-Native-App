import React, { Component } from 'react'
import { View } from 'react-native'

import { Loading } from '../Component'

export default class SplashScreen extends Component{

    render(){
        return (
            <View style={{backgroundColor: 'white', flex: 1}}>
                <Loading />
            </View>
        )
    }
    
}