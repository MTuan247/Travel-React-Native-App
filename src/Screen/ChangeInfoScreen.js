import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { useSelector, useDispatch } from 'react-redux'

function ChangeUserName() {
    const uinfo = useSelector(state => state.uinfo)
    const [fullName, setFullName] = useState(uinfo.fullName)
    const dispatch = useDispatch()
    const changeName = (fullName) => {
        dispatch({type: 'RENAME', payload: fullName})
    }

    return (
        <ScrollView>
            <TextInput
                style={styles.input}
                placeholder='Full Name'
                placeholderTextColor="#aaaaaa"
                onChangeText={(text) => setFullName(text)}
                value={fullName}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
            />
            <TouchableOpacity style={styles.button} onPress={() => changeName(fullName)}>
                <Text style={styles.buttonTitle}>Change Username</Text>
            </TouchableOpacity>
        </ScrollView>

    )
}

export default function changeInfoScreen({route}){
    const [change,setChange] = useState(route.params.change)

    if(change == '')
    return(
        <></>
    )
    if(change == 'username') return (
        <ChangeUserName />
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    textStyle: {
        alignSelf: 'center',
        margin: 15,
    },

    logo: {
        height: 120,
        width: 120,
        alignSelf: "center",
        margin: 30
    },

    input: {
        height: 48,
        width: 200,
        borderColor: '#cccccc',
        borderWidth: 1,
        borderRadius: 5,
        overflow: 'hidden',
        alignSelf: "center",
        backgroundColor: 'white',
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 5,
        marginRight: 5,
        paddingLeft: 16
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