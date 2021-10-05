
import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { StyleSheet, Text, View,SafeAreaView ,StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './navigation/rootNavigator';
import { Provider } from 'react-redux';
import reduxStore from './redux/store';
import { getCurrentDate,getCurrentDay,getCurrentTime,getRelativeTimeFromNow } from './utils/Moment';
export default function App() {
  const dispatch=useDispatch
  return (
    
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
    
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
