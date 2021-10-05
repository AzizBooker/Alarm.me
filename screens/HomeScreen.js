import React from 'react'
import { useEffect,useState } from 'react'
import { getRelativeTimeFromNow,getCurrentDate,getCurrentTime,getCurrentDay } from '../utils/Moment'
import { View ,Text,StyleSheet} from 'react-native'
import { Dimensions } from 'react-native'
import Colors from '../theme/Colors'

export default function HomeScreen() {
const [day,setDay]=useState(getCurrentDay)
const [date,setDate]=useState(getCurrentDate)
const [time,setTime]=useState(getCurrentTime)
    
useEffect(()=>{
    setInterval(
    function(){
        setDay(getCurrentDay) 
        setDate(getCurrentDate)
        setTime(getCurrentTime)
    }
,1000)

    return function cleanup(){
        clearInterval()
    }
})


    return (
        <View style={styles.container}>
            <Text style={styles.text}>Day:{day}</Text>
            <Text style={styles.text}>Time:{time}</Text>
            <Text style={styles.text}>Date:{date}</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.background

    },
    text:{
            color:Colors.primary
    }
})
