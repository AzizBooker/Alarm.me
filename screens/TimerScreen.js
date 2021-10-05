import React from 'react'
import { View,Text,TouchableWithoutFeedback,StyleSheet,StatusBar } from 'react-native'
import handleGlobalTouch from '../utils/handleGlobalTouch';
export default function TimerScreen() {
    return (           
            <TouchableWithoutFeedback onPress={handleGlobalTouch}>
              <View style={styles.container}>
                  <StatusBar hidden={true} />
                  <Text>Timer Screen</Text>
              </View>
            </TouchableWithoutFeedback>
          );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 25,
  },
  text: {
    color: Colors.primary,
  },
});