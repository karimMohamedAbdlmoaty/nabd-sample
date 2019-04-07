import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableHighlight,TextInput ,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {styles} from "./policy.style";

export const Policy =({ label})=>{
    return(
        <View style={styles.container}>
            <View style={styles.policy}>
                <Text style={styles.policyText}> By tapping "{label}" . 
                    you agree the 
                    <Text style={styles.colored}>  Trerms of Service </Text>
                        and
                    <Text style={styles.colored}> Privacy Policy</Text>
                </Text>
            </View>
        </View>
    )
};


