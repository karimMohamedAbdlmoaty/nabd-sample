// import React, {Component} from 'react';
// import {Platform, StyleSheet, Text, View,TouchableHighlight,TextInput} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import { Router } from "../Router";

// const MailRegiter= ()=>{
//     return(
//         <View style={styles.container}>

//             <View style={styles.title}>
//                 <Text style={styles.registerText}>أو التسجيل عبر البريد الإلكتروني</Text>
//             </View>

//             <View style={styles.fullName}>
//                 <View style={styles.fullNameLabel}>
//                     <Text>الاسم بالكامل</Text>
//                 </View>
//                 <View style={styles.fullNameInput}>
//                     <TextInput
//                         style={{height: 40,  borderWidth: 0, marginRight:8}}
//                         placeholder = "كما سيظهر بالشكل"
//                         placeholderTextColor = "#525252" 
//                         // onChangeText={(text) => this.setState({text})}
//                         // value={this.state.text}
//                     />
//                 </View>
//             </View>
    
//             <View style={styles.mail}>
//                 <View style={styles.mailLabel}>
//                     <Text>البريد الإلكتروني</Text>
//                 </View>
    
//                 <View style={styles.mailInput}>
//                     <TextInput
//                         style={{height: 40,  borderWidth: 0, marginRight:8}}
//                         placeholder = "user@domain.com"
//                         placeholderTextColor = "#525252" 
//                         // placeholderStyle={{flexDirection:"column-reverse",}}
//                         // onChangeText={(text) => this.setState({text})}
//                         // value={this.state.text}
//                     />
//                 </View>
//             </View>
    
//             <View style={styles.password}>
//                 <View style={styles.passwordLabel}>
//                     <Text>كلمة السر</Text>
//                 </View>

//                 <View style={styles.passwordInput}>
//                     <TextInput
//                         style={{height: 40, borderWidth: 0, marginRight:8}}
//                         // onChangeText={(text) => this.setState({text})}
//                         // value={this.state.text}
//                     />
//                 </View>
//             </View>
    
//             <View style={styles.newAccount}>
//                 <Text style={styles.newAccountText}>إنشاء حساب جديد</Text>
//             </View>

//             <View style={styles.policy}>
//                 <Text style={styles.policyText}>By tapping "create new account" . 
//                     you agree the 
//                     <Text style={styles.colored}>  Trerms of Service </Text>
//                      and
//                     <Text style={styles.colored}> Privacy Policy</Text>
//                 </Text>
//             </View>

//         </View>
    
    
//     )
// };

// export default MailRegiter;
//     const styles = StyleSheet.create({
//         container: {
//             width:335,
//             marginRight:20,
//             marginLeft:20,
//             flex: 6,
           
//         },

//         title:{
//             flex: 1,
//             justifyContent:"center",
//             alignItems:"center",
//         },

//         fullName:{
//             flex: 1,
//             flexDirection:"row-reverse",
//             justifyContent:"center",
//             alignItems:"center",
//             borderColor: 'gray', 
//             borderWidth: 1



//         },

//         fullNameLabel:{
//             flex:1,
//             alignItems:"flex-end",
//             justifyContent:"center",
//             height: 40,
//             marginRight:8
            
//         },

//         fullNameInput:{
//             flex:2,
//             flexDirection:"row-reverse",
//             width:500
            
//         },

//         mail:{
//             flex: 1,
//             justifyContent:"center",
//             alignItems:"center",
//             flexDirection:"row-reverse",
//             borderColor: 'gray', 
//             borderWidth: 1,
//             borderTopWidth:0,
//             borderBottomWidth:0,



//         },

//         mailLabel:{
//             flex: 1,
//             alignItems:"flex-end",
//             justifyContent:"center",
//             height: 40,
//             marginRight:8


//         },

//         mailInput:{
//             flex: 2,
//             flexDirection:"row-reverse",


//         },

//         password:{
//             flex: 1,
//             flexDirection:"row-reverse",
//             justifyContent:"center",
//             alignItems:"center",
//             borderColor: 'gray', 
//             borderWidth: 1,
//             marginBottom:5



//         },

//         passwordLabel:{
//             flex: 1,
//             alignItems:"flex-end",
//             justifyContent:"center",
//             height: 40,
//             marginRight:8


//         },

//         passwordInput:{
//             flex: 2,


//         },

//         newAccount:{
//             flex: 1,
//             justifyContent:"center",
//             alignItems:"center",
//             backgroundColor:"yellow",
//         },

//         newAccountText:{
//             fontSize:20
//         },

//         policy:{
//             flex: 2,
//             // justifyContent:"center",
//             alignItems:"flex-end",
//             marginTop:15,

//         },

//         policyText:{
//             fontSize:12,
//             alignItems:"flex-end",
//             justifyContent:"flex-end",
//             marginRight:8,
//             marginLeft:7,
//             textAlign:"center"
            


//         },

//         colored:{
//             color:"#467195"
//         }


//     })
      
  
  
  
    
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableHighlight,TextInput ,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const MailLogin= ({navigation})=>{
        handleHome = ()=>{
            navigation.navigate('Home')

        }
        return(
            <View style={styles.container}>
    
                <View style={styles.title}>
                    <Text style={styles.registerText}>أو الدخول عبر البريد الإلكتروني</Text>
                </View>
    
        
                <View style={styles.mail}>
                    <View style={styles.mailLabel}>
                        <Text>البريد الإلكتروني</Text>
                    </View>
        
                    <View style={styles.mailInput}>
                        <TextInput
                            style={{height: 40,  borderWidth: 0, marginRight:8}}
                            placeholder = "user@domain.com"
                            placeholderTextColor = "#525252" 
                            // placeholderStyle={{flexDirection:"column-reverse",}}
                            // onChangeText={(mailText) => this.setState({mailText})}
                            // value={this.state.mailText}
                        />
                    </View>
                </View>
        
                <View style={styles.password}>
                    <View style={styles.passwordLabel}>
                        <Text>كلمة السر</Text>
                    </View>
    
                    <View style={styles.passwordInput}>
                        <TextInput
                            style={{height: 40, borderWidth: 0, marginRight:8}}
                            // onChangeText={(passwordText) => this.setState({passwordText})}
                            // value={this.state.passwordText}
                        />
                    </View>
                </View>
        
        
                <TouchableOpacity style={styles.login} onPress={this.handleHome}>
                    <Text style={styles.loginText}> تسجيل الدخول</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.newAccount}>
                    <Text style={styles.newAccountText}> حساب جديد</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.forgetPassword}>
                    <Text style={styles.forgetPasswordText}> نسيت كلمة السر؟</Text>
                </TouchableOpacity>


                <View style={styles.policy}>
                    <Text style={styles.policyText}>By tapping "Login" . 
                        you agree the 
                        <Text style={styles.colored}>  Trerms of Service </Text>
                         and
                        <Text style={styles.colored}> Privacy Policy</Text>
                    </Text>
                </View>
    
            </View>
        
        
        );
    
};

export default MailLogin;


const styles = StyleSheet.create({
    container: {
        width:335,
        marginRight:20,
        marginLeft:20,
        flex: 6,
        
    },
    registerText:{
        fontSize:17, 
    },

    title:{
        flex: 1,
        justifyContent:"center",
        alignItems:"center",
    },

    mail:{
        flex: 1,
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row-reverse",
        borderColor: 'gray', 
        borderWidth: 1,
        borderBottomWidth:0,
    },

    mailLabel:{
        flex: 1,
        alignItems:"flex-end",
        justifyContent:"center",
        height: 40,
        marginRight:8


    },

    mailInput:{
        flex: 2,
        flexDirection:"row-reverse",


    },

    password:{
        flex: 1,
        flexDirection:"row-reverse",
        justifyContent:"center",
        alignItems:"center",
        borderColor: 'gray', 
        borderWidth: 1,
        marginBottom:5



    },

    passwordLabel:{
        flex: 1,
        alignItems:"flex-end",
        justifyContent:"center",
        height: 40,
        marginRight:8


    },

    passwordInput:{
        flex: 2,


    },

    login:{
        flex: 1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"yellow",
    },

    loginText:{
        fontSize:20
    },

    newAccount:{
        flex: 1,
        justifyContent:"center",
        alignItems:"center",
    },

    newAccountText:{
        fontSize:20,
        color:"#21B1F5"
    },

    forgetPassword:{
        flex: 1,
        justifyContent:"center",
    },

    forgetPasswordText:{
        fontSize:20,
        color:"#21B1F5",
        textDecorationLine: "underline"
    },

    policy:{
        flex: 2,
        // justifyContent:"center",
        alignItems:"flex-end",
        marginTop:15,

    },

    policyText:{
        fontSize:12,
        alignItems:"flex-end",
        justifyContent:"flex-end",
        marginRight:8,
        marginLeft:7,
        textAlign:"center"
        


    },

    colored:{
        color:"#467195"
    }


})
      
  
  
  
    
