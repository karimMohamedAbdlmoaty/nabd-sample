import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableOpacity} from 'react-native';


const Header= ({navigation,allResources})=>{
    handleHome = ()=>{
        const change = allResources.map((category)=> {
            return category.categoryResources.filter((item)=>item.checked==true)
        })
        
        const changewww = allResources.map((category)=> {
            return category.categoryResources.map((item)=>item.id)
        })
        

        console.log("changechangechange",change)
        console.log("rrrrrrrrrrrrr",changewww)
 
        navigation.navigate('TabNavigation')

    }

    return(
      <View style={styles.container}>
        <View style={styles.save}>
            <TouchableOpacity style={styles.saveItem} onPress={this.handleHome}>
                <Text style={styles.saveItemText}>حفظ</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.newAccount}>
            <Text style={styles.newAccountText}>اختر مصادرك</Text>
        </View>
        <View style={styles.empty}></View>
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
        marginLeft:22,
        justifyContent:"center",
        alignItems: "center",

    },
    saveItem:{
        backgroundColor:"#FCE427",
        width:85,
        height:36,
        justifyContent:"center",
        alignItems: "center",
        borderRadius: 10,



    },
    saveItemText:{
        fontSize:18,
        fontWeight:"500",
        color:"#5A4C2A"
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
    
    empty: {
        flex:1,
        marginTop: 20,
        height: 50


    }

})
