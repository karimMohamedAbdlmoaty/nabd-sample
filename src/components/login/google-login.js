import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const GoogleLogin= ()=>{
  return(
    <View style={styles.container}>
      <Icon.Button onPress={()=>console.log("DSsd")} size ={33} style={styles.buttonIcon} iconStyle={{marginRight:15,marginLeft:15}} color="#0A7DF7" name="google" backgroundColor="#cbcfd3">
        <View style={styles.buttonText}>
          <Text style={styles.buttonTextContent}>
           الدخول عبر حساب جوجل
          </Text>
        </View>
      </Icon.Button>
    </View>
  );
}

export default GoogleLogin;

const styles = StyleSheet.create({
    container:{
      flex:1,
      flexDirection:"row",
      marginTop:25,
      justifyContent:"center",
      alignItems:"center",
      marginBottom:10,

    }, 
  
    buttonIcon:{
      flex:1,
      flexDirection:'row-reverse',
      width:335
    }, 
  
    buttonText:{
      flex:1,
      justifyContent:"center",
      borderRightColor:"white",
      borderRightWidth:1,
      height:100    ,                 //question
    },
  
    buttonTextContent:{
      color:"#676767" ,       
      fontFamily: 'Arial', 
      fontSize: 25 ,
      paddingLeft:27
    }
  })
  
  
  
  
  