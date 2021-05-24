import React,{useState} from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {connect,useDispatch} from 'react-redux'

function DropDown(props){
    const dispatch  = useDispatch();

    return(
        <Picker 
            style={styles.picker} 
            itemStyle={styles.item}
            color="#3399ff" 
            mode='dropdown'
            selectedValue={props.selectType} 
            onValueChange={(itemValue, itemIndex) =>
                {
                    dispatch({ type:'SETTYPE', payload: itemValue });
                }
            }
            >
            <Picker.Item label="Tất cả" value="All" />
            <Picker.Item label="Ăn uống" value="Ăn uống" />
            <Picker.Item label="Nghỉ ngơi" value="Nghỉ ngơi" />
            <Picker.Item label="Tham quan" value="Tham quan" />
            <Picker.Item label="Mua sắm" value="Mua sắm" />
            <Picker.Item label="Tiện ích" value="Tiện ích" />
        </Picker>
    )
}

export default connect(state => ({ selectType: state.type }))(DropDown)

const W = Dimensions.get('window').width;

const styles = StyleSheet.create({
    picker: {
        height: 30,
        width: W*0.25,
        borderWidth: 0,
        backgroundColor: '#3399ff',
        // fontWeight: '500',
        fontSize: 14,
        color: 'white'
    },

    item: {
        fontSize:10,
    }

})