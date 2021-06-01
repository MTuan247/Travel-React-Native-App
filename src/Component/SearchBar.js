import React from 'react';
import { Dimensions } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { useSelector, useDispatch} from 'react-redux'
import { useNavigation } from '@react-navigation/native';

const W = Dimensions.get('window').width;

const SearchBar = () => {
    const searchQuery = useSelector(state => state.searchQuery)

    const dispatch = useDispatch()

    const navigation = useNavigation()
  
    const onChangeSearch = query => dispatch({type: 'SETSEARCH', payload: query})

    const handleSearch = () => {
      navigation.navigate('ListScreen')
      dispatch({type:"SETTYPE", payload:"All"})
    }
  
    return (
      <Searchbar
        placeholder="Tìm kiếm"
        onChangeText={onChangeSearch}
        onIconPress={handleSearch}
        value={searchQuery}
        style={{
          alignSelf: 'center',
          width: W*0.5,
          height: 30,
        }}
      />
    );
  };
export default SearchBar;