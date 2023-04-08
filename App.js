import "setimmediate"
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider, useSelector } from 'react-redux';

import DrawerNavi from './src/Navigator/DrawerNavi';
import Store from './src/Redux/Store';

function NaviContainer(){
  const MyTheme = useSelector(state => state.theme)

  return(
    <NavigationContainer theme={MyTheme}>
      <DrawerNavi />
    </NavigationContainer>
  )
}

export default function App() {
  return (
    <Provider store={Store} >
      <NaviContainer />
    </Provider>
  );
}