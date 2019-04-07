import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import IconTwo from 'react-native-vector-icons/MaterialIcons'


const Header= ()=>{
    return(
      <View style={styles.container}>
        <View style={styles.leftIcons}>

            <TouchableOpacity>
                <IconTwo style={styles.liveIcon} name="live-tv" size={30} color="red" />
            </TouchableOpacity>


            <TouchableOpacity>
                <Icon style={styles.settingsIcon} name="ios-settings" size={30} color="white" />
            </TouchableOpacity>


        </View>

        <View style={styles.newAccount}>
            <Text style={styles.newAccountText}>آخر الأخبار</Text>
        </View>

        <TouchableOpacity style={styles.search}>
            <Icon style={styles.iconItem} name="ios-search" size={30} color="white" />
        </TouchableOpacity>

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
    leftIcons:{
        flex:1,
        flexDirection:"row",
        marginTop: 20,
        height: 50,
        justifyContent:"center",
        alignItems:"center",
    },
    liveIcon:{
        marginLeft:10,
    },
    settingsIcon:{
        marginLeft:22,
    },
    newAccount:{
        flex:2,
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
    
    search: {
        flex:1,
        marginTop: 20,
        height: 50,
        justifyContent:"center",
        alignItems:"center",

    }

})
