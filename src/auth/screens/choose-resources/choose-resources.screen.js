import React, { Component } from 'react';
import { View ,Text , StyleSheet ,FlatList,TouchableOpacity} from 'react-native';
import Header from "../../../components/news-item/header"
import Icon from 'react-native-vector-icons/Ionicons'
import {styles} from './choose-resources.style'
import { connect } from 'react-redux';
import * as resourcesActions from '../../auth.action'
import store from '../../../store';


class ChooseResourcesScreen extends React.Component{
    handleResources = (item)=>{
        this.props.navigation.navigate('Resources',{item})
    };


    componentDidMount(){
        const sourcesData= [
            {id:1,  categoryLabel:"مصر"          , categoryIcon:"ios-flag"       ,categoryResources: [
                {sourceLabel:" ONTV قناة"         ,followers:"مثابع 1,015,585" , subTitle:"رقم كذا في مصر " , checked:true ,id:13},
                {sourceLabel:"قناة الحياة"        ,followers:"مثابع 1,015,585" , subTitle:"رقم كذا في مصر " , checked:true ,id:14  },
                {sourceLabel:"قناة العربية - مصر" ,followers:"مثابع 2,525,125" , subTitle:"رقم كذا في مصر " , checked:false,id:15 },
                {sourceLabel:" TeN قناة"          ,followers:"مثابع 6,025,925" , subTitle:"رقم كذا في مصر " , checked:true ,id:16  },
                {sourceLabel:"قناة الغد"          ,followers:"مثابع 8,025,825" , subTitle:"رقم كذا في مصر " , checked:true ,id:17  },
                {sourceLabel:"وكالة أنباء أونا"   ,followers:"مثابع 5,025,525" , subTitle:"رقم كذا في مصر " , checked:false,id:18  },
                {sourceLabel:"بوابة الأهرام"       ,followers:"مثابع 4,025,525" , subTitle:"رقم كذا في مصر " , checked:true ,id:19  },
                {sourceLabel:"قناة الحياة"        ,followers:"مثابع 7,025,525" , subTitle:"رقم كذا في مصر " , checked:true ,id:20  },
                {sourceLabel:"قناة الغد"          ,followers:"مثابع 8,025,825" , subTitle:"رقم كذا في مصر " , checked:true ,id:21  },
                {sourceLabel:"وكالة أنباء أونا"   ,followers:"مثابع 5,025,525" , subTitle:"رقم كذا في مصر " , checked:false,id:22  },
                {sourceLabel:"بوابة الأهرام"       ,followers:"مثابع 4,025,525" , subTitle:"رقم كذا في مصر " , checked:true ,id:23  },
                {sourceLabel:"قناة الحياة"        ,followers:"مثابع 7,025,525" , subTitle:"رقم كذا في مصر " , checked:true ,id:24  },
                {sourceLabel:"قناة الغد"          ,followers:"مثابع 8,025,825" , subTitle:"رقم كذا في مصر " , checked:true ,id:25  },
                {sourceLabel:"وكالة أنباء أونا"   ,followers:"مثابع 5,025,525" , subTitle:"رقم كذا في مصر " , checked:false,id:26  },
                {sourceLabel:"بوابة الأهرام"       ,followers:"مثابع 4,025,525" , subTitle:"رقم كذا في مصر " , checked:true ,id:27  },
                {sourceLabel:"قناة الحياة"        ,followers:"مثابع 7,025,525" , subTitle:"رقم كذا في مصر " , checked:true ,id:28 },
            ] },
            {id:2,  categoryLabel:"مصادر عالمية" , categoryIcon:"ios-globe"      ,categoryResources: [
                {sourceLabel:" CNN قناة"          ,followers:"مثابع 1,015,585" , subTitle:"رقم كذا في العالم " , checked:true  ,id:29 },
                {sourceLabel:"قناة الجزيرة"        ,followers:"مثابع 1,015,585" , subTitle:"رقم كذا في العالم " , checked:true ,id:30  },
                {sourceLabel:"قناة العربية "       ,followers:"مثابع 2,525,125" , subTitle:"رقم كذا في العالم " , checked:false,id:31 },
                {sourceLabel:" TeN قناة"          ,followers:"مثابع 6,025,925" , subTitle:"رقم كذا في العالم " , checked:true  ,id:32},
                {sourceLabel:"قناة الغد"          ,followers:"مثابع 8,025,825" , subTitle:"رقم كذا في العالم " , checked:true  ,id:33 },
                {sourceLabel:"وكالة أنباء أونا"   ,followers:"مثابع 5,025,525" , subTitle:"رقم كذا في العالم " , checked:false ,id:34 },
                {sourceLabel:"بوابة الأهرام"       ,followers:"مثابع 4,025,525" , subTitle:"رقم كذا في العالم " , checked:true  ,id:35},
                {sourceLabel:"قناة الحياة"        ,followers:"مثابع 7,025,525" , subTitle:"رقم كذا في العالم " , checked:true  ,id:36},
                {sourceLabel:"قناة الغد"          ,followers:"مثابع 8,025,825" , subTitle:"رقم كذا في العالم " , checked:true  ,id:37 },
                {sourceLabel:"وكالة أنباء أونا"   ,followers:"مثابع 5,025,525" , subTitle:"رقم كذا في العالم " , checked:false ,id:38 },
                {sourceLabel:"بوابة الأهرام"       ,followers:"مثابع 4,025,525" , subTitle:"رقم كذا في العالم " , checked:true  ,id:39 },
                {sourceLabel:"قناة الحياة"        ,followers:"مثابع 7,025,525" , subTitle:"رقم كذا في العالم " , checked:true  ,id:40 },
                {sourceLabel:"قناة الغد"          ,followers:"مثابع 8,025,825" , subTitle:"رقم كذا في العالم " , checked:true  ,id:41},
                {sourceLabel:"وكالة أنباء أونا"   ,followers:"مثابع 5,025,525" , subTitle:"رقم كذا في العالم " , checked:false ,id:42 },
                {sourceLabel:"بوابة الأهرام"       ,followers:"مثابع 4,025,525" , subTitle:"رقم كذا في العالم " , checked:true  ,id:43},
                {sourceLabel:"قناة الحياة"        ,followers:"مثابع 7,025,525" , subTitle:"رقم كذا في العالم " , checked:true  ,id:44},
            ]  },
            {id:3,  categoryLabel:"رياضة"        , categoryIcon:"ios-football"   ,categoryResources: [
                {sourceLabel:" sport قناة"          ,followers:"مثابع 1,015,585" , subTitle:"رقم كذا في العالم " , checked:true   ,id:45},
                {sourceLabel:"قناة الجزيرة الرياضية"        ,followers:"مثابع 1,015,585" , subTitle:"رقم كذا في العالم " , checked:true   ,id:46},
                {sourceLabel:"قناة العربية الرياضية "       ,followers:"مثابع 2,525,125" , subTitle:"رقم كذا في العالم " , checked:false  ,id:47},
                {sourceLabel:" TeSp قناة"          ,followers:"مثابع 6,025,925" , subTitle:"رقم كذا في العالم " , checked:true  ,id:48 },
                {sourceLabel:"قناة الرياضة"          ,followers:"مثابع 8,025,825" , subTitle:"رقم كذا في العالم " , checked:true  ,id:49 },
                {sourceLabel:"وكالة أنباء أونا"   ,followers:"مثابع 5,025,525" , subTitle:"رقم كذا في العالم " , checked:false ,id:50 },
                {sourceLabel:"بوابة الأهرام الرياضية"       ,followers:"مثابع 4,025,525" , subTitle:"رقم كذا في العالم " , checked:true ,id:51  },
                {sourceLabel:"قناة الحياة الرياضية"        ,followers:"مثابع 7,025,525" , subTitle:"رقم كذا في العالم " , checked:true  ,id:52 },
                {sourceLabel:"قناة الغد"          ,followers:"مثابع 8,025,825" , subTitle:"رقم كذا في العالم " , checked:true  ,id:53 },
                {sourceLabel:"وكالة أنباء أونا"   ,followers:"مثابع 5,025,525" , subTitle:"رقم كذا في العالم " , checked:false  ,id:54},
                {sourceLabel:"بوابة الأهرام"       ,followers:"مثابع 4,025,525" , subTitle:"رقم كذا في العالم " , checked:true  ,id:55 },
                {sourceLabel:"قناة الحياة"        ,followers:"مثابع 7,025,525" , subTitle:"رقم كذا في العالم " , checked:true  ,id:56 },
                {sourceLabel:"قناة الغد"          ,followers:"مثابع 8,025,825" , subTitle:"رقم كذا في العالم " , checked:true   ,id:57},
                {sourceLabel:"وكالة أنباء أونا"   ,followers:"مثابع 5,025,525" , subTitle:"رقم كذا في العالم " , checked:false ,id:58 },
                {sourceLabel:"بوابة الأهرام"       ,followers:"مثابع 4,025,525" , subTitle:"رقم كذا في العالم " , checked:true  ,id:59 },
                {sourceLabel:"قناة الحياة"        ,followers:"مثابع 7,025,525" , subTitle:"رقم كذا في العالم " , checked:true  ,id:60 },
            ]   },
            {id:4,  categoryLabel:"تكنولوجيا"    , categoryIcon:"ios-wifi"       ,categoryResources: [
                {sourceLabel:"  قناةتكنولوجيا"          ,followers:"مثابع 1,015,585" , subTitle:"رقم كذا في العالم " , checked:true  ,id:61 },
                {sourceLabel:"قناة الجزيرة تكنولوجيا"        ,followers:"مثابع 1,015,585" , subTitle:"رقم كذا في العالم " , checked:true  ,id:62 },
                {sourceLabel:"قناة العربية الرياضية "       ,followers:"مثابع 2,525,125" , subTitle:"رقم كذا في العالم " , checked:false ,id:63 },
                {sourceLabel:" TTec قناة"          ,followers:"مثابع 6,025,925" , subTitle:"رقم كذا في العالم " , checked:true   ,id:64},
                {sourceLabel:"قناة تكنولوجيا"          ,followers:"مثابع 8,025,825" , subTitle:"رقم كذا في العالم " , checked:true   ,id:65},
                {sourceLabel:"وكالة أنباء أونا"   ,followers:"مثابع 5,025,525" , subTitle:"رقم كذا في العالم " , checked:false ,id:66 },
                {sourceLabel:"بوابة الأهرام تكنولوجيا"       ,followers:"مثابع 4,025,525" , subTitle:"رقم كذا في العالم " , checked:true  ,id:67 },
                {sourceLabel:"قناة الحياة تكنولوجيا"        ,followers:"مثابع 7,025,525" , subTitle:"رقم كذا في العالم " , checked:true   ,id:68},
                {sourceLabel:"قناة الغد"          ,followers:"مثابع 8,025,825" , subTitle:"رقم كذا في العالم " , checked:true   ,id:69},
                {sourceLabel:"وكالة أنباء أونا"   ,followers:"مثابع 5,025,525" , subTitle:"رقم كذا في العالم " , checked:false  ,id:70},
                {sourceLabel:"بوابة الأهرام"       ,followers:"مثابع 4,025,525" , subTitle:"رقم كذا في العالم " , checked:true   ,id:71},
                {sourceLabel:"قناة الحياة"        ,followers:"مثابع 7,025,525" , subTitle:"رقم كذا في العالم " , checked:true   ,id:72},
                {sourceLabel:"قناة الغد"          ,followers:"مثابع 8,025,825" , subTitle:"رقم كذا في العالم " , checked:true   ,id:73},
                {sourceLabel:"وكالة أنباء أونا"   ,followers:"مثابع 5,025,525" , subTitle:"رقم كذا في العالم " , checked:false  ,id:74},
                {sourceLabel:"بوابة الأهرام"       ,followers:"مثابع 4,025,525" , subTitle:"رقم كذا في العالم " , checked:true   ,id:75},
                {sourceLabel:"قناة الحياة"        ,followers:"مثابع 7,025,525" , subTitle:"رقم كذا في العالم " , checked:true   ,id:76},
            ]   },
            {id:5,  categoryLabel:"اقتصاد"       , categoryIcon:"ios-trending-up",categoryResources: [
                {sourceLabel:"  قناة اقتصاد"          ,followers:"مثابع 1,015,585" , subTitle:"رقم كذا في العالم " , checked:true   ,id:77},
                {sourceLabel:"قناة الجزيرة اقتصاد"        ,followers:"مثابع 1,015,585" , subTitle:"رقم كذا في العالم " , checked:true   ,id:78},
                {sourceLabel:"قناة العربية اقتصاد "       ,followers:"مثابع 2,525,125" , subTitle:"رقم كذا في العالم " , checked:false  ,id:79},
                {sourceLabel:" TECo قناة"          ,followers:"مثابع 6,025,925" , subTitle:"رقم كذا في العالم " , checked:true  ,id:80 },
                {sourceLabel:"قناة اقتصاد"          ,followers:"مثابع 8,025,825" , subTitle:"رقم كذا في العالم " , checked:true  ,id:81 },
                {sourceLabel:"وكالة أنباء أونا"   ,followers:"مثابع 5,025,525" , subTitle:"رقم كذا في العالم " , checked:false  ,id:82},
                {sourceLabel:"بوابة الأهرام اقتصاد"       ,followers:"مثابع 4,025,525" , subTitle:"رقم كذا في العالم " , checked:true  ,id:83 },
                {sourceLabel:"قناة الحياة اقتصاد"        ,followers:"مثابع 7,025,525" , subTitle:"رقم كذا في العالم " , checked:true  ,id:84 },
                {sourceLabel:"قناة الغد"          ,followers:"مثابع 8,025,825" , subTitle:"رقم كذا في العالم " , checked:true  ,id:85 },
                {sourceLabel:"وكالة أنباء أونا"   ,followers:"مثابع 5,025,525" , subTitle:"رقم كذا في العالم " , checked:false  ,id:86},
                {sourceLabel:"بوابة الأهرام"       ,followers:"مثابع 4,025,525" , subTitle:"رقم كذا في العالم " , checked:true  ,id:87 },
                {sourceLabel:"قناة الحياة"        ,followers:"مثابع 7,025,525" , subTitle:"رقم كذا في العالم " , checked:true ,id:88  },
                {sourceLabel:"قناة الغد"          ,followers:"مثابع 8,025,825" , subTitle:"رقم كذا في العالم " , checked:true   ,id:89},
                {sourceLabel:"وكالة أنباء أونا"   ,followers:"مثابع 5,025,525" , subTitle:"رقم كذا في العالم " , checked:false ,id:90 },
                {sourceLabel:"بوابة الأهرام"       ,followers:"مثابع 4,025,525" , subTitle:"رقم كذا في العالم " , checked:true  ,id:91 },
                {sourceLabel:"قناة الحياة"        ,followers:"مثابع 7,025,525" , subTitle:"رقم كذا في العالم " , checked:true  ,id:92 },
            ]   },
            {id:6,  categoryLabel:"عالم حواء"    , categoryIcon:"ios-basket"     ,categoryResources: [
                {sourceLabel:"  قناة المرأة"          ,followers:"مثابع 1,015,585" , subTitle:"رقم كذا في العالم " , checked:true  ,id:93 },
                {sourceLabel:"قناة  المرأة٢"        ,followers:"مثابع 1,015,585" , subTitle:"رقم كذا في العالم " , checked:true   ,id:94 },
                {sourceLabel:"قناة العربية المرأة "       ,followers:"مثابع 2,525,125" , subTitle:"رقم كذا في العالم " , checked:false ,id:95  },
                {sourceLabel:" TWom قناة"          ,followers:"مثابع 6,025,925" , subTitle:"رقم كذا في العالم " , checked:true  ,id:96  },
                {sourceLabel:"قناة المرأة"          ,followers:"مثابع 8,025,825" , subTitle:"رقم كذا في العالم " , checked:true  ,id:97  },
                {sourceLabel:"وكالة أنباء أونا"   ,followers:"مثابع 5,025,525" , subTitle:"رقم كذا في العالم " , checked:false  ,id:98 },
                {sourceLabel:"بوابة الأهرام المرأة"       ,followers:"مثابع 4,025,525" , subTitle:"رقم كذا في العالم " , checked:true ,id:99   },
                {sourceLabel:"قناة الحياة المرأة"        ,followers:"مثابع 7,025,525" , subTitle:"رقم كذا في العالم " , checked:true   ,id:100 },
                {sourceLabel:"قناة الغد"          ,followers:"مثابع 8,025,825" , subTitle:"رقم كذا في العالم " , checked:true  ,id:101  },
                {sourceLabel:"وكالة أنباء أونا"   ,followers:"مثابع 5,025,525" , subTitle:"رقم كذا في العالم " , checked:false  ,id:102 },
                {sourceLabel:"بوابة الأهرام"       ,followers:"مثابع 4,025,525" , subTitle:"رقم كذا في العالم " , checked:true   ,id:103 },
                {sourceLabel:"قناة الحياة"        ,followers:"مثابع 7,025,525" , subTitle:"رقم كذا في العالم " , checked:true   ,id:104 },
                {sourceLabel:"قناة الغد"          ,followers:"مثابع 8,025,825" , subTitle:"رقم كذا في العالم " , checked:true   ,id:105 },
                {sourceLabel:"وكالة أنباء أونا"   ,followers:"مثابع 5,025,525" , subTitle:"رقم كذا في العالم " , checked:false ,id:106  },
                {sourceLabel:"بوابة الأهرام"       ,followers:"مثابع 4,025,525" , subTitle:"رقم كذا في العالم " , checked:true   ,id:107 },
                {sourceLabel:"قناة الحياة"        ,followers:"مثابع 7,025,525" , subTitle:"رقم كذا في العالم " , checked:true  ,id:108  },
            ]},
            {id:7,  categoryLabel:"صحة"          , categoryIcon:"ios-heart"      ,categoryResources: [
                {sourceLabel:"  قناة صحة"          ,followers:"مثابع 1,015,585" , subTitle:"رقم كذا في العالم " , checked:true  ,id:109 },
                {sourceLabel:"2قناة صحة"        ,followers:"مثابع 1,015,585" , subTitle:"رقم كذا في العالم " , checked:true   ,id:110},
                {sourceLabel:"قناة العربية صحة "       ,followers:"مثابع 2,525,125" , subTitle:"رقم كذا في العالم " , checked:false,id:111  },
                {sourceLabel:" T-HEALTH قناة"          ,followers:"مثابع 6,025,925" , subTitle:"رقم كذا في العالم " , checked:true   ,id:112},
                {sourceLabel:"قناة صحة"          ,followers:"مثابع 8,025,825" , subTitle:"رقم كذا في العالم " , checked:true  ,id:113 },
                {sourceLabel:"وكالة أنباء أونا"   ,followers:"مثابع 5,025,525" , subTitle:"رقم كذا في العالم " , checked:false  ,id:114},
                {sourceLabel:"بوابة الأهرام صحة"       ,followers:"مثابع 4,025,525" , subTitle:"رقم كذا في العالم " , checked:true  ,id:115 },
                {sourceLabel:"قناة الحياة صحة"        ,followers:"مثابع 7,025,525" , subTitle:"رقم كذا في العالم " , checked:true   ,id:116},
                {sourceLabel:"قناة الغد"          ,followers:"مثابع 8,025,825" , subTitle:"رقم كذا في العالم " , checked:true  ,id:117 },
                {sourceLabel:"وكالة أنباء أونا"   ,followers:"مثابع 5,025,525" , subTitle:"رقم كذا في العالم " , checked:false  ,id:118},
                {sourceLabel:"بوابة الأهرام"       ,followers:"مثابع 4,025,525" , subTitle:"رقم كذا في العالم " , checked:true   ,id:119},
                {sourceLabel:"قناة الحياة"        ,followers:"مثابع 7,025,525" , subTitle:"رقم كذا في العالم " , checked:true  ,id:120 },
                {sourceLabel:"قناة الغد"          ,followers:"مثابع 8,025,825" , subTitle:"رقم كذا في العالم " , checked:true  ,id:121 },
                {sourceLabel:"وكالة أنباء أونا"   ,followers:"مثابع 5,025,525" , subTitle:"رقم كذا في العالم " , checked:false ,id:122 },
                {sourceLabel:"بوابة الأهرام"       ,followers:"مثابع 4,025,525" , subTitle:"رقم كذا في العالم " , checked:true  ,id:123 },
                {sourceLabel:"قناة الحياة"        ,followers:"مثابع 7,025,525" , subTitle:"رقم كذا في العالم " , checked:true  ,id:124 },
            ]   },
            {id:8,  categoryLabel:"سيارات"       , categoryIcon:"ios-car"        ,categoryResources: [
                {sourceLabel:"  قناة سيارات"          ,followers:"مثابع 1,015,585" , subTitle:"رقم كذا في العالم " , checked:true  ,id:125 },
                {sourceLabel:"2قناة سيارات"        ,followers:"مثابع 1,015,585" , subTitle:"رقم كذا في العالم " , checked:true  ,id:126 },
                {sourceLabel:"قناة العربية سيارات "       ,followers:"مثابع 2,525,125" , subTitle:"رقم كذا في العالم " , checked:false ,id:127},
                {sourceLabel:" T-CAR قناة"          ,followers:"مثابع 6,025,925" , subTitle:"رقم كذا في العالم " , checked:true  ,id:128 },
                {sourceLabel:"قناة سيارات"          ,followers:"مثابع 8,025,825" , subTitle:"رقم كذا في العالم " , checked:true  ,id:129 },
                {sourceLabel:"وكالة أنباء أونا"   ,followers:"مثابع 5,025,525" , subTitle:"رقم كذا في العالم " , checked:false  ,id:130},
                {sourceLabel:"بوابة الأهرام سيارات"       ,followers:"مثابع 4,025,525" , subTitle:"رقم كذا في العالم " , checked:true ,id:131  },
                {sourceLabel:"قناة الحياة سيارات"        ,followers:"مثابع 7,025,525" , subTitle:"رقم كذا في العالم " , checked:true ,id:132 },
                {sourceLabel:"قناة الغد"          ,followers:"مثابع 8,025,825" , subTitle:"رقم كذا في العالم " , checked:true   ,id:133},
                {sourceLabel:"وكالة أنباء أونا"   ,followers:"مثابع 5,025,525" , subTitle:"رقم كذا في العالم " , checked:false ,id:134 },
                {sourceLabel:"بوابة الأهرام"       ,followers:"مثابع 4,025,525" , subTitle:"رقم كذا في العالم " , checked:true  ,id:135 },
                {sourceLabel:"قناة الحياة"        ,followers:"مثابع 7,025,525" , subTitle:"رقم كذا في العالم " , checked:true  ,id:136 },
                {sourceLabel:"قناة الغد"          ,followers:"مثابع 8,025,825" , subTitle:"رقم كذا في العالم " , checked:true   ,id:137},
                {sourceLabel:"وكالة أنباء أونا"   ,followers:"مثابع 5,025,525" , subTitle:"رقم كذا في العالم " , checked:false ,id:138 },
                {sourceLabel:"بوابة الأهرام"       ,followers:"مثابع 4,025,525" , subTitle:"رقم كذا في العالم " , checked:true  ,id:139 },
                {sourceLabel:"قناة الحياة"        ,followers:"مثابع 7,025,525" , subTitle:"رقم كذا في العالم " , checked:true  ,id:140 },
            ]   },
            {id:9,  categoryLabel:"منوعات"       , categoryIcon:"ios-albums"     ,categoryResources: [
                {sourceLabel:"  قناة منوعات"          ,followers:"مثابع 1,015,585" , subTitle:"رقم كذا في العالم " , checked:true  ,id:141 },
                {sourceLabel:"2قناة منوعات"        ,followers:"مثابع 1,015,585" , subTitle:"رقم كذا في العالم " , checked:true  ,id:142 },
                {sourceLabel:"قناة العربية منوعات "       ,followers:"مثابع 2,525,125" , subTitle:"رقم كذا في العالم " , checked:false ,id:143 },
                {sourceLabel:" T-CAR قناة"          ,followers:"مثابع 6,025,925" , subTitle:"رقم كذا في العالم " , checked:true  ,id:144 },
                {sourceLabel:"قناة منوعات"          ,followers:"مثابع 8,025,825" , subTitle:"رقم كذا في العالم " , checked:true   ,id:145},
                {sourceLabel:"وكالة أنباء أونا"   ,followers:"مثابع 5,025,525" , subTitle:"رقم كذا في العالم " , checked:false  ,id:146},
                {sourceLabel:"بوابة الأهرام منوعات"       ,followers:"مثابع 4,025,525" , subTitle:"رقم كذا في العالم " , checked:true ,id:147  },
                {sourceLabel:"قناة الحياة منوعات"        ,followers:"مثابع 7,025,525" , subTitle:"رقم كذا في العالم " , checked:true  ,id:148 },
                {sourceLabel:"قناة الغد"          ,followers:"مثابع 8,025,825" , subTitle:"رقم كذا في العالم " , checked:true  ,id:149 },
                {sourceLabel:"وكالة أنباء أونا"   ,followers:"مثابع 5,025,525" , subTitle:"رقم كذا في العالم " , checked:false ,id:151 },
                {sourceLabel:"بوابة الأهرام"       ,followers:"مثابع 4,025,525" , subTitle:"رقم كذا في العالم " , checked:true  ,id:152 },
                {sourceLabel:"قناة الحياة"        ,followers:"مثابع 7,025,525" , subTitle:"رقم كذا في العالم " , checked:true  ,id:153},
                {sourceLabel:"قناة الغد"          ,followers:"مثابع 8,025,825" , subTitle:"رقم كذا في العالم " , checked:true  ,id:154 },
                {sourceLabel:"وكالة أنباء أونا"   ,followers:"مثابع 5,025,525" , subTitle:"رقم كذا في العالم " , checked:false ,id:155 },
                {sourceLabel:"بوابة الأهرام"       ,followers:"مثابع 4,025,525" , subTitle:"رقم كذا في العالم " , checked:true ,id:156  },
                {sourceLabel:"قناة الحياة"        ,followers:"مثابع 7,025,525" , subTitle:"رقم كذا في العالم " , checked:true  ,id:157 },
            ]   },
            {id:10, categoryLabel:"السعودية"     , categoryIcon:"ios-flag"       ,categoryResources: [
                {sourceLabel:"  قناة السعودية"          ,followers:"مثابع 1,015,585" , subTitle:"رقم كذا في العالم " , checked:true  ,id:158 },
                {sourceLabel:"2قناة السعودية"        ,followers:"مثابع 1,015,585" , subTitle:"رقم كذا في العالم " , checked:true  ,id:159 },
                {sourceLabel:"قناة العربية السعودية "       ,followers:"مثابع 2,525,125" , subTitle:"رقم كذا في العالم " , checked:false ,id:160 },
                {sourceLabel:" T-CAR قناة"          ,followers:"مثابع 6,025,925" , subTitle:"رقم كذا في العالم " , checked:true   ,id:161},
                {sourceLabel:"قناة السعودية"          ,followers:"مثابع 8,025,825" , subTitle:"رقم كذا في العالم " , checked:true  ,id:162 },
                {sourceLabel:"وكالة أنباء أونا"   ,followers:"مثابع 5,025,525" , subTitle:"رقم كذا في العالم " , checked:false  ,id:163},
                {sourceLabel:"بوابة الأهرام السعودية"       ,followers:"مثابع 4,025,525" , subTitle:"رقم كذا في العالم " , checked:true  ,id:163 },
                {sourceLabel:"قناة الحياة السعودية"        ,followers:"مثابع 7,025,525" , subTitle:"رقم كذا في العالم " , checked:true  ,id:164 },
                {sourceLabel:"قناة الغد"          ,followers:"مثابع 8,025,825" , subTitle:"رقم كذا في العالم " , checked:true   ,id:165},
                {sourceLabel:"وكالة أنباء أونا"   ,followers:"مثابع 5,025,525" , subTitle:"رقم كذا في العالم " , checked:false  ,id:166},
                {sourceLabel:"بوابة الأهرام"       ,followers:"مثابع 4,025,525" , subTitle:"رقم كذا في العالم " , checked:true   ,id:175},
                {sourceLabel:"قناة الحياة"        ,followers:"مثابع 7,025,525" , subTitle:"رقم كذا في العالم " , checked:true   ,id:168},
                {sourceLabel:"قناة الغد"          ,followers:"مثابع 8,025,825" , subTitle:"رقم كذا في العالم " , checked:true  ,id:169},
                {sourceLabel:"وكالة أنباء أونا"   ,followers:"مثابع 5,025,525" , subTitle:"رقم كذا في العالم " , checked:false ,id:170 },
                {sourceLabel:"بوابة الأهرام"       ,followers:"مثابع 4,025,525" , subTitle:"رقم كذا في العالم " , checked:true  ,id:171 },
                {sourceLabel:"قناة الحياة"        ,followers:"مثابع 7,025,525" , subTitle:"رقم كذا في العالم " , checked:true  ,id:172 },
            ]   },
            {id:11, categoryLabel:"الكويت"       , categoryIcon:"ios-flag"       ,categoryResources: [
                {sourceLabel:"  قناة الكويت"          ,followers:"مثابع 1,015,585" , subTitle:"رقم كذا في العالم " , checked:true ,id:173  },
                {sourceLabel:"2قناة الكويت"        ,followers:"مثابع 1,015,585" , subTitle:"رقم كذا في العالم " , checked:true  ,id:174 },
                {sourceLabel:"قناة العربية الكويت "       ,followers:"مثابع 2,525,125" , subTitle:"رقم كذا في العالم " , checked:false  ,id:175},
                {sourceLabel:" T-CAR قناة"          ,followers:"مثابع 6,025,925" , subTitle:"رقم كذا في العالم " , checked:true  ,id:176 },
                {sourceLabel:"قناة الكويت"          ,followers:"مثابع 8,025,825" , subTitle:"رقم كذا في العالم " , checked:true  ,id:177 },
                {sourceLabel:"وكالة أنباء أونا"   ,followers:"مثابع 5,025,525" , subTitle:"رقم كذا في العالم " , checked:false ,id:178 },
                {sourceLabel:"بوابة الأهرام الكويت"       ,followers:"مثابع 4,025,525" , subTitle:"رقم كذا في العالم " , checked:true  ,id:179 },
                {sourceLabel:"قناة الحياة الكويت"        ,followers:"مثابع 7,025,525" , subTitle:"رقم كذا في العالم " , checked:true  ,id:180 },
                {sourceLabel:"قناة الغد"          ,followers:"مثابع 8,025,825" , subTitle:"رقم كذا في العالم " , checked:true  ,id:181  },
                {sourceLabel:"وكالة أنباء أونا"   ,followers:"مثابع 5,025,525" , subTitle:"رقم كذا في العالم " , checked:false ,id:182  },
                {sourceLabel:"بوابة الأهرام"       ,followers:"مثابع 4,025,525" , subTitle:"رقم كذا في العالم " , checked:true  ,id:120  },
                {sourceLabel:"قناة الحياة"        ,followers:"مثابع 7,025,525" , subTitle:"رقم كذا في العالم " , checked:true  ,id:183  },
                {sourceLabel:"قناة الغد"          ,followers:"مثابع 8,025,825" , subTitle:"رقم كذا في العالم " , checked:true  ,id:184  },
                {sourceLabel:"وكالة أنباء أونا"   ,followers:"مثابع 5,025,525" , subTitle:"رقم كذا في العالم " , checked:false ,id:185  },
                {sourceLabel:"بوابة الأهرام"       ,followers:"مثابع 4,025,525" , subTitle:"رقم كذا في العالم " , checked:true  ,id:186  },
                {sourceLabel:"قناة الحياة"        ,followers:"مثابع 7,025,525" , subTitle:"رقم كذا في العالم " , checked:true  ,id:187  },
            ]   },
            {id:12, categoryLabel:"اليمن"        , categoryIcon:"ios-flag"       ,categoryResources: [
                {sourceLabel:"  قناة اليمن"          ,followers:"مثابع 1,015,585" , subTitle:"رقم كذا في العالم " , checked:true   ,id:188 },
                {sourceLabel:"2قناة اليمن"        ,followers:"مثابع 1,015,585" , subTitle:"رقم كذا في العالم " , checked:true     ,id:189   },
                {sourceLabel:"قناة العربية اليمن "       ,followers:"مثابع 2,525,125" , subTitle:"رقم كذا في العالم " , checked:false ,id:190  },
                {sourceLabel:" T-CAR قناة"          ,followers:"مثابع 6,025,925" , subTitle:"رقم كذا في العالم " , checked:true  ,id:191  },
                {sourceLabel:"قناة اليمن"          ,followers:"مثابع 8,025,825" , subTitle:"رقم كذا في العالم " , checked:true  ,id:192  },
                {sourceLabel:"وكالة أنباء أونا"   ,followers:"مثابع 5,025,525" , subTitle:"رقم كذا في العالم " , checked:false  ,id:193 },
                {sourceLabel:"بوابة الأهرام اليمن"       ,followers:"مثابع 4,025,525" , subTitle:"رقم كذا في العالم " , checked:true  ,id:194  },
                {sourceLabel:"قناة الحياة اليمن"        ,followers:"مثابع 7,025,525" , subTitle:"رقم كذا في العالم " , checked:true  ,id:195  },
                {sourceLabel:"قناة الغد"          ,followers:"مثابع 8,025,825" , subTitle:"رقم كذا في العالم " , checked:true  ,id:196  },
                {sourceLabel:"بوابة الأهرام"       ,followers:"مثابع 4,025,525" , subTitle:"رقم كذا في العالم " , checked:true  ,id:197 },
                {sourceLabel:"قناة الحياة"        ,followers:"مثابع 7,025,525" , subTitle:"رقم كذا في العالم " , checked:true  ,id:198},
                {sourceLabel:"قناة الغد"          ,followers:"مثابع 8,025,825" , subTitle:"رقم كذا في العالم " , checked:true  ,id:199 },
                {sourceLabel:"وكالة أنباء أونا"   ,followers:"مثابع 5,025,525" , subTitle:"رقم كذا في العالم " , checked:false ,id:200 },
                {sourceLabel:"بوابة الأهرام"       ,followers:"مثابع 4,025,525" , subTitle:"رقم كذا في العالم " , checked:true  ,id:201 },
                {sourceLabel:"قناة الحياة"        ,followers:"مثابع 7,025,525" , subTitle:"رقم كذا في العالم " , checked:true  ,id:202 },
            ]   },
        ];
        
        store.dispatch(resourcesActions.loadResources()).then(
            (res)=>{
                console.log("resresres",sourcesData)
                store.dispatch(resourcesActions.loadResourcesSuccess(sourcesData))
            }
        )
    }

    render(){
        console.log("this.props.allState",this.props.allResources)
        const data = this.props.allResources

        return(
            <View style={styles.container}>
                <Header  navigation={this.props.navigation}/>
                {/* {this.props.allState} */}

                <View style={styles.body}>
                    <FlatList
                        data={data}
                        renderItem={({item}) => 
                            <View style={styles.sourceItem}>
                                <View style={styles.iconItem}><TouchableOpacity onPress={()=>this.handleResources(item.categoryResources)}><Icon name="ios-arrow-back" size={20} color="#353333" /></TouchableOpacity></View>
                                <View style={styles.iconText}><Text style={styles.iconTextContent}>{item.categoryLabel}</Text></View>           
                                <View style={styles.iconItemTwo}><Icon name={item.categoryIcon} size={30} color="red" /></View>
                            </View>
                        }
                    />
                </View>
    
            </View>
    
        );
    }
  
}


const mapStateToProps = state => ({
    allResources: state.resources_data.resources,
});

export const ChooseResources = connect(mapStateToProps,null)(ChooseResourcesScreen);


