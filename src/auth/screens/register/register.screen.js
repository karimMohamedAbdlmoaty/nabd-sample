import React, {Component} from 'react';
import { Text, View} from 'react-native';
import {Header} from "../../../../src/components/header";
import {SocialButton} from "../../../../src/components/social-component";
import {Button} from "../../../../src/components/button";
import {Policy} from "../../../../src/components/policy";
import {RegisterForm} from "../../../../src/components/register-form"
import {Form} from "../../../../src/components/form";
import {styles} from "./register.style";


export class Register extends Component {
    render() {
        let faceStyles   = {socialBackgroundColor: "#3b5998" ,textColor:  "white",iconColor: "white"}
        let tweetStyles  = {socialBackgroundColor:"#21B1F5",textColor:"white",iconColor:"white"}
        let googleStyles = {socialBackgroundColor:"#d1cfcf",textColor:"#4E4E4E",iconColor:"red"}
        return (
            <View style={styles.container}>
                <Header headerTitle="حساب جديد" iconName="ios-arrow-back" />

                <SocialButton socialTitle="التسجيل عبر حساب فيسبوك" 
                    SocialButtonStyles={faceStyles}
                    socialWeb="facebook"    
                />
                
                <SocialButton socialTitle="التسجيل عبر حساب فيسبوك" 
                    SocialButtonStyles={tweetStyles}
                    socialWeb="facebook"    
                />

                <SocialButton socialTitle="التسجيل عبر حساب جوجل" 
                    SocialButtonStyles={googleStyles}
                    socialWeb="google" 
                />

                <Form title="أو التسجيل عبر البريد الإلكتروني">
                    <RegisterForm/>
                </Form>

                <Button buttonText="إنشاء حساب جديد" />
                <Policy label="create new account" />
            </View>
            
        );
    }
}