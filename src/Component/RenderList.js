import React, { useState, useEffect } from 'react';
import { View, Dimensions, ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';
import { Text } from 'react-native-elements';

import Item from './Item'
import { firebase } from '../Firebase/config'

const H = Dimensions.get('window').height;
const W = Dimensions.get('window').width;

export default function RenderList() {

  const [travelData, setTravelData] = useState([]);
  const [loading, setLoading] = useState(true);
  const selectedType = useSelector(state => state.type)
  const searchQuery = useSelector(state => state.searchQuery)
  const primaryColor = useSelector(state => state.theme.colors.primary)

  function removeAccents(str) {
    return str.normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/đ/g, 'd').replace(/Đ/g, 'D');
  }

  const filterSearch = (item) => {
    let newSearch = searchQuery.toUpperCase();
    let newTitle = item.title ? item.title.toUpperCase() : ''.toUpperCase();
    newSearch = removeAccents(newSearch)
    newTitle = removeAccents(newTitle)
    return newTitle.indexOf(newSearch) > -1;
  }

  

  useEffect(() => {
    const subscriber = firebase.firestore()
      .collection('Data')
      .onSnapshot(querySnapshot => {
        const travelData = [];

        querySnapshot.forEach(documentSnapshot => {
          travelData.push({
            ...documentSnapshot.data(),
          });
        });

        setTravelData(travelData);
        setLoading(false);
      });

    // Unsubscribe from events when no longer in use
    return () => subscriber();
  }, []);


  if (loading) return (
    <View style={{}}>
      <ActivityIndicator size='large' color={primaryColor} />
    </View>
  )

  const filteredData = travelData.filter(filterSearch)

  if (filteredData.length == 0) return (
    <View style={{ backgroundColor: primaryColor, margin: 5, height: 50, justifyContent: 'center', borderRadius: 5, }}>
      <Text style={{ alignSelf: 'center', color: 'white' }}>
        Không có kết quả
      </Text>
    </View>
  )

  return (
    <>
      {
        filteredData.map((item) => {
          if ((item.type == selectedType || selectedType == "All"))
            return <Item value={item} />
        })
      }
    </>
  )
}
