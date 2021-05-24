import React from 'react'
import {View, Text, Button, StyleSheet, Image} from 'react-native'
import {useSelector, useDispatch} from 'react-redux'

function LogoutButton(){
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" })
    }

    return(
        <Button style={styles.logoutButton} title="Log out" onPress={() => handleLogout() } />
    )
}

export default function AccountInfo(){

    const uinfo = useSelector(state => state.uinfo)

    return(
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../../image/firebase-logo.png')}
            />
            {/* <Text style={styles.autoAlign} >id: {uinfo.id} </Text> */}
            <Text style={styles.textStyle} >Email: {uinfo.email} </Text>
            <Text style={styles.textStyle} >FullName: {uinfo.fullName} </Text>
            {/* <Text style={styles.autoAlign} >favorite: {uinfo.favorite}</Text> */}
            <LogoutButton />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },

    textStyle:{
        alignSelf: 'center',
        margin: 15,
    },

    logoutButton: {
        backgroundColor: '#788eec',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        height: 48,
        width: 180,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: 'center'
    },

    logo: {
        height: 120,
        width: 120,
        alignSelf: "center",
        margin: 30
    },
})