import React, { Component } from 'react';
import { View ,Text ,StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import IconTwo from 'react-native-vector-icons/FontAwesome5';

const FooterBar= ()=>{
    return(
        <View style={styles.container}>

            <View style={styles.latestNews}>
                <IconTwo name="globe-americas" size={30} color="#418BBF" />
                <Text style={styles.latestNewsText}>آخر الأخبار</Text>
            </View>

            <View style={styles.sport}>
                <Icon name="ios-football" size={30} color="#929292" />
                <Text style={styles.underText}>رياضة </Text>
            </View>

            <View style={styles.myResources}>
                <Icon style={styles.myResourcesIcon} name="ios-list" size={30} color="#929292" />
                <Text style={styles.underText}> مصادري</Text>
            </View>

            <View style={styles.nabdMagazine}>
                <IconTwo name="book-open" size={30} color="#929292" />
                <Text style={styles.underText}>مجلات نبض</Text>
            </View>

            <View style={styles.myAccount}>
                <Icon name="ios-headset" size={30} color="#929292" />
                <Text style={styles.underText}> حسابي</Text>
            </View>
            
        </View>

);
  
}

export default FooterBar;

const styles = StyleSheet.create({
    container:{
        // flex:1,
        // backgroundColor:"red",
        flexDirection:"row",
        height:60,
        alignItems:"center",
        borderTopWidth:2,
        borderTopColor:"#C9C8C9"

    },

    latestNews:{
        flex:1,
        // backgroundColor:"blue",
        justifyContent:"center",
        alignItems:"center",


    },

    latestNewsText:{
        color:"#418BBF"

    },

    sport:{
        flex:1,
        // backgroundColor:"brown",
        justifyContent:"center",
        alignItems:"center",


    },

    myResources:{
        flex:1,
        // backgroundColor:"blue",
        justifyContent:"center",
        alignItems:"center",


    },


    nabdMagazine:{
        flex:1,
        // backgroundColor:"brown",
        justifyContent:"center",
        alignItems:"center",


    },

    myAccount:{
        flex:1,
        // backgroundColor:"blue",
        justifyContent:"center",
        alignItems:"center",


    },

    underText:{
        color:"#929292"
    }

})

