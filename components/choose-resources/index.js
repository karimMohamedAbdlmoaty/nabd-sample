import React, { Component } from 'react';
import { View , Text, StyleSheet ,TouchableOpacity } from 'react-native';
import Header from "./Header"

const ChooseResources= ()=>{
    return(
        <View style={styles.container}>
            <Header />
            <View style={styles.innerContainer}>
                <View style={styles.chooseYourResources}>
                    <Text style={styles.chooseYourResourcesText}>قم باختيار مصادرك المفضلة</Text>
                    <Text style={styles.chooseYourResourcesText}>وتابع آخر الأخبار لحظة بلحظة</Text>
                </View>

                <View style={styles.receiveNotifications}>
                    <Text style={styles.receiveNotificationsText}>كما يمكنك استلام تنبيهات بالأخبار </Text>
                    <Text style={styles.receiveNotificationsText}>العاجلة من مصادرك المختارة</Text>
                </View>

                {/* <View style={styles.goToResources}> */}
                <View style={styles.choose}>
                    <TouchableOpacity><Text style={styles.chooseText}>اختيار مصادرك</Text></TouchableOpacity>
                </View>

                <View style={styles.login}>
                    <TouchableOpacity><Text style={styles.loginText}>تسجيل الدخول (لاسترجاع مصادرك ) </Text></TouchableOpacity>
                </View>
                {/* </View> */}

            </View>

        </View>

    );
  
}

export default ChooseResources;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
    },
    innerContainer:{
        flex:1,
        alignItems:"center",
        justifyContent:"space-between"

    },
    chooseYourResources:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        

    },
    chooseYourResourcesText:{
        fontSize:20,
        fontWeight:"bold"
    },
    receiveNotifications:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
    },
    receiveNotificationsText:{
        color:"#474747",
        fontSize:20,
    },
    goToResources:{
        flex:1,
        alignItems:"center",
        justifyContent:"space-around",
        backgroundColor:"brown",
        // width:250

    },
    choose:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        // backgroundColor:"red",
    },
    chooseText:{
        backgroundColor:"#F3DC1E",
        alignItems:"center",
        justifyContent:"center",
        width:250,
        height:55,
        paddingLeft:75,
        paddingTop:15,
        fontSize:15,
        fontWeight:"bold"

    },
    login:{
        flex:1,

    },
    loginText:{
        color:"#21B1F5",
    }
})

