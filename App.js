import React from 'react'
import { View, StyleSheet } from 'react-native'

import Contador from './src/components/Contador'

export default () => (
    <View style={style.App}>
     <Contador inicial={100}/>
       
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