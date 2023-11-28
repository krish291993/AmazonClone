import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
// import {Catagory} from '../data/Catagory';
import Fresh from '../assets/fresh.jpeg';
import Deals from '../assets/deals.png';
import Beauty from '../assets/beauty.png';
import Mobiles from '../assets/mobiles.jpeg';
import MiniTV from '../assets/minitv.jpeg';
import Fashion from '../assets/fashion.png';
import Prime from '../assets/prime.jpeg';
import Electronics from '../assets/electronics.jpeg';
import Home from '../assets/home.jpeg';
import Travel from '../assets/travel.jpeg';
import Furniture from '../assets/furniture.png';
import Pharmacy from '../assets/pharmacy.jpeg';
import Movies from '../assets/movies.png';
import Books from '../assets/books.jpeg';
import HomeAppliances from '../assets/home-appliances.png';
import More from '../assets/more.png';
import { useNavigation } from '@react-navigation/native';

const Catagory = [
  {
    id: 1,
    image: Fresh,
    title: 'Fresh',
  },
  {
    id: 2,
    image: Deals,
    title: 'Deals',
  },
  {
    id: 3,
    image: Beauty,
    title: 'Beauty',
  },
  {
    id: 4,
    image: Mobiles,
    title: 'Mobiles',
  },
  {
    id: 5,
    image: MiniTV,
    title: 'miniTV',
  },
  {
    id: 6,
    image: Fashion,
    title: 'Fashion',
  },
  {
    id: 7,
    image: Prime,
    title: 'Prime',
  },
  {
    id: 8,
    image: Electronics,
    title: 'Electronics',
  },
  {
    id: 9,
    image: Home,
    title: 'Home',
  },
  {
    id: 10,
    image: Travel,
    title: 'Travel',
  },
  {
    id: 11,
    image: Furniture,
    title: 'Furniture',
  },
  {
    id: 12,
    image: Pharmacy,
    title: 'Pharmacy',
  },
  {
    id: 13,
    image: Movies,
    title: 'Movies',
  },
  {
    id: 14,
    image: Books,
    title: 'Books, Toys',
  },
  {
    id: 15,
    image: HomeAppliances,
    title: 'Appliances',
  },
  {
    id: 16,
    image: More,
    title: 'More',
  },
];


export default function Catagories() {
  const navigation = useNavigation();
  return (
    <ScrollView
      horizontal
      style={styles.container}
      showsHorizontalScrollIndicator={false}>
      {Catagory.map(item => {
        return (
          <View key={item.id} style={styles.CatagoriesStyle}>
            <TouchableOpacity onPress={() => navigation.navigate('ProductScreen')}> 
              <Image source={item.image} style={styles.image} />
              <Text style={styles.title}>{item.title}</Text>
            </TouchableOpacity>
          </View>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    padding: 10,
  },
  CatagoriesStyle: {
    paddingHorizontal: 8,
    alignItems: 'center',
  },
  image: {
    height: 50,
    width: 50,
  },
  title: {
    fontSize: 10,
    color: '#2c4341',
  },
});
