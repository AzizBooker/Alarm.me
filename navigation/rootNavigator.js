import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { useSelector } from "react-redux";
import { StyleSheet } from "react-native";
import React from 'react'
import { useEffect } from "react";
import HomeScreen from "../screens/HomeScreen";
import AlarmScreen from "../screens/AlarmScreen";
import TimerScreen from "../screens/TimerScreen";
import StopwatchScreen from "../screens/StopwatchScreen";
import CountdownScreen from "../screens/CountdownScreen";
import Colors from "../theme/Colors";
import store from "../redux/store";
const Tab=createMaterialBottomTabNavigator()

export default function RootNavigator(){

    var isActive=useSelector((state)=>state.controller.isActive)

    return(
    <Tab.Navigator 
    initialRouteName="Home" 
     backBehavior="history" 
     style={styles.tabBarContainerStyle}
    
     labeled={true} 
     shifting={false}
    barStyle={{display:(isActive==true?'flex' :"flex" ), backgroundColor: Colors.background }}
     
     screenOptions={
        {
            tabBarActiveTintColor:"tomato"
        }
    }>
        <Tab.Screen name="Home" 
        component={HomeScreen}
        options={{}}
        
        />
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