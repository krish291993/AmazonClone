import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ViewPropTypes} from 'deprecated-react-native-prop-types';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';

const NativeStack = createNativeStackNavigator();

export default function Router() {
  return (
      <NavigationContainer>
        <NativeStack.Navigator screenOptions={()=>({headerShown:false})}>
          <NativeStack.Screen name="HomeScreen" component={HomeScreen} />
          <NativeStack.Screen name="ProductScreen" component={ProductScreen} />
        </NativeStack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
