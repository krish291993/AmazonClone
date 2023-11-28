import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Feather from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

export default function SubHeader() {
  return (
    <LinearGradient style={styles.subContainer}
    start={{x: 0, y: 0}}
    end={{x: 1, y: 0}}
    colors={['#bbe8ef', '#bdeee9', '#c3f1e3']}>
        <Feather name="map-pin" size={20} color="#2c4341" />
        <Text style={styles.subText}>Deliver to Krishna - Bangalore 560068</Text>
        <SimpleLineIcons name="arrow-down" size={12} color="#000000" />
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
    subContainer:{
        padding:12,
        flexDirection:'row',
        alignItems:'center',
    },
    subText:{
        fontSize:13,
        color:'#2c4341',
        paddingHorizontal:6
    }
})