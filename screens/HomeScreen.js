import React from "react";
import { useEffect, useState } from "react";
import {
  getRelativeTimeFromNow,
  getCurrentDate,
  getCurrentTime,
  getCurrentDay,
} from "../utils/Moment";
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  SafeAreaView,
  TouchableWithoutFeedback,
  Touchable,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Dimensions } from "react-native";
import handleGlobalTouch from "../utils/handleGlobalTouch";
import Colors from "../theme/Colors";
import FontSize from "../theme/FontSize";
import reduxStore from "../redux/store";
import { bold } from "cli-boxes";

export default function HomeScreen() {
  const [day, setDay] = useState(getCurrentDay);
  const [date, setDate] = useState(getCurrentDate);
  const [time, setTime] = useState(getCurrentTime);

  useEffect(() => {
    setInterval(function () {
      setDay(getCurrentDay);
      setDate(getCurrentDate);
      setTime(getCurrentTime);
    }, 1000);

    return function cleanup() {
      clearInterval();
    };
  });
  return (
    <TouchableWithoutFeedback onPress={handleGlobalTouch}>
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <View style={styles.textContainer}>
          <Text style={{...styles.text,fontSize:FontSize.h2 }}>{day}</Text>
          <Text style={{...styles.text,fontSize:FontSize.h1}}>{time}</Text>
          <Text style={{...styles.text,fontSize:FontSize.h2}}>{date}</Text>
        </View>
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
  textContainer: {
      flex:1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: Colors.primary,
    fontWeight:"bold"
  },
});
