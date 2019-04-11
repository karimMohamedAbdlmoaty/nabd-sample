import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
    },
    innerContainer:{
        flex:1,
        alignItems:"center",
        justifyContent:"space-between"

    },
    chooseYourResources:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        

    },
    chooseYourResourcesText:{
        fontSize:20,
        fontWeight:"bold"
    },
    receiveNotifications:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
    },
    receiveNotificationsText:{
        color:"#474747",
        fontSize:20,
    },
    goToResources:{
        flex:1,
        alignItems:"center",
        justifyContent:"space-around",
        backgroundColor:"brown",
        // width:250

    },
    choose:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        // backgroundColor:"red",
    },
    chooseText:{
        backgroundColor:"#F3DC1E",
        alignItems:"center",
        justifyContent:"center",
        width:250,
        height:55,
        paddingLeft:75,
        paddingTop:15,
        fontSize:15,
        fontWeight:"bold"

    },
    login:{
        flex:1,

    },
    loginText:{
        color:"#21B1F5",
    }
})

