import React, { Component } from 'react';
import { View ,Text } from 'react-native';
import Header from "./Header"

const Login = ({navigation})=>{
    return(
        <View style={{ flex: 1, justifyContent:"center"}}>
            <Header />
            <Text style={{ flex: 1, justifyContent:"center"}}>magazines</Text>

        </View>

    )
  
}

export default Login;
