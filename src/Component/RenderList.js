import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, Dimensions, ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';

import Item from './Item'
import {firebase} from '../Firebase/config'

const H = Dimensions.get('window').height;
const W = Dimensions.get('window').width;

export default function RenderList() {

  const [travelData, setTravelData] = useState([]);
  const [loading, setLoading] = useState(true);
  const selectedType = useSelector(state => state.type)
  const searchQuery = useSelector(state => state.searchQuery)

  const checkSearch = (title) => {
    const newSearch = searchQuery.toUpperCase();
    const newTitle = title ? title.toUpperCase() : ''.toUpperCase();
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
  },[]);


  if (loading) return (
    <View style={{}}>
      <ActivityIndicator size='large' />
    </View>
  )

  return (
    <FlatList
      data={travelData}
      extraData={[selectedType, searchQuery]}
      renderItem={({ item }) => {
        if ((item.type == selectedType || selectedType == "All") && checkSearch(item.title) )
          return <Item title={item.title} coverImage={item.cover} type={item.type} address={item.address} id={item.id} description={item.description}/>
      }}
      // renderItem={({ item }) => <Item title={item.title} coverImage={item.cover} type={item.type} address={item.address} id={item.id} /> }
      numColumns="1"
      keyExtractor={item => item.id}
    />
  )
}
