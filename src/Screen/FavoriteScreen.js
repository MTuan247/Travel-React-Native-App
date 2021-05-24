import React, { useState, useEffect } from 'react'
import { View, Text, FlatList } from 'react-native'
import { useFocusEffect } from '@react-navigation/native';
import { useDispatch, useSelector} from 'react-redux'

import { firebase } from '../Firebase/config'
import Item from '../Component/Item'

function FavoriteList() {
    const [travelData, setTravelData] = useState([]);
    const selectedType = useSelector(state => state.type)
    const favorite = useSelector(state => state.uinfo.favorite)

    useEffect(() => {
        if (favorite.length == 0) {
            return;
        }
        const subscriber = firebase.firestore()
            .collection('Data')
            .where('id', 'in', favorite)
            .onSnapshot(querySnapshot => {
                const travelData = [];

                querySnapshot.forEach(documentSnapshot => {
                    travelData.push({
                        ...documentSnapshot.data(),
                    });
                });

                setTravelData(travelData);
                // setLoading(false);
            });
        // Unsubscribe from events when no longer in use
        return () => subscriber();
    });

    if (favorite.length == 0) return (
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Favorite List</Text>
        </View>
    );

    return (
        <View >
            <FlatList
                data={travelData}
                extraData={ favorite}
                renderItem={({ item }) => {
                    if (item.type == selectedType || selectedType == "All")
                        return <Item title={item.title} coverImage={item.cover} type={item.type} address={item.address} id={item.id} />
                }}
                // renderItem={({ item }) => <Item title={item.title} coverImage={item.cover} type={item.type} address={item.address} id={item.id} /> }
                numColumns="1"
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default function FavoriteScreen({ navigation }) {

    const uinfo = useSelector(state => state.uinfo)
    const dispatch = useDispatch();

    useFocusEffect(() => {
        if (uinfo.id == 'Guest') {
            navigation.navigate('Home');
            alert('Please login to use favorite list')
        } else {
            dispatch({type:"SETTYPE", payload:"All"})
        }
    })

    return (
        <View style={{}}>
            <FavoriteList />
        </View>
    )
}
