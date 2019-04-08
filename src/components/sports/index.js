import React, { Component } from 'react';
import { View ,Text } from 'react-native';
import Header from "./header"

const Login = ({navigation})=>{
    return(
        <View style={{ flex: 1, justifyContent:"center"}}>
            <Header navigation={navigation}/>
            <Text style={{ flex: 1, justifyContent:"center"}}>sports</Text>

        </View>

    )
  
}

export default Login;
