import React, {Component} from 'react';
import { Text,View} from 'react-native';
import {Header} from "../../../../src/components/header";
import {SocialButton} from "../../../../src/components/social-component";
import {Button} from "../../../../src/components/button";
import {Policy} from "../../../../src/components/policy";
import {RegisterForm} from "../../../../src/components/register-form"
import {Form} from "../../../../src/components/form";
import {styles} from "./login.style";
import {connect} from "react-redux";


class LoginComponent extends Component {
    

    render() {
        console.log("this.props.storeeeee",this.props.authState)
        console.log("this.props.newsState",this.props.newsState)
        let faceStyles   = {socialBackgroundColor: "#3b5998" ,textColor:  "white",iconColor: "white"}
        let tweetStyles  = {socialBackgroundColor:"#21B1F5"  ,textColor:"white",iconColor:"white"}
        let googleStyles = {socialBackgroundColor:"#d1cfcf"  ,textColor:"#4E4E4E",iconColor:"red"}
        let enterButtonStyles =      { buttonBackgroundColor:"yellow" ,align:"center"}
        let newAccountButtonStyles = { buttonColor:"#21B1F5" ,buttonBackgroundColor:"white" ,align:"center"}
        let forButtonStyles =        { buttonColor:"#21B1F5" ,buttonBackgroundColor:"white" ,align:"flex-start"}
        return (
            <View style={styles.container}>
            {/* onPress={() => this.props.navigation.goBack()} */}
                <Header headerTitle="تسجيل الدخول" iconName="ios-close" navigation={this.props.navigation} prev={this.props.navigation.state.params.prev}/>
                <Text>your authentication state is: {this.props.authState}</Text>
                <Text>your news state is: {this.props.newsState}</Text>

                <SocialButton socialTitle="الدخول عبر حساب فيسبوك" 
                    SocialButtonStyles={faceStyles}
                    socialWeb="facebook"    
                />
                
                <SocialButton socialTitle="الدخول عبر حساب فيسبوك" 
                    SocialButtonStyles={tweetStyles}
                    socialWeb="facebook"    
                />

                <SocialButton socialTitle="الدخول عبر حساب جوجل" 
                    SocialButtonStyles={googleStyles}
                    socialWeb="google" 
                />
                {/* <View style={{flex:1}}> */}
                    <Form title="أو الدخول عبر البريد الإلكتروني">
                        <RegisterForm name={false} mail={true} password={true}/>
                    </Form>

                    <Button buttonStyles={enterButtonStyles} buttonText="تسجيل الدخول" nextScreen="HomeStackNavigator" navigation={this.props.navigation}/>
                    <Button buttonStyles={newAccountButtonStyles} buttonText="حساب جديد" nextScreen="Register" navigation={this.props.navigation} />
                    <Button buttonStyles={forButtonStyles} buttonText="نسيت كلمة السر؟" nextScreen="ForgetPassword" navigation={this.props.navigation} />
                    <Policy label="Login" />                       
                {/* </View> */}
            </View>
            
        );
    }
}

const mapStateToProps = state => ({
    authState: state.auth.isPendingAuthState,
    newsState: state.home.news,
    
});
export const Login= connect(mapStateToProps, null)(LoginComponent);
 