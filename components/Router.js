import React from 'react';
import { createStackNavigator } from 'react-navigation';
import ChooseResources from "./choose-resources";
import login from "./login";
import Home from "./home";

export const Router = createStackNavigator(
    {
        ChooseResources:{
            screen: ChooseResources,
            navigationOptions: {
                title: "ChooseResources",
            },

        },
        Home:{
            screen: Home,
            navigationOptions: {
                title: "Home",
            },
        },
        Login:{
            screen: login,
            navigationOptions: {
                title: "Login",
            },
        },

    },
    {
        headerMode:"none"
    }
)