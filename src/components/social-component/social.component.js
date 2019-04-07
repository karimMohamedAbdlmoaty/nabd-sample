import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {styles} from "./social.style";


export const SocialButton= ({socialTitle,socialWeb,SocialButtonStyles})=>{
  
  if (socialWeb==="facebook" ) {
    iconMarginRight=15;
    iconMarginLeft=20;
    
  } else {
    iconMarginRight=11;
    iconMarginLeft=17;
  }

  const {socialBackgroundColor,textColor,iconColor}=SocialButtonStyles
  return(
    <View style={styles.container} >
      <Icon.Button onPress={()=>console.log("DSsd")} 
        size ={33} 
        style={styles.buttonIcon} 
        iconStyle={{color:iconColor,marginRight:iconMarginRight,marginLeft:iconMarginLeft}} 
        name={socialWeb} 
        backgroundColor={socialBackgroundColor} >
        <View style={styles.buttonText}>
          <Text style={[styles.buttonTextContent,{color:textColor} ]}>{socialTitle}</Text>
        </View>
      </Icon.Button>
    </View>
  );
}

 