import React from 'react'
import FontSize from './theme/FontSize';
import {View,Text,StyleSheet } from 'react-native'
import { bold } from 'cli-boxes';


//variants Options: H1,H2,H3,H4,p
//weight Options: Bold,Normal(default)
//color

export default function CustomText({variants,weight,color,children}) {  
    return (
        <View>
        <Text  >{children}</Text>
        </View>
    )
}


const styles=StyleSheet.create({
    text:{

    },
    h1:{
        fontSize:FontSize.h1
    },
    h2:{
        fontSize:FontSize.h2
    },
    h3:{
        fontSize:FontSize.h3
        },
    p:{
        fontSize:FontSize.p
    },
    normal:{
        fontWeight:normal
    },
    bold:{
        fontWeight:bold
    }
})