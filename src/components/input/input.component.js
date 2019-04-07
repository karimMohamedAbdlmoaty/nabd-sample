import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableHighlight,TextInput ,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {styles} from "./input.style";

export const Input =({ titleText,label,placeHolderText,borderBottomValue  })=>{
        return(
            <View style={[styles.container,{borderBottomWidth:borderBottomValue}]}>
                <View style={styles.fullName}>
                    <View style={styles.fullNameLabel}>
                        <Text> {label}</Text>
                    </View>
                    <View style={styles.fullNameInput}>
                        <TextInput
                            style={{  borderWidth: 0, paddingRight:8}}
                            placeholder = {placeHolderText}
                            // placeholderTextColor = "#525252" 
                        />
                    </View>
                </View>
            </View>
        
        
        )
};


