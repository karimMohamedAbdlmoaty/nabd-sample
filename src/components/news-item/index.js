import React, { Component } from 'react';
import { View ,Text , StyleSheet ,FlatList,TouchableOpacity} from 'react-native';
import Header from "./header"
import Icon from 'react-native-vector-icons/Ionicons'



const NewsItem= ({navigation})=>{
    handleResources = ()=>{
        navigation.navigate('Resources')
    };
    
    const sourcesData= [
        {sourceLabel:"مصر"          , sourceIcon:"ios-flag" },
        {sourceLabel:"مصادر عالمية" , sourceIcon:"ios-globe" },
        {sourceLabel:"رياضة"        , sourceIcon:"ios-football" },
        {sourceLabel:"تكنولوجيا"    , sourceIcon:"ios-wifi" },
        {sourceLabel:"اقتصاد"       , sourceIcon:"ios-trending-up" },
        {sourceLabel:"عالم حواء"    , sourceIcon:"ios-basket" },
        {sourceLabel:"صحة"          , sourceIcon:"ios-heart" },
        {sourceLabel:"سيارات"       , sourceIcon:"ios-car" },
        {sourceLabel:"منوعات"       , sourceIcon:"ios-albums" },
        {sourceLabel:"السعودية"     , sourceIcon:"ios-flag" },
        {sourceLabel:"الكويت"       , sourceIcon:"ios-flag" },
        {sourceLabel:"اليمن"        , sourceIcon:"ios-flag" },
    ];
    return(
        <View style={styles.container}>
            <Header  navigation={navigation}/>
            <View style={styles.body}>
                <FlatList
                    data={sourcesData}
                    renderItem={({item}) => 
                        <View style={styles.sourceItem}>
                            <View style={styles.iconItem}><TouchableOpacity onPress={this.handleResources}><Icon name="ios-arrow-back" size={20} color="#353333" /></TouchableOpacity></View>
                            <View style={styles.iconText}><Text style={styles.iconTextContent}>{item.sourceLabel}</Text></View>           
                            <View style={styles.iconItemTwo}><Icon name={item.sourceIcon} size={30} color="red" /></View>
                        </View>
                    }

                />
            </View>

        </View>

    );
  
}


export default NewsItem;

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        justifyContent:"center",
    },
    body:{
        flex: 1,
        justifyContent:"center",

    },
    sourceItem:{
        // backgroundColor:"blue",
        flexDirection:"row",
        height:53

    },
    iconItem:{
        flex: 1, 
        // backgroundColor:"yellow",
        justifyContent:"center",
        alignItems:"center",


    },
    iconItemTwo:{
        flex: 1, 
        // backgroundColor:"yellow",
        justifyContent:"center",
        alignItems:"center",
    },
    iconText:{
        flex: 6,        
        justifyContent:"center",
        alignItems:"flex-end",
    },
    iconTextContent:{
        fontSize:20,
        color:"#353333",


    }

})
