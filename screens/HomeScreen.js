import React from "react";
import { useEffect, useState,useCallback } from "react";
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
import { setIsActive } from "../redux/actions/controller.actions";
import { Dimensions } from "react-native";
import handleGlobalTouch from "../utils/handleGlobalTouch";
import Colors from "../theme/Colors";
import FontSize from "../theme/FontSize";
import reduxStore from "../redux/store";
import { bold } from "cli-boxes";
import CustomText from "../components/CustomText";
import CustomButton from "../components/CustomButton";

export default function HomeScreen() {
  const dispatch=useDispatch()
  const inactivityTime=useSelector(state=>{state.controller.inactivityTime})
  const isActive=useSelector((state)=>state.controller.isActive)
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


  const  handleTouch=useCallback(
    () => {
      console.log('tap')
      dispatch(setIsActive(true))
      setTimeout(()=>{
        dispatch(setIsActive(false),
        console.log('isActive dispatched')
        )},5000)
    },
    [dispatch],
  )

  return (
    <TouchableWithoutFeedback onPress={handleTouch}>
      <View style={styles.container}>
        <StatusBar hidden={false} />
        <View style={styles.textContainer}>
          <CustomText fontSize={FontSize.h3}>{day}</CustomText>
          <CustomText fontSize={FontSize.h1} fontWeight="bold">{time}</CustomText>
          <CustomText fontSize={FontSize.h3} >{date}</CustomText>
          <CustomText>hi</CustomText>
          <CustomButton variants="outlined" title="Hello" paddingHorizontal={15} fontWeight="bold" 
          onPress={()=>{console.log('Hello')}}/>
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
    fontWeight:"bold",
    marginVertical:5,
  }
});
