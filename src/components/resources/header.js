import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'


const Header= ({navigation})=>{

    return(
      <View style={styles.container}>
        <View style={styles.save}>
            <TouchableOpacity style={styles.saveIcon}><Icon name="ios-arrow-back" size={30} color="white" /></TouchableOpacity>
        </View>
        <View style={styles.newAccount}>
            <Text style={styles.newAccountText}>مصر</Text>
        </View>
        <View style={styles.empty}>
            <TouchableOpacity><Icon name="ios-search" size={30} color="white" /></TouchableOpacity>
        </View>
      </View>
    );
}
export default Header;

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#2C8BC9",
        flexDirection:"row",
        justifyContent:"center",
        height: 70, 
    },
    save:{
        flex:1,
        marginTop: 20,
        height: 50,
        justifyContent:"center",
        alignItems: "flex-start",
        // backgroundColor:"green",
        // marginLeft:20


    },
    saveIcon:{
        marginLeft:25
    },
    saveItemText:{
        fontSize:18,
        fontWeight:"500",
        color:"white"
    },
    
    newAccount:{
        flex:2,
        color:"white",
        justifyContent:"center",
        alignItems: "center",
        marginTop: 20,
        height: 50,
        // backgroundColor:"red",

    },
    newAccountText:{
        color:"white",
        fontSize: 22
    },
    
    empty: {
        flex:1,
        marginTop: 20,
        height: 50,
        // backgroundColor:"blue",
        justifyContent:"center",
        alignItems: "center",

    }

})
