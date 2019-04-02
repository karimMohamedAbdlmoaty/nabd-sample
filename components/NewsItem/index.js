import React, { Component } from 'react';
import { View ,Text } from 'react-native';
import Header from "./Header"

const NewsItem= ()=>{
    return(
        <View style={{ flex: 1, justifyContent:"center"}}>
            <Header />
        </View>

    );
  
}

export default NewsItem;
