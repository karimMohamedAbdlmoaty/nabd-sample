import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from "./header.style";

export const Header= ({headerTitle,iconName,navigation,prev})=>{
    console.log("prevprevprevprev",prev)
    handleBack = ()=> prev ? navigation.navigate(prev) : navigation.goBack()

    return(
      <View style={styles.container}>
        <View style={styles.left}>
            <TouchableOpacity onPress={ handleBack }>
                <Icon style={styles.iconItem} name={iconName} size={33} color="white" />
            </TouchableOpacity>
        </View>

        <View style={styles.middle}>
            <Text style={styles.middleText}>{headerTitle}</Text>
        </View>
        <View style={styles.right}></View>
      </View>
    );
  
}

 

