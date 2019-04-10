import React, { Component } from 'react';
import { View ,Text } from 'react-native';
import {Header} from "./header";
import {MainContent} from "./main-content";

export const HomePage= ()=>{
    return(
        <View style={{ flex: 1, justifyContent:"center"}}>

            <Header />
            <MainContent />

        </View>

);
  
}


