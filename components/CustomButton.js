
import React from 'react'
import {View,Text,TouchableOpacity,StyleSheet, TouchableNativeFeedbackComponent } from 'react-native'
import Colors from '../theme/Colors'
export default function CustomButton({variants="filled",title="button",backgroundColor="#ccc",color="#fff",
onPress,disabled=false,paddingVertical,paddingHorizontal,fontWeight="normal"}) {
    return (
        <View style={{justifyContent:'center',alignItems:"center"}}>
            <TouchableOpacity 
            style={{...styles.button,borderWidth:1,
                borderColor:(variants=="filled" ? backgroundColor : color),
                backgroundColor:(variants=="filled" ? backgroundColor : Colors.transparent),
                paddingVertical:paddingVertical,paddingHorizontal:paddingHorizontal
            }}
            onPress={onPress}>
                <Text style={{color:color,fontWeight:fontWeight}}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles=StyleSheet.create({
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10,
        borderRadius:5
      },
})