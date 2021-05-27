import React from 'react';
import {View, Image, StyleSheet, Text, Dimensions, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import {callNumber,openUrl, sendEmail} from '../Component/OpenUrl'

export default function DetailScreen({route}){
    return(
        <View style={styles.container}>
            <Image 
                source={{uri : route.params.coverImage}}
                style={styles.coverImage}
                resizeMode='cover'
            />
            <View style={styles.tab}>
                <TouchableOpacity style={styles.contactButton} onPress={() => callNumber('0339642686')}>
                    <Icon name='call' size={30} color='white' />
                </TouchableOpacity>
                <TouchableOpacity style={styles.contactButton} onPress={() => openUrl("https://www.google.com.vn")}>
                    <Icon name='logo-facebook' size={30} color='white' />
                </TouchableOpacity>
                <TouchableOpacity style={styles.contactButton} onPress={() => sendEmail("mtuan2472000@gmail.com")}>
                    <Icon name='mail' size={30} color='white' />
                </TouchableOpacity>
            </View>
            <View style={styles.container}>
                <Text >
                    Địa chỉ: {route.params.address}
                </Text>
                <Text style={{fontWeight: 'bold'}}>
                    Mô tả:
                </Text>
                <Text>
                    {route.params.description}
                </Text>
            </View>
        </View>
    )
}

const H = Dimensions.get('window').height;
const W = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },

    coverImage: {
        width: W,
        height: H/3,
    },

    tab: {
        justifyContent: 'flex-end' ,
        flexDirection: 'row',
        height: 55,
        // width: 640,
        backgroundColor: '#3399ff',
    },

    contactButton: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2a2b52',
        borderRadius: 50,
        marginRight: 10,
        height: 50,
        width: 50,
    }
})