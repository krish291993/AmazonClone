import { StyleSheet, Text, View, StatusBar } from 'react-native'
import React from 'react'
import Router from './src/navigation/Router'

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="#9ee4d4" barStyle="dark-content" />
      <Router />
    </>
  )
}

const styles = StyleSheet.create({})