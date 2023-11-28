import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

export default function Brands() {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.headerTitle}> Brands of the day</Text>
      <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image
          style={styles.imageOne}
          source={require('../assets/brand1.jpeg')}
        />
        <Text style={styles.infoTitle}>Min. 20% off | CaratLane Diamond Neklace</Text>
      </View>
      <View style={styles.imgContainer}>
        <Image
          style={styles.imageOne}
          source={require('../assets/brand2.jpeg')}
        />
        <Text style={styles.infoTitle}>Min. 40% off | Fossil, Titan Smart Watch & more</Text>
      </View>
    </View>
    <View style={styles.container}>
    <View style={styles.imgContainer}>
      <Image
        style={styles.imageOne}
        source={require('../assets/brand3.jpeg')}
      />
      <Text style={styles.infoTitle}>Heels-Upto 50% OFF on Heeled Sandals, Hign Heels</Text>
    </View>
    <View style={styles.imgContainer}>
      <Image
        style={styles.imageOne}
        source={require('../assets/brand4.jpeg')}
      />
      <Text style={styles.infoTitle}>Sony 60W Bluetooth Soundbar Speaker Audio Engine</Text>
    </View>
  </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer:{
    marginTop:10
  },
  headerTitle:{
    fontSize:18,
    paddingTop:20,
    marginBottom:10,
    color:'black',
    fontWeight:'bold',
    paddingHorizontal:10,
    borderTopWidth:1,
    borderTopColor:'#dddddd'
  },
  container: {
    flexDirection: 'row',
  },
  imgContainer:{
    padding:10,
    width:'50%',
    alignItems:'flex-start'
    },
  imageOne: {
    height: 150,
    width: '100%',
    borderRadius:6
  },
  infoTitle:{
    color:'black',
    fontSize:14,
    marginTop:3
  }
});
