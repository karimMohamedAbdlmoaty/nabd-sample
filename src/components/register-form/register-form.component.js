import React, {Component} from 'react';
import { Text, View} from 'react-native';
import {Input} from "../input";
import { styles } from "./register-form.style";



export const RegisterForm = ()=>{
    return (
        <View style={styles.container}>

            {/* <View style={styles.titleText}>
                <Text>{title}</Text>
            </View> */}


            <Input label="الاسم بالكامل"
                placeHolderText="كما سيظهر بالشكل"
                borderBottomValue={0}
            />
            <Input label="البريد الإلكتروني"
                placeHolderText= "user@domain.com"
                borderBottomValue={0}
            />
            <Input label="كلمة السر"
                placeHolderText=" "
                borderBottomValue={1}
            />

        </View>
        
    );
}