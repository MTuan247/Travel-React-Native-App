import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {useSelector} from 'react-redux'

import SearchBar from '../Component/SearchBar.js';
import MenuButton from '../Component/MenuButton';
import DropDown from '../Component/DropBar';
import {DetailScreen, HomeScreen, ListScreen, ContactScreen} from '../Screen';

const HomeStack = createStackNavigator();

function HomeStackScreen(){
  const headerColor = useSelector(state => state.theme.colors.primary)

  return(
    <HomeStack.Navigator screenOptions={{
      headerStyle: { backgroundColor: headerColor },
      headerTitleAlign: "center",
      headerMode: 'screen',
      headerTitleStyle: { color: 'white' },
      headerTintColor: 'white',
      headerTitle: () => <SearchBar />, 
    }}>
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} options={{ headerLeft: props=> <MenuButton /> , }}/>
      <HomeStack.Screen name="ListScreen" component={ListScreen} options={{
          headerRight: props => <DropDown />,
        }} />
      <HomeStack.Screen name="DetailScreen" component={DetailScreen} options={ ({route}) => ({ 
          headerTitle: route.params.title,
        }) } />
      <HomeStack.Screen name="ContactScreen" component={ContactScreen} />
    </HomeStack.Navigator>
  );
}
export default HomeStackScreen;