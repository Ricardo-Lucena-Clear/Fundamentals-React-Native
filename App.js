import React from 'react'
import { View, StyleSheet } from 'react-native'

import Titulo from './src/components/Titulo'

export default () => (
    <View style={style.App}>
      <Titulo principal = "Cadastro Produto"
      secundario="Tela de Cadastro"/>
       
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