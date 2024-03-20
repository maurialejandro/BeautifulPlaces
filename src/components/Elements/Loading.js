import React from "react";
import {ActivityIndicator, Text, View} from "react-native";
import {styles} from "../styles";
export const Loading = (props) => {
    const {text} = props;
    return (
        <View style={styles.loadingView} >
            <ActivityIndicator size="x-large" color="#9c9c9c" />
            { text && <Text style={styles.txtTitleLoading}> {text} </Text> }
        </View>
    )
}