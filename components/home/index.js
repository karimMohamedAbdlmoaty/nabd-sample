import React, { Component } from 'react';
import { View ,Text } from 'react-native';
import Header from "./Header";
import FooterBar from "./FooterBar";

const HomePage= ()=>{
    return(
        <View style={{ flex: 1, justifyContent:"center"}}>

            <Header />
            {/* <MainContent /> */}
            <View style={{ flex: 1, justifyContent:"center"}}></View>
            <FooterBar />

        </View>

);
  
}

export default HomePage;
