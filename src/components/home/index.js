import React, { Component } from 'react';
import { View ,Text } from 'react-native';
import Header from "./header";
import FooterBar from "./footer-bar";
import MainContent from "./main-content";

const HomePage= ()=>{
    return(
        <View style={{ flex: 1, justifyContent:"center"}}>

            <Header />
            <MainContent />
            {/* <FooterBar /> */}

        </View>

);
  
}

export default HomePage;
