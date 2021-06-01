import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput, Button } from 'react-native'
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
            <Text style={styles.buttonTitle}>Đăng xuất</Text>
        </TouchableOpacity>
    )
}

function ChangeInfo() {
    const uinfo = useSelector(state => state.uinfo)
    const primaryColor = useSelector(state => state.theme.colors.primary)
    const [fullName, setFullName] = useState(uinfo.fullName)
    const [phone, setPhone] = useState(uinfo.phone)
    const dispatch = useDispatch()

    return (
        <View style={{backgroundColor: "#e6f2ff", margin: 5, paddingBottom: 20, borderRadius: 5}}>
            <Image
                style={styles.logo}
                source={require('../../image/firebase-logo.png')}
            />
            <Text style={styles.textStyle} >Email: </Text>
            <Text style={styles.textInfo}>{uinfo.email}</Text>
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
            <Text style={styles.textStyle} >Phone: </Text>
            <TextInput
                style={styles.textInfo}
                placeholder='Phone Number'
                placeholderTextColor="#aaaaaa"
                onChangeText={(text) => setPhone(text)}
                value={phone}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
            />
            <TouchableOpacity style={[styles.button, {backgroundColor: primaryColor, width: 200}]} >
                <Text style={styles.buttonTitle}>Cập nhật</Text>
            </TouchableOpacity>
            
        </View>

    )
}

function ChangePassword(){
    const uinfo = useSelector(state => state.uinfo)
    const primaryColor = useSelector(state => state.theme.colors.primary)
    const [oldPass, setOldPass] = useState()
    const [newPass, setNewPass] = useState()
    const [newRePass, setNewRePass] = useState()
    const dispatch = useDispatch()

    return (
        <View style={{backgroundColor: "#e6f2ff", margin: 5, paddingBottom: 20, borderRadius: 5}}>
            <Text style={styles.textStyle} >Mật khẩu cũ</Text>
            <TextInput
                style={styles.textInfo}
                placeholder='Full Name'
                placeholderTextColor="#aaaaaa"
                onChangeText={(text) => setOldPass(text)}
                value={oldPass}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
            />
            <Text style={styles.textStyle} >Mật khẩu mới: </Text>
            <TextInput
                style={styles.textInfo}
                placeholder='Phone Number'
                placeholderTextColor="#aaaaaa"
                onChangeText={(text) =>setNewPass(text)}
                value={newPass}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
            />
            <Text style={styles.textStyle} >Nhập lại mật khẩu: </Text>
            <TextInput
                style={styles.textInfo}
                placeholder='Phone Number'
                placeholderTextColor="#aaaaaa"
                onChangeText={(text) => setNewRePass(text)}
                value={newRePass}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
            />
            <TouchableOpacity style={[styles.button, {backgroundColor: primaryColor, width: 200}]} >
                <Text style={styles.buttonTitle}>Đổi mật khẩu</Text>
            </TouchableOpacity>
            
        </View>

    )
}

export default function AccountInfo() {

    return (
        <ScrollView style={styles.container}>
            
            <ChangeInfo />
            <ChangePassword />
            <LogoutButton />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
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