import {ScrollView, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Service1 from '../assets/service1.jpeg';
import Service2 from '../assets/service2.jpeg';
import Service3 from '../assets/service3.jpeg';
import Service4 from '../assets/service4.jpeg';
import Service5 from '../assets/service5.jpeg';
import Service6 from '../assets/service6.jpeg';
import Service7 from '../assets/service7.jpeg';

const RecentSearchData = [
  {
    id: 1,
    image: Service1,
    title: 'Keep shopping for LED strip lights',
  },
  {
    id: 2,
    image: Service2,
    title: 'Keep shopping for Toy foam blasters',
  },
  {
    id: 3,
    image: Service3,
    title: 'Samsung Galaxy S20 80,000',
  },
  {
    id: 4,
    image: Service4,
    title: 'Continue browsing for it',
  },
  {
    id: 5,
    image: Service5,
    title: 'Keep shopping for kitchen accesories',
  },
  {
    id: 6,
    image: Service6,
    title: 'Top picks for you in food',
  },
  {
    id: 7,
    image: Service7,
    title: 'Top Deals in Home Appliances',
  },
];

export default function Services() {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{paddingRight:20}}
      style={styles.container}>
      <View style={styles.serviceContainer}>
        <View style={styles.row}>
          <View style={styles.innerContainer}>
            <Image
              style={styles.payImage}
              source={require('../assets/amazon-pay.png')}
            />
            <Text style={styles.title}>Amazon Pay</Text>
          </View>
          <View style={styles.innerContainer}>
            <Image
              style={styles.payImage}
              source={require('../assets/send-money.png')}
            />
            <Text style={styles.title}>Send Money</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.innerContainer}>
            <Image
              style={styles.payImage}
              source={require('../assets/scan-qr.jpeg')}
            />
            <Text style={styles.title}>Scan any QR</Text>
          </View>
          <View style={styles.innerContainer}>
            <Image
              style={styles.payImage}
              source={require('../assets/pay-bills.jpeg')}
            />
            <Text style={styles.title}>Pay Bills</Text>
          </View>
        </View>
      </View>
      {RecentSearchData.map(item => {
        return (
          <View key={item.id} style={styles.outercontainer}>
            <Text style={styles.recentsearch}>{item.title}</Text>
            <Image style={styles.serviceImg} source={item.image} />
          </View>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    top: -20,
    paddingHorizontal: 8,
  },
  serviceContainer: {
    backgroundColor: 'lightgrey',
    borderRadius: 5,
    elevation: 5,
  },
  row: {
    flexDirection: 'row',
  },
  payImage: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  innerContainer: {
    padding: 10,
    paddingTop: 15,
    alignItems: 'center',
  },
  title: {
    fontSize: 12,
    color: 'black',
  },
  outercontainer: {
    backgroundColor: 'white',
    marginLeft: 8,
    borderRadius: 5,
    elevation: 5,
    padding: 5,
    width: 140,
  },
  serviceImg: {
    width: '100%',
    height: 130,
  },
  recentsearch: {
    fontSize: 13,
    color: 'black',
    marginBottom: 8,
  },
});
