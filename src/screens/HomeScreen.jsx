import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {ViewPropTypes} from 'deprecated-react-native-prop-types';
import React from 'react';
import Header from '../components/Header';
import SubHeader from '../components/SubHeader';
import Catagories from '../components/Catagories';
import CarouselItem from '../components/CarouselItem';
import Services from '../components/Services';
import PriceDeals from '../components/PriceDeals';
import Brands from '../components/Brands';
import ProductScreen from './ProductScreen';

export default function HomeScreen() {
  return (
    <ScrollView>
      <Header />
      <SubHeader />
      <Catagories />
      <CarouselItem />
      <Services />
      <PriceDeals />
      <Brands />
      <ProductScreen />
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
