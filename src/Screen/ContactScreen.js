import React, { useEffect, useState } from 'react';
import { Button, Text, View, ScrollView, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { callNumber, openUrl, sendEmail } from '../Component/OpenUrl'
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { Input } from 'react-native-elements';

const contact = {
  address: "Hà Lỗ, Liên Hà, Đông Anh, Hà Nội",
  phoneNumber: "0339642686",
  email: "mtuan2472000@gmail.com",
  website: "www.facebook.com.vn"
};

function MenuHeader() {

  const primaryColor = useSelector(state => state.theme.colors.primary)

  const menuButtonStyle = [styles.menuButton, { backgroundColor: primaryColor }];

  return (
    <View style={styles.menuHeaderView} >
      <View style={styles.menuComponent}>
        <TouchableOpacity
          style={menuButtonStyle}
          onPress={() => callNumber(contact.phoneNumber)}>
          <Ionicons name="call" size={30} color="white" />
        </TouchableOpacity>
        <Text style={styles.menuButtonLabel}>Phone </Text>
      </View>
      <View style={styles.menuComponent}>
        <TouchableOpacity
          style={menuButtonStyle}
          onPress={() => sendEmail(contact.email)}>
          <FontAwesome5 name="paper-plane" size={30} color="white" />
        </TouchableOpacity>
        <Text style={styles.menuButtonLabel} numberOfLines={1}>Email </Text>
      </View>
      <View style={styles.menuComponent}>
        <TouchableOpacity
          style={menuButtonStyle}
          onPress={() => openUrl(contact.website)}>
          <MaterialCommunityIcons name="web" size={30} color="white" />
        </TouchableOpacity>
        <Text style={styles.menuButtonLabel} numberOfLines={1} >Website </Text>
      </View>
    </View>
  )
}

function SendMessageForm() {
  return (
    <View style={styles.menuHeaderView}>
      <Input
        placeholder='SUBJECT'
      />
      <Input
        multiline
        numberOfLines={5}
        placeholder='MESSAGE'
      />
    </View>
  )
}

export default function ContactScreen() {

  const primaryColor = useSelector(state => state.theme.colors.primary)

  return (
    <ScrollView style={[styles.container]} >
      <Text style={[styles.title, { color: primaryColor }]} >Contact Us</Text>
      <MenuHeader />
      <Text style={[styles.title, { color: primaryColor }]} >Message</Text>
      <SendMessageForm />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    backgroundColor: '#f2f2f2'
  },
  title: {
    color: '#3399ff',
    fontSize: 20,
    fontWeight: "100",
    alignSelf: 'center',
    margin: 10,
  },

  menuHeaderView: {
    alignSelf: 'center',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    backgroundColor: 'white',
    margin: 5,
    borderRadius: 5,
    width: Dimensions.get('window').width * 0.95,
  },

  menuComponent: {
    // width: Dimensions.get('window').width/4,
  },

  menuButton: {
    borderRadius: 25,
    backgroundColor: '#3399ff',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
    height: 48,
    width: 48,
    alignItems: "center",
    justifyContent: 'center',
    alignSelf: 'center',
  },

  menuButtonLabel: {
    color: '#4d4d4d',
    fontSize: 12,
    fontWeight: "normal",
    alignSelf: 'center',
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
    paddingLeft: 16
  },
  button: {
    backgroundColor: '#788eec',
    marginLeft: 10,
    marginRight: 10,
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
