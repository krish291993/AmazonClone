import { StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'

export default function PriceDeals() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recommended deal for you</Text>
      <Image style={styles.imgDeal} source={require('../assets/nykaa.jpeg')} />
      <View style={styles.priceContainer}>
        <Text style={styles.textOne}>18% off</Text>
        <Text style={styles.textTwo}>Deal</Text>
      </View>
      <View style={styles.mrpContainer}>
        <View style={styles.mrpContainerTwo}>
        <Text style={styles.mrpOne}>₹ 1,549.00 </Text>
        <Text>M.R.P.</Text>
        </View>
        <Text style={styles.mrpTwo}>₹ 1,895.00</Text>
      </View>
      <Text style={styles.script}>Nykaa Face Wash Gentle Skin Cleanser for all skin type</Text>
      <Text style={styles.href}>See all deals</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    
  },
  imgDeal:{
    width:'100%',
    height:250,
    // here we use resizeMode instead of backgroudSize 
    resizeMode:'stretch'
  },
  title:{
    paddingHorizontal:10,
    fontSize:18,
    fontWeight:'bold',
    color:'black',
    marginBottom:10,
  },
  priceContainer:{
    flexDirection:'row',
    alignItems:'center',
    padding:10,
  },
  textOne:{
    backgroundColor:'red',
    color:'white',
    fontSize:15,
    padding:10,
    borderRadius:4,
  },
  textTwo:{
    color:'red',
    fontSize:16,
    fontWeight:'bold',  
    paddingHorizontal:10,
  },
  mrpContainer:{
    flexDirection:'row',
    alignItems:'center',
    padding:10,
  },
  mrpContainerTwo:{
    flexDirection:'row',
    alignItems:'center',
  },
  mrpOne:{
    fontSize:20,
    fontWeight:'400',
    color:'black'
  },
  mrpTwo:{
    paddingHorizontal:12,
    // we are using cross the line in price discount
    textDecorationLine:'line-through',
  },
  script:{
    color:'black',
    paddingHorizontal:10,
    fontSize:14.5,
    fontWeight:'500'
  },
  href:{
    padding:10,
    color:'green',
    fontSize:18,
  }
})