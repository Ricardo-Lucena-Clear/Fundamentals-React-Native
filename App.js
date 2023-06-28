import React from 'react';
import { Text,  View } from 'react-native';
import Primeiro from "./src/components/Primeiro"
import  CompPadrao , {Comp1, Comp2} from "./src/components/Multi"

export default () => (
  <View>
    <CompPadrao/>
    <Comp1/>
    <Comp2/>
    <Primeiro/>
  </View>
)

