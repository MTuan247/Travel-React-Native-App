import React from 'react';
import { Dimensions } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { useSelector, useDispatch} from 'react-redux'

const W = Dimensions.get('window').width;

const SearchBar = () => {
    const searchQuery = useSelector(state => state.searchQuery)

    const dispatch = useDispatch()
  
    const onChangeSearch = query => dispatch({type: 'SETSEARCH', payload: query})

    const handleSearch = () => {}
  
    return (
      <Searchbar
        placeholder="Search"
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