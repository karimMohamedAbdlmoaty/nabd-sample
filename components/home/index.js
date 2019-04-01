import React, { Component } from 'react';
import { View ,Text } from 'react-native';
import Header from "./Header";
import FooterBar from "./FooterBar";
import MainContent from "./MainContent";

const HomePage= ()=>{
    return(
        <View style={{ flex: 1, justifyContent:"center"}}>

            <Header />
            <MainContent />
            <FooterBar />

        </View>

);
  
}

export default HomePage;
