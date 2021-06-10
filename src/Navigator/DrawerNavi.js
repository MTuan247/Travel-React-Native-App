import React, { useEffect, useState } from 'react';
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
import {SplashScreen} from '../Screen'

function CustomDrawerContent(props) {

  const dispatch = useDispatch();

  const user = useSelector(state => state.uinfo);

  return (
    <DrawerContentScrollView {...props}>
      <View style={[styles.area, { borderBottomWidth: 1, }]}>
        <TouchableOpacity style={styles.header} onPress={() => props.navigation.navigate('Account')}>
          <Image
            style={styles.logo}
            source={{ uri: 
              'https://firebasestorage.googleapis.com/v0/b/fir-project-2c4c0.appspot.com/o/unnamed.png?alt=media&token=0fdffafe-812c-4709-9879-690d929ca5eb'
            }}
          />
          <View style={{alignItems: 'center', flexDirection: 'column', justifyContent: 'center', marginLeft: 15}}>
            <Text style={[styles.text,{color: '#bfbfbf' }]}>Chào mừng</Text>
            {
              user.fullName=="Guest" ? (<></>) :(
                <Text style={styles.text}>{user.fullName}</Text>
              )
            }
            
          </View>
        </TouchableOpacity>
      </View>
      <DrawerItemList {...props} />
      <View style={[styles.area, { borderTopWidth: 1, }]}>
        {
          (user.id != "Guest") ? (
            <DrawerItem
              label="Đăng xuất"
              icon={({ color, size }) => <Ionicons name="log-out" size={size} color={color} />}
              onPress={() => dispatch({ type: "LOGOUT" })}
            />
          ) : (
            <DrawerItem
              label="Đăng nhập"
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

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000 )
  })

  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
      {
        (loading) ? (
          <Drawer.Screen name="SplashScreen" component={SplashScreen} />
        ) : (
          <Drawer.Screen name="Home" component={BottomTabNavi} options={{
            drawerIcon: ({ color, size }) => <Ionicons name="ios-home" size={size} color={color} />
          }} />
        )
      }
      
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