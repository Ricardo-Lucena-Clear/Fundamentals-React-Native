import React from "react";
import { Text } from "react-native";
import Estilo from "./estilo";

export default (props) =>{
    return (
        <Text style={Estilo.TxtG}>
            O valor {props.max} é maior que o valor {props.min}
        </Text>
    )
} 