import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../theme/Colors";
import FontSize from "../theme/FontSize";

//variants Options: H1,H2,H3,H4,p
//weight Options: Bold,Normal(default)
//color

export default function CustomText({ weight="normal",fontSize=FontSize.p, color=Colors.primary, children }) {
  return (
      <Text style={{color:color,fontWeight:weight,fontSize:fontSize}}>{children}</Text>
  );
}

const styles = StyleSheet.create({
  text: {},
  h1: {
    fontSize: FontSize.h1,
  },
  h2: {
    fontSize: FontSize.h2,
  },
  h3: {
    fontSize: FontSize.h3,
  },
  p: {
    fontSize: FontSize.p,
  },
  normal: {
    fontWeight: "normal",
  },
  bold: {
    fontWeight: "bold",
  },
});
