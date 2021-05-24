import React, { useEffect, useState } from 'react';
import { Button, Text, View, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { callNumber, openUrl, sendEmail } from '../Component/OpenUrl'
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Menu } from 'react-native-paper';

const contact = {
  address: "Hà Lỗ, Liên Hà, Đông Anh, Hà Nội",
  phoneNumber: "0339642686",
  email: "mtuan2472000@gmail.com",
  website: "www.facebook.com.vn"
};

function MenuHeader() {
  return (
    <View style={styles.menuHeaderView} >
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => callNumber(contact.phoneNumber)}>
          <Text style={styles.buttonTitle}>Hotline</Text>
        </TouchableOpacity>
        <Text>Phone: {contact.phoneNumber} </Text>
      </View>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => sendEmail(contact.email)}>
          <Text style={styles.buttonTitle}>Send Email</Text>
        </TouchableOpacity>
        <Text>Email: {contact.email} </Text>
      </View>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => openUrl(contact.website)}>
          <Text style={styles.buttonTitle}>Send Email</Text>
        </TouchableOpacity>
        <Text>Website: {contact.website} </Text>
      </View>
    </View>
  )
}

function SendMessageForm(){
  return(
    <View>
      
    </View>
  )
}

export default function ContactScreen() {

  return (
    <View style={styles.container} >
      <Text style={styles.title} >Contact Us</Text>
      <MenuHeader />
      <SendMessageForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white'
  },
  title: {

  },

  menuHeaderView: {
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  
  menuButton: {
    borderRadius: 25,
    backgroundColor: '#788eec',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    height: 48,
    width: 48,
    alignItems: "center",
    justifyContent: 'center'
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
