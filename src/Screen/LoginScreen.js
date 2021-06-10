import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View, StyleSheet, ActivityIndicator } from 'react-native'
import { firebase } from '../Firebase/config';
import { useDispatch } from 'react-redux';
import { Loading } from '../Component'

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('mtuan2472000@gmail.com');
    const [password, setPassword] = useState('123456');
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch()

    const onFooterLinkPress = () => {
        navigation.navigate('Registration')
    }

    const onLoginPress = () => {
        setLoading(true);
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((response) => {
                const uid = response.user.uid
                const usersRef = firebase.firestore().collection('users')
                usersRef
                    .doc(uid)
                    .get()
                    .then(firestoreDocument => {
                        const user = firestoreDocument.data()
                        dispatch({ type: 'SETUSER', payload: user })
                        setLoading(true)
                        navigation.navigate('HomeScreen')
                    })
                    .catch(error => {
                        setLoading(false);
                        alert(error)
                    });
            })
            .catch(error => {
                setLoading(false);
                alert(error)
            })
    }

    if (loading) return (
        // <ActivityIndicator size="large" color="#4d4d4d" style={{marginTop: 200}} />
        <Loading />
    )

    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../../image/firebase-logo.png')}
            />
            <TextInput
                style={styles.input}
                placeholder='E-mail'
                placeholderTextColor="#aaaaaa"
                onChangeText={(text) => setEmail(text)}
                value={email}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholderTextColor="#aaaaaa"
                secureTextEntry
                placeholder='Password'
                onChangeText={(text) => setPassword(text)}
                value={password}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
            />
            <TouchableOpacity
                style={styles.button}
                onPress={() => onLoginPress()}>
                <Text style={styles.buttonTitle}>Log in</Text>
            </TouchableOpacity>
            <View style={styles.footerView}>
                <Text style={styles.footerText}>Don't have an account? <Text onPress={onFooterLinkPress} style={styles.footerLink}>Sign up</Text></Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    title: {

    },
    logo: {
        flex: 1,
        height: 120,
        width: 120,
        alignSelf: "center",
        margin: 30
    },
    input: {
        height: 48,
        width: 200,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'white',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30,
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
        justifyContent: 'center'
    },
    buttonTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold"
    },
    footerView: {
        flex: 1,
        alignItems: "center",
        marginTop: 20
    },
    footerText: {
        fontSize: 16,
        color: '#2e2e2d'
    },
    footerLink: {
        color: "#788eec",
        fontWeight: "bold",
        fontSize: 16
    }
})