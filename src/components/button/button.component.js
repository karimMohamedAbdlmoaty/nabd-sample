import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableHighlight,TextInput ,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {styles} from "./button.style";

export const Button =({ buttonText, buttonStyles,nextScreen,navigation})=>{
    console.log("buttonStyles",buttonStyles)

    handleRegister = ()=>{
        navigation.navigate(nextScreen)
    }

    const {buttonColor,buttonBackgroundColor,align} = buttonStyles
        return(
            <View style={styles.container}>
                <TouchableOpacity style={[styles.newAccount,{backgroundColor:buttonBackgroundColor,alignItems:align}]} onPress={this.handleRegister}>
                    <Text style={[styles.newAccountText,{color:buttonColor}]}> {buttonText} </Text>
                </TouchableOpacity>
            </View>        
    )
};

