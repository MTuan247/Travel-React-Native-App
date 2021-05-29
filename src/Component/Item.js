import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Image, Dimensions, StyleSheet } from 'react-native';
import { useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function Item(props){

    const [heartIcon,setHeartIcon] = useState()
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const favorite = useSelector(state => state.uinfo.favorite)
    const id = useSelector(state => state.uinfo.id)
  
    useEffect(() => {
      var index = favorite.indexOf(props.value.id)
      if(index > -1 ){
        setHeartIcon('heart')
      } else setHeartIcon('heart-outline')
    })
  
    const handleFavorite = () => {
      if(id == 'Guest'){
        alert('Please login to add favorite')
        return;
      }
      if(heartIcon == 'heart-outline') {
        dispatch({type: 'ADDFAVORITE', payload: props.value.id})
      } else {
        dispatch({type: 'REMOVEFAVORITE', payload: props.value.id})
      }
    }
  
      return(
        <View >
          <TouchableOpacity style={styles.item} onPress={() => navigation.push('DetailScreen',{ value: props.value }) } >
            <Image source={{uri: props.value.cover}} style={styles.coverImage} />
            <View style={styles.textView}>
              <Text style={styles.textStyle} numberOfLines={1} >
                {props.value.title}
              </Text>
              <Text numberOfLines={1} >
                Địa chỉ: {props.value.address}
              </Text>
              <TouchableOpacity onPress={handleFavorite} style={{ alignSelf:'flex-end', marginRight: 20 }} >
                <Ionicons name={heartIcon} size={25} color='red' />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </View>
      )
  }
  
  const H = Dimensions.get('window').height;
  const W = Dimensions.get('window').width;

  const styles = StyleSheet.create({
    coverImage:{
      height: 70,
      width: 140,
      margin: 5,
      borderWidth: 1,
      borderRadius: 15,
      borderColor:'gray',
    },
  
    item: {
      flexDirection: "row",
      alignSelf: 'stretch',
      width: W,
      height: 75,
      backgroundColor: 'white',
      borderColor: 'gray',
      borderBottomWidth : 1,
      borderBottomLeftRadius: 25,
      margin: 2,
      borderRadius: 5,
    },
  
    textStyle:{
      textAlign: "center",
      color: "#3399ff",
      fontSize: 14,
    },
  
    textView: {
      flex: 1,
      alignItems: "center",
      justifyContent: "flex-start",
    }
  
  })
  