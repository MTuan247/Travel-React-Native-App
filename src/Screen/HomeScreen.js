import React from 'react';
import { Text, View, FlatList, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { connect, useDispatch } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';

let ChooseButtonConnected = connect(state => ({ selectType: state.type }))(ChooseButton);

function ChooseButton(props) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  return (
    <View >
      <TouchableOpacity
        style={[styles.chooseButton,{
          borderColor: props.color,
        }]}
        onPress={() => {
          navigation.navigate(props.target)
          dispatch({ type: 'SETTYPE', payload: props.title })
        }} >
        <Ionicons name={props.icon} color="white" size={25} style={{ alignSelf: 'center', backgroundColor: props.color, borderRadius: 50, padding: 5, marginTop: 7, }} />
        <Text style={{
          alignSelf: 'center',
          margin: 5,
          color: props.color,
        }}>
          {props.title}
        </Text>
      </TouchableOpacity>
    </View>
  )
}


function ListItem() {
  return (
    <FlatList
      data={[
        {
          key: 'Ăn uống',
          color: '#404040',
          icon: 'restaurant',
          target: 'ListScreen',
        },
        {
          key: 'Nghỉ ngơi',
          color: '#470069',
          icon: 'bed',
          target: 'ListScreen',
        },
        {
          key: 'Tham quan',
          color: '#ff3def',
          icon: 'flag',
          target: 'ListScreen',
        },
        {
          key: 'Mua sắm',
          color: '#ff1c1c',
          icon: 'cart',
          target: 'ListScreen',
        },
        {
          key: 'Tiện ích',
          color: '#56ff40',
          icon: 'md-cube',
          target: 'ListScreen',
        },
        {
          key: 'Phản ánh',
          color: '#fced5d',
          icon: 'chatbubbles',
          target: 'ContactScreen',
        },
      ]}
      renderItem={({ item }) => <ChooseButtonConnected title={item.key} color={item.color} icon={item.icon} target={item.target} />}
      numColumns="2"
    />
  )
}

function CoverImage() {
  return (
    <View style={{ display: 'flex', margin: 1 }}>
      <Image
        source={require('../../image/Cover.jpg')}
        style={styles.coverImage}
      />
    </View>
  )
}

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.viewLayout} >
        <CoverImage />
        <ListItem />
      </View>
    </View>
  )
}

const W = Dimensions.get('window').width;
const H = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },

  coverImage: {
    maxHeight: H / 3,
    width: W,
  },

  // textInButton:{
  //   alignSelf: "center",
  // },

  viewLayout: {
    flex: 1,
    // flexDirection: 'row',
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  chooseButton: {
    justifyContent: 'center',
    width: 150,
    height: 75,
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 2,
    margin: 5,
  },
})
