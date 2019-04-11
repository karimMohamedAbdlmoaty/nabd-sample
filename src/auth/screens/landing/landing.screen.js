import React, { Component } from 'react';
import { View , Text, StyleSheet ,TouchableOpacity } from 'react-native';
import Header from "../../../components/choose-resources/header";
import {styles} from './landing.style';


export const Landing= ({navigation})=>{
    handleLogin = ()=>{
        navigation.navigate('Login',{prev:"Landing"})
    };

    handleNewsItem = ()=>{
        navigation.navigate('ChooseResources')
    };
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
                    <TouchableOpacity onPress={this.handleNewsItem}><Text style={styles.chooseText}>اختيار مصادرك</Text></TouchableOpacity>
                </View>

                <View style={styles.login}>
                    <TouchableOpacity onPress={this.handleLogin}><Text style={styles.loginText}>تسجيل الدخول (لاسترجاع مصادرك ) </Text></TouchableOpacity>
                </View>
                {/* </View> */}

            </View>

        </View>

    );
  
}


