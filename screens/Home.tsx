import React, {Component} from "react";
import {View, Text, StyleSheet} from "react-native";
import {Header} from "../components/Header";

export default class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Header/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0a0a0a",
        justifyContent: "center",
        alignItems: "center",
    }
});
