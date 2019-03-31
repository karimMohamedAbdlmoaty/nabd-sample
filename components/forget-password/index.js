import React, { Component } from 'react';
import { View ,Text } from 'react-native';
import Header from "./Header"
import MailVerification from "./MailVerification"

const ForgetPassword= ()=>{
    return(
        <View style={{ flex: 1, justifyContent:"center"}}>
            <Header />
            <MailVerification />
        </View>

    );
  
}

export default ForgetPassword;
