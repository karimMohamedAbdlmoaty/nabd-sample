import React, { Component } from 'react';
import { View ,Text } from 'react-native';
import Header from "./header"
import MailVerification from "./mail-verification"


const ForgetPassword= ({navigation})=>{
    return(
        <View style={{ flex: 1, justifyContent:"center"}}>
            <Header navigation={navigation}/>
            <MailVerification />
        </View>

    );
  
}

export default ForgetPassword;


// export * from "./forget-password"
