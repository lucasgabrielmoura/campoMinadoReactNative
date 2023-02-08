import React from "react"
import { View, StyleSheet, Text,  } from "react-native"
import params from "../params"

type tiposMinas = {
    mined?: boolean,
    opened?: boolean,
    nearMines: number,
}

export default function Field(props:tiposMinas){



    const styles = StyleSheet.create({
        field: {
            height: params.blockSize,
            width: params.blockSize,
            borderWidth: params.borderSize,
        },
        regular: {
            backgroundColor: "#999",
            borderLeftColor: "#ccc",
            borderTopColor: "#ccc",
            borderRightColor: "#333",
            borderBottomColor: "#333"
        },
        opened: {
            backgroundColor:"#999",
            borderColor: "#777",
            alignItems: "center",
            justifyContent: "center"
        },
        label:{
            fontWeight: "bold",
            fontSize: params.fontSize,
        }
    })


    const styleField:any = [styles.field]
    //Outros estilos aqui!
    if(props.opened)styleField.push(styles.opened);
    if(styleField.length === 1) styleField.push(styles.regular);

    let color = "";
    if(props.nearMines > 0){
        if(props.nearMines == 1) color = "#2A28D7"
        if(props.nearMines == 2) color = "#2B520F"
        if(props.nearMines? props.nearMines > 2  && props.nearMines < 6: 0) color = "#F9060A"
        if(props.nearMines? props.nearMines >= 6 : 0) color = "#F221A9"

    }

    return(
        <View style={styleField}>
            {!props.mined && props.opened && props.nearMines > 0?
                <Text style={[styles.label, color?{color: color}:{color:"#000"}]}>{props.nearMines}</Text>:false}
        </View>
    )
}