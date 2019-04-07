import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const FaceLogin= ()=>{
  return(
    <View style={styles.container} onPress={()=>console.log("jdfsfgjfgj")}>
      <Icon.Button onPress={()=>console.log("DSsd")} size ={33} style={styles.buttonIcon} iconStyle={{marginRight:20,marginLeft:20}} name="facebook" backgroundColor="#3b5998" >
        <View style={styles.buttonText}>
          <Text style={styles.buttonTextContent}>
          الدخول عبر حساب فيسبوك
          </Text>
        </View>
      </Icon.Button>
    </View>
  );
}

export default FaceLogin

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:"row",
    marginTop:30,
    justifyContent:"center",
    alignItems:"center",

  }, 

  buttonIcon:{
    flex:1,
    flexDirection:'row-reverse',
    width:335,
    
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
    paddingLeft:20
  }
})




