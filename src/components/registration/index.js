import React, { Component } from 'react';
import { View ,Text } from 'react-native';
import Header from "./header"
import SocialRegister from "./social-register"
import MailRegister from "./mail-register"

const Register= ()=>{
    return(
        <View style={{ flex: 1, justifyContent:"center"}}>
            <Header />
            <SocialRegister />
            <MailRegister/>
        </View>

    );
  
}

export default Register;
