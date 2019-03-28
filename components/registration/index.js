import React, { Component } from 'react';
import { View ,Text } from 'react-native';
import Header from "./Header"
import SocialRegister from "./SocialRegister"
import MailRegister from "./MailRegister"

const Register= ()=>{
    return(
        <View style={{ flex: 1, justifyContent:"center"}}>
            <Header />
            <SocialRegister />
            <MailRegister/>
            {/* <Policy /> */}
        </View>

    );
  
}

export default Register;
