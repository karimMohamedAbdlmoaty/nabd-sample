import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const TweetRegister= ()=>{
  return(
    <View style={styles.container}>
      <Icon.Button onPress={()=>console.log("DSsd")} size ={33} style={styles.buttonIcon} iconStyle={{marginRight:20,marginLeft:20}} name="facebook" backgroundColor="#21B1F5">
        <View style={styles.buttonText}>
          <Text style={styles.buttonTextContent}>
            التسجيل عبر حساب تويتر                    
          </Text>
        </View>
      </Icon.Button>
    </View>
  );
}

export default TweetRegister

const styles = StyleSheet.create({
    container:{
      flex:1,
      flexDirection:"row",
      marginTop:25,
      justifyContent:"center",
      alignItems:"center",
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
      color:"white" ,
      fontFamily: 'Arial', 
      fontSize: 25 ,
      paddingLeft:35
    }
  })
  
  
  
  
  