import React from 'react'
import {View, Modal, Image} from 'react-native'

export default function Loading(){
    return(
        <Modal
            animationType='fade'
            transparent={true}
        >
            <View style={{ 
                alignSelf:'center', 
                marginTop: 200, 
                borderWidth: 1, 
                borderRadius: 25, 
                borderColor: '#e6e6e6',

            }} >
                <Image
                    source={require('../../assets/img.jpg')}
                    style={{
                        height: 125,
                        width: 125,
                        borderRadius: 25, 
                    }}
                    resizeMode= 'cover'
                />
            </View>
        </Modal>
    )
}