import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { getRating } from '../utils/helper';

export default function ProductScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Results</Text>
      <Text style={styles.info}>price and other details may vary based on product size and color.</Text>
      <View style={styles.productContainer}>
        <View style={styles.imageBox}>
          <Image style={{width:'100%', height:160, resizeMode:'contain'}} source={require('../assets/prod1.png')} />
        </View>
        <View style={styles.productInfo}>
          <Text style={{fontSize:14, marginBottom:4}}>Sponsored</Text>
          <Text style={styles.productName}>Samsung Galaxy M04 Green, 4GB Ram, 64GB Storage | Upto 8GB RAM | 5000MAH Battery</Text>
          <View style={styles.ratingContainer}>
            <Text style={styles.rating}>3.9</Text>
            {getRating(3.9)}
            <Text style={styles.ratingCount}>6,080</Text>
          </View>
          <View style={styles.priceTag}>
           <Text style={styles.price}>₹ 17,299.00</Text>
           <Text>M.R.P</Text>
           <Text style={styles.crossOut}>₹ 19,299.00</Text>
          </View>
          <Text style={styles.cashback}>Up to 5% cashback with Amazon pay credit card</Text>
          <Image style={{width:70, height:17,marginTop:4, marginBottom:3}} source={require('../assets/prime-logo.png')} />
          <Text>FREE Delivery by Monday, 19 June</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:10,
  },
  text:{
    fontSize:20,
    color:'black',
    fontWeight:'bold'
  },
  info:{
    fontSize:12,
  },
  productContainer:{
    flexDirection:'row',
    width:'100%',
    borderWidth:1,
    borderColor:'#dddddd'
  },
  imageBox:{
    width:'40%',
    backgroundColor:'#dddddd',
    justifyContent:'center',
    alignItems:'center'
  },
  productInfo:{
    width:'60%',
    padding:10
  },
  productName:{
    color:'#000000',
    fontSize:14.3,
    fontWeight:'400'
  },
  ratingContainer:{
    flexDirection:'row',
    alignItems:'center',
    marginTop:5
  },
  rating:{
    fontSize:11,
    color:'#017185',
    marginRight:9
  },
  ratingCount:{
    fontSize:11,
    color:'#017185',
    marginLeft:5
  },
  priceTag:{
    flexDirection:'row',
    marginTop:5
  },
  price:{
    fontSize:16,
    color:'#000000',
    fontWeight:'500',
    marginRight:5
  },
  crossOut:{
    textDecorationLine:'line-through',
    marginLeft:6
  },
  cashback:{
    marginTop:5,
    fontSize:9.5,
    fontWeight:'bold'
  }
})