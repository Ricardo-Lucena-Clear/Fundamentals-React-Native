import React from 'react'
import { View, StyleSheet } from 'react-native'

import Botao from './src/components/Botao'

export default () => (
    <View style={style.App}>
     <Botao/>
       
    </View>
)

const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    },

})