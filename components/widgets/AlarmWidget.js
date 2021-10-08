import React from 'react'
import { View,Switch,StyleSheet } from 'react-native'
import { Grid,Col,Row } from 'react-native-easy-grid'
import CustomText from '../CustomText'
import CustomButton from '../CustomButton'
export default function AlarmWidget() {
    return (
        <View style={styles.container}>
            <CustomText>Hello</CustomText>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        backgroundColor:"#fff",
        height:60,
        flexDirection:'column'

    }
})
