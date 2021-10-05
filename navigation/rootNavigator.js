import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { StyleSheet } from "react-native";
import React from 'react'
import HomeScreen from "../screens/HomeScreen";
import AlarmScreen from "../screens/AlarmScreen";
import TimerScreen from "../screens/TimerScreen";
import StopwatchScreen from "../screens/StopwatchScreen";
import CountdownScreen from "../screens/CountdownScreen";
import { Colors } from "react-native/Libraries/NewAppScreen";
const Tab=createMaterialTopTabNavigator()

export default function RootNavigator(){
    return(
    <Tab.Navigator initialRouteName="Home" backBehavior="history" style={styles.tabBarContainerStyle} screenOptions={
        {
            tabBarStyle:styles.tabBarTabsStyle
        }
    }>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Alarm" component={AlarmScreen} />
        <Tab.Screen name="Timer" component={TimerScreen} />
        <Tab.Screen name="Stopwatch" component={StopwatchScreen} />
    </Tab.Navigator>
    )
}


const styles=StyleSheet.create({
    tabBarContainerStyle:{
        opacity:1
    },
    tabBarTabsStyle:{
        opacity:1,
        
    }
})