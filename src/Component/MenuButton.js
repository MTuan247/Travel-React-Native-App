import React from 'react';
import { TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';


const MenuButton = () => {
  
    const navigation = useNavigation();
  
    return (
      <TouchableOpacity  onPress={() => navigation.toggleDrawer()} color="white" style={{marginLeft:5}} >
        <Ionicons name='menu-outline' size={30} color='white' />
      </TouchableOpacity>
    )
  }
export default MenuButton;