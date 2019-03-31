import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'


const Header= ()=>{
    return(
      <View style={styles.container}>
        <View style={styles.icon}>
            <TouchableOpacity>
                <Icon style={styles.iconItem} name="ios-arrow-back" size={30} color="white" />
            </TouchableOpacity>
        </View>

        <View style={styles.newAccount}>
            <Text style={styles.newAccountText}> نسيت كلمة السر</Text>
        </View>

        <View style={styles.empty}></View>

      </View>
    );
  
}

export default Header;

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#2C8BC9",
        //paddingRight:15 ,
        //paddingLeft:25 ,
        flexDirection:"row",
        justifyContent:"center",
        height: 70, 
    },
    icon:{
        flex:1,
        marginTop: 20,
        height: 50,
        justifyContent:"center",
    },
    iconItem:{
        marginLeft:22,



    },
    newAccount:{
        flex:2,
        // alignSelf: "stretch",
        // paddingBottom:1,
        //paddingTop:5,
        color:"white",
        justifyContent:"center",
        alignItems: "center",
        marginTop: 20,
        height: 50


    },
    newAccountText:{
        color:"white",
        fontSize: 22
    },
    
    empty: {
        flex:1,
        marginTop: 20,
        height: 50


    }

})
