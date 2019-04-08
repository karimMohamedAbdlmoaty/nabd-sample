import React from 'react';
import { createStackNavigator , createTabNavigator } from 'react-navigation';
import ChooseResources from "./src/components/choose-resources";
import NewsItem from "./src/components/news-item";
import Home from "./src/components/home";
import MyResources from "./src/components/my-resources";
import MyAccount from "./src/components/my-account";
import Sports from "./src/components/sports";
import Magazines from "./src/components/magazines";
import Icon from 'react-native-vector-icons/Ionicons'
import IconTwo from 'react-native-vector-icons/FontAwesome5';
import Resources from "./src/components/resources";

// import Login from "./src/components/login";Login
import {Register} from "./src/auth";
import {Login} from "./src/auth";
import ForgetPassword from "./src/components/forget-password";


const sharedRoutes = createStackNavigator(
    {
        Login: {
            screen: Login,
            navigationOptions: {
                title: "Login",
            },
        },
        Register: {
            screen: Register,
            navigationOptions: {
                title: "Register",
            },
        },
        ForgetPassword: {
            screen: ForgetPassword,
            navigationOptions: {
                title: "ForgetPassword",
            },
        },
    },
    {
        // mode: 'modal',
        headerMode:"none",
    }
);


const HomeStackNavigator = createStackNavigator(
    {
        Home:{
            screen: Home,
            navigationOptions: {
                title: "Home",
            },
        },
    },
    {
        headerMode:"none"
    }
);

const MyResourcesStackNavigator = createStackNavigator(
    {
        MyResources:{
            screen: MyResources,
            navigationOptions: {
                title: "MyResources",
            },
        },
    },
    {
        headerMode:"none"
    }
);

const MyAccountStackNavigator = createStackNavigator(
    {
        MyAccount:{
            screen: MyAccount,
            navigationOptions: {
                title: "MyAccount",
            },
        },
    },
    {
        headerMode:"none"
    }
);

const SportsStackNavigator = createStackNavigator(
    {
        Sports:{
            screen: Sports,
            navigationOptions: {
                title: "Sports",
            },
        },
    },
    {
        headerMode:"none"
    }
);

const MagazinesStackNavigator = createStackNavigator(
    {
        Magazines:{
            screen: Magazines,
            navigationOptions: {
                title: "Magazines",
            },
        },
    },
    {
        headerMode:"none"
    }
);



const TabNavigation = createTabNavigator({
    HomeStackNavigator:{
        screen: HomeStackNavigator,
        navigationOptions: {
            title: "آخر الأخبار",
            tabBarIcon: ({ tintColor }) => 
            <IconTwo name="globe-americas" size={30} style={{ color: tintColor }} />
            

        },

    },

    SportsStackNavigator:{
        screen: SportsStackNavigator,
        navigationOptions: {
            title: "رياضة",
            tabBarIcon: ({ tintColor }) => 
            <Icon name="ios-football" size={30}  style={{ color: tintColor }} />

        },
    },



    MyResourcesStackNavigator:{
        screen: MyResourcesStackNavigator,
        navigationOptions: {
            title: "مصادري",
            tabBarIcon: ({ tintColor }) => 
            <Icon name="ios-list" size={30}  style={{ color: tintColor }} />

        },
    },

    MagazinesStackNavigator:{
        screen: MagazinesStackNavigator,
        navigationOptions: {
            title: "مجلات نبض",
            tabBarIcon: ({ tintColor }) => 
            <IconTwo name="book-open" size={30} style={{ color: tintColor }} />

        },
    },

    MyAccountStackNavigator:{
        screen: MyAccountStackNavigator,
        navigationOptions: {
            title: "حسابي",
            tabBarIcon: ({ tintColor }) => 
            <Icon name="ios-headset" size={30} style={{ color: tintColor }} />

        },
    },

    // tabBarOptions: {
    //     activeTintColor: '#e91e63',
    //     labelStyle: {
    //       fontSize: 10,
    //     },
    //     style: {
    //       backgroundColor: 'red',
    //     },
    // }



})

// export const ChooseResourcesNavigator = createStackNavigator(
//     {
//         ChooseResources :{
//             screen: ChooseResources,
//             navigationOptions: {
//                 title: "ChooseResources",
//             },
//         },
//     },
//     {
//         Resources :{
//             screen: Resources,
//             navigationOptions: {
//                 title: "Resources",
//             },
//         },
//     },
//     {
//         headerMode:"none"
//     }
// )

const MainNavigator = createStackNavigator(
    {
        ChooseResources:{
            screen: ChooseResources,
            navigationOptions: {
                title: "ChooseResources",

            },

        },

        TabNavigation:{
            screen: TabNavigation,
            navigationOptions: {
                title: "TabNavigation",
            },
        },

        NewsItem:{
            screen: NewsItem,
            navigationOptions: {
                title: "NewsItem",
            },
        },

        Resources:{
            screen: Resources,
            navigationOptions: {
                title: "Resources",
            },
        },

       
    },
    {
        headerMode:"none",
    }
)

export const Router = createStackNavigator(
    {
        MainNavigator:{
            screen: MainNavigator,
            navigationOptions: {
                title: "MainNavigator",
            },
        },

        sharedRoutes:{
            screen: sharedRoutes,
            navigationOptions: {
                title: "sharedRoutes",   
            },
        },

        // Login: {
        //     screen: login,
        //     navigationOptions: {
        //         title: "login",
        //     },
        // },
        // Register: {
        //     screen: Register,
        //     navigationOptions: {
        //         title: "Register",
        //     },
        // },
        // ForgetPassword: {
        //     screen: ForgetPassword,
        //     navigationOptions: {
        //         title: "ForgetPassword",
        //     },
        // },

       
    },
    {
        headerMode:"none",
        mode: 'modal',
    }
)


