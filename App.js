import React from 'react';
import { Text,  View, StyleSheet } from 'react-native';
import Primeiro from "./src/components/Primeiro"
import  CompPadrao , {Comp1, Comp2} from "./src/components/Multi"

export default () => (
  <View style={style.App}>
    <CompPadrao/>
    <Comp1/>
    <Comp2/>
    <Primeiro/>
  </View>
)

const style = StyleSheet.create ({
    App:{
        backgroundColor: 'white',
        flexGrow: 1, /* usado para preencher a tela toda(cor no caso)*/
        justifyContent: 'center', /* usado para alterar posição na vertical*/
        alignItems: 'center', /* usado para alterar posição na horizontal*/
    }
})

