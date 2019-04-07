import { StyleSheet} from 'react-native';


export const styles = StyleSheet.create({
    container: {
        width:335,
        marginRight:20,
        marginLeft:20,
        flex: 3,
        // backgroundColor:"red",
        borderColor: 'gray', 
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderLeftWidth: 1,
    },

    fullName:{
        flex: 1,
        flexDirection:"row-reverse",
        justifyContent:"center",
        alignItems:"center",
    },

    fullNameLabel:{
        flex:1,
        alignItems:"flex-end",
        justifyContent:"center",
        height: 125,
        // marginRight:8,
        // backgroundColor:"red",
        width:120,

    },

    fullNameInput:{
        flex:2,
        flexDirection:"row-reverse",
        width:500
        
    },

    mail:{
        flex: 1,
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row-reverse",
        borderColor: 'gray', 
        borderWidth: 1,
        borderTopWidth:0,
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
        // marginBottom:5



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

    newAccount:{
        flex: 1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"yellow",
    },

    newAccountText:{
        fontSize:20
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
      
  
  
  
    
