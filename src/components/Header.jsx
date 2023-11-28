import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

export default function Header() {
  return (
    <View>
      <LinearGradient
        style={styles.container}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#88dae0', '#98e1d6', '#9ee4d4']}>
        <View style={styles.inputBox}>
          <View style={styles.inputBox2}>
          <Ionicons name="search" size={22} color="#1f1f1f" />
          <TextInput placeholder="Search Amazon.in" placeholderTextColor="#848484" />
          </View>
          <AntDesign name="scan1" size={22} color="#909594" />
        </View>
        <Feather name="mic" size={22} color="#000000" />
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding:10,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  inputBox:{
    width:'90%',
    flexDirection:'row',
    alignItems:'center',
    borderWidth:1,
    borderRadius:8,
    borderColor:'#a1bcc0',
    backgroundColor:'#ffffff',
    justifyContent:'space-between',
    paddingHorizontal:10,
    elevation:5,
  },
  inputBox2:{
    flexDirection:'row',
    alignItems:'center',
  }
});
