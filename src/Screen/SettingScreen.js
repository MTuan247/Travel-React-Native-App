import React from 'react';
import { Text, View,  StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

export default function Setting() {
  const dispatch = useDispatch();
  const color = useSelector(state => state.theme.colors.primary)

  return (
    <View style={styles.container} >
      <View style={[styles.area,{borderColor: color}]}>
        <Text style={[styles.textStyle,{color: color}]}>Set Primary Color</Text>
        <View style={styles.listStyle}>
          <TouchableOpacity onPress={() => { dispatch({ type: "SETCOLOR", payload: "#595959" }) }}>
            <View style={[styles.choseColor, { backgroundColor: "#595959" }]}>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { dispatch({ type: "SETCOLOR", payload: "#3399ff" }) }}>
            <View style={[styles.choseColor, { backgroundColor: "#3399ff" }]}>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { dispatch({ type: "SETCOLOR", payload: "#ff1a1a" }) }}>
            <View style={[styles.choseColor, { backgroundColor: "#ff1a1a" }]}>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { dispatch({ type: "SETCOLOR", payload: "#66ff33" }) }}>
            <View style={[styles.choseColor, { backgroundColor: "#66ff33" }]}>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  choseColor: {
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#e6e6e6',
    height: 48,
    width: 48,
    margin: 3,
  },
  textStyle: {
    alignSelf: 'center',
    fontWeight: '400',
    fontSize: 16,
    color: "#4d4d4d",
    marginTop: 5,
  },
  listStyle: {
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  area: {
    borderColor: '#4d4d4d',
    margin: 10,
    // borderTopWidth: 1,
    paddingBottom: 10,
    borderBottomWidth: 1,
  },
});

