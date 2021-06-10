import React from 'react';
import { View, Dimensions } from 'react-native';

import RenderList from '../Component/RenderList'

const H = Dimensions.get('window').height;
const W = Dimensions.get('window').width;

export default function ListScreen({ props, route }) {

  return (
    <View >
      <RenderList/>
    </View>
  );
}
