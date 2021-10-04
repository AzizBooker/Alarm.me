import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getCurrentDate,getCurrentDay,getCurrentTime,getRelativeTimeFromNow } from './utils/Moment';
export default function App() {

  getRelativeTimeFromNow('Monday, 12:01 am',"Monday, 12:02 am")
  return (
    <View style={styles.container}>
      <Text>Your doing great Aziz!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
