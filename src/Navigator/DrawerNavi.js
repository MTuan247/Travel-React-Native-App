import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native'
import {
  createDrawerNavigator,
  DrawerItem,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector, useDispatch } from 'react-redux'

import BottomTabNavi from './BottomTabNavi';

function CustomDrawerContent(props) {

  const dispatch = useDispatch();

  const user = useSelector(state => state.uinfo);

  return (
    <DrawerContentScrollView {...props}>
      <View style={[styles.area, { borderBottomWidth: 1, }]}>
        <TouchableOpacity style={styles.header} onPress={() => props.navigation.navigate('Account')}>
          <Image
            style={styles.logo}
            source={require('../../image/firebase-logo.png')}
          />
          <View style={{alignItems: 'center', flexDirection: 'column'}}>
            <Text style={[styles.text,{color: '#bfbfbf' }]}>Welcome </Text>
            <Text style={styles.text}>{user.fullName}</Text>
          </View>
        </TouchableOpacity>
      </View>
      <DrawerItemList {...props} />
      <View style={[styles.area, { borderTopWidth: 1, }]}>
        {
          (user.id != "Guest") ? (
            <DrawerItem
              label="Logout"
              icon={({ color, size }) => <Ionicons name="log-out" size={size} color={color} />}
              onPress={() => dispatch({ type: "LOGOUT" })}
            />
          ) : (
            <DrawerItem
              label="Login"
              icon={({ color, size }) => <MaterialCommunityIcons name="login" size={size} color={color} />}
              onPress={() => props.navigation.navigate('Account')}
            />
          )
        }
      </View>
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function DrawerNavi() {

  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={BottomTabNavi} options={{
        drawerIcon: ({ color, size }) => <Ionicons name="ios-home" size={size} color={color} />
      }} />
    </Drawer.Navigator>
  )
}

export default DrawerNavi;

const styles = StyleSheet.create({
  area: {
    borderColor: '#e6e6e6',
    margin: 5,
  },

  text: {
    // alignSelf: 'center',
    fontWeight: '400',
    fontSize: 16,
    color: "#4d4d4d",
  },

  logo: {
    height: 60,
    width: 60,
    alignSelf: "center",
    margin: 5,
  },

  header: {
    flexDirection: 'row',
  },
})