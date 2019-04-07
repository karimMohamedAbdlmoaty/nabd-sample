import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableHighlight,TextInput ,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {styles} from "./button.style";

export const Button =({ buttonText })=>{
        return(
            <View style={styles.container}>
                <TouchableOpacity style={styles.newAccount}>
                    <Text style={styles.newAccountText}> {buttonText} </Text>
                </TouchableOpacity>
            </View>        
        )
};

