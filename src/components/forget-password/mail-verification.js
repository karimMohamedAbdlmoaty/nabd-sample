import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableHighlight,TextInput ,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class MailVerification extends Component{
    constructor(props){
        super(props);
        this.state={
            fullNameText: "",
            mailText: "",
            passwordText: ""

        }
        this.handleSend = this.handleSend.bind(this);
    }

    handleSend(){
        console.log("dfhdfhdfh")

    }
    render(){
        return(
            <View style={styles.container}>
    
                <View style={styles.title}>
                    <Text style={styles.registerText}>قم بإدخال بريدك الإلكتروني لنرسل لك كلمة السر</Text>
                </View>
    
        
                <View style={styles.mail}>
                    <View style={styles.mailLabel}>
                        <Text>البريد الإلكتروني</Text>
                    </View>
        
                    <View style={styles.mailInput}>
                        <TextInput
                            style={{  borderWidth: 0, marginRight:8}}
                            placeholder = "user@domain.com"
                            placeholderTextColor = "#525252" 
                            // placeholderStyle={{flexDirection:"column-reverse",}}
                            onChangeText={(mailText) => this.setState({mailText})}
                            value={this.state.mailText}
                        />
                    </View>
                </View>
        
        
                <TouchableOpacity style={styles.continue} onPress={this.handleSend}>
                    <Text style={styles.continueText}>الاستمرار</Text>
                </TouchableOpacity>
    
    
            </View>
        
        
        )
    }
};


const styles = StyleSheet.create({
    container: {
        width:335,
        marginRight:20,
        marginLeft:20,
        flex: 1,
    },

    title:{
        flex: 1,
        justifyContent:"center",
        alignItems:"flex-end"
    },

    registerText:{  
        marginRight:8
    },

    mail:{
        // flex: 1,
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row-reverse",
        borderColor: 'grey', 
        borderWidth: 1,
    },

    mailLabel:{
        flex: 1,
        alignItems:"flex-end",
        justifyContent:"center",
        height: 40,
        marginRight:8

    },

    mailInput:{
        flex: 1,
        flexDirection:"row-reverse",
        
    },

    continue:{
        flex: 5,
        marginTop:10,
        width:335,
    },

    continueText:{
        flex: .08,
        fontSize:20,
        backgroundColor:"#FFE902",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        paddingTop: 8,
        paddingLeft:133
    },
})
      
  
  
  
    
// import React, {Component} from 'react';
// import {Platform, StyleSheet, Text, View,TouchableHighlight,TextInput ,TouchableOpacity} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';

// export default class MailVerification extends Component{
//     constructor(props){
//         super(props);
//         this.state={
//             fullNameText: "",
//             mailText: "",
//             passwordText: ""

//         }
//         this.handleSend = this.handleSend.bind(this);
//     }

//     handleSend(){
//         console.log("dfhdfhdfh")

//     }
//     render(){
//         return(
//             <View style={styles.container}>
    
//                 <View style={styles.title}>
//                     <Text style={styles.registerText}>قم بإدخال بريدك الإلكتروني لنرسل لك كلمة السر</Text>
//                 </View>
    
        
//                 <View style={styles.mail}>
//                     <View style={styles.mailLabel}>
//                         <Text>البريد الإلكتروني</Text>
//                     </View>
        
//                     <View style={styles.mailInput}>
//                         <TextInput
//                             style={{height: 40,  borderWidth: 0, marginRight:8}}
//                             placeholder = "user@domain.com"
//                             placeholderTextColor = "#525252" 
//                             // placeholderStyle={{flexDirection:"column-reverse",}}
//                             onChangeText={(mailText) => this.setState({mailText})}
//                             value={this.state.mailText}
//                         />
//                     </View>
//                 </View>
        
                
//                 <TouchableOpacity style={styles.continue} onPress={this.handleSend}>
//                     <Text style={styles.continueText}>الاستمرار</Text>
//                 </TouchableOpacity>
    
    
//             </View>
        
        
//         )
//     }
// };


// const styles = StyleSheet.create({
//     container: {
//         width:335,
//         marginRight:20,
//         marginLeft:20,
//         flex: 1,
//         backgroundColor:"red",

        
//     },

//     title:{
//         flex: 1,
//         justifyContent:"center",
//         alignItems:"center",
//         backgroundColor:"green",

//     },

//     mail:{
//         flex: 1,
//         justifyContent:"center",
//         alignItems:"center",
//         flexDirection:"row-reverse",
//         borderColor: 'gray', 
//         borderWidth: 1,
//         backgroundColor:"blue",

//     },

//     mailLabel:{
//         flex: 1,
//         alignItems:"flex-end",
//         justifyContent:"center",
//         height: 40,
//         marginRight:8,

//     },

//     mailInput:{
//         flex: 2,
//         flexDirection:"row-reverse",
//     },

//     continue:{
//         height:300,
//         flex: 1,
//         marginTop:30,
//         width:335,
//         backgroundColor:"green",
//         alignItems:"center",
//         justifyContent:"space-around",


//     },

//     continueText:{
//         fontSize:20,
//         backgroundColor:"#FFE902",
//         flexDirection:"row",
//         justifyContent:"center",
//         alignItems:"center",
//     },
// })
      
  
  
  
    
