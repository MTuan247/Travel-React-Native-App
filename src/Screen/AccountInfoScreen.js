import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput, Dimensions } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { useSelector, useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

function LogoutButton() {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" })
    }

    return (
        <TouchableOpacity style={styles.button} onPress={() => handleLogout()} >
            <Text style={styles.buttonTitle}>Logout</Text>
        </TouchableOpacity>
    )
}

function ChangeInfo() {
    const uinfo = useSelector(state => state.uinfo)
    const [fullName, setFullName] = useState(uinfo.fullName)
    const dispatch = useDispatch()
    const changeName = (fullName) => {
        dispatch({type: 'RENAME', payload: fullName})
    }

    return (
        <View>
            <Text style={styles.textStyle} >User Name: </Text>
            <TextInput
                style={styles.textInfo}
                placeholder='Full Name'
                placeholderTextColor="#aaaaaa"
                onChangeText={(text) => setFullName(text)}
                value={fullName}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
            />
            
        </View>

    )
}

export default function AccountInfo() {

    const uinfo = useSelector(state => state.uinfo)
    const navigation = useNavigation();

    return (
        <ScrollView style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../../image/firebase-logo.png')}
            />
            <Text style={styles.textStyle} >Email: </Text>
            <Text style={styles.textInfo}>{uinfo.email}</Text>
            {/* <Text style={styles.textStyle} >User Name: </Text>
            <Text style={styles.textInfo}>{uinfo.fullName}</Text> */}
            <ChangeInfo />
            <LogoutButton />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
    },

    textStyle: {
        // alignSelf: 'center',
        margin: 2,
        marginLeft: 10,
        fontSize: 15
    },

    textInfo: {
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 5,
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        borderColor: '#a6a6a6',
    },

    logo: {
        height: 120,
        width: 120,
        alignSelf: "center",
        margin: 20
    },

    input: {
        height: 48,
        width: 200,
        borderRadius: 5,
        overflow: 'hidden',
        alignSelf: "center",
        backgroundColor: 'white',
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 5,
        marginRight: 5,
        paddingLeft: 16,
        borderBottomWidth: 1,
        borderColor: '#aaaaaa',
    },

    button: {
        backgroundColor: '#788eec',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        height: 48,
        width: 180,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: 'center',
        alignSelf: "center",
    },
    buttonTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold"
    },
})