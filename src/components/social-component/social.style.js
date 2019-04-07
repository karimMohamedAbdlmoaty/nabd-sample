import { StyleSheet} from 'react-native';


export const styles = StyleSheet.create({
    container:{
      // flex:1,
      flexDirection:"row",
      marginTop:20,
      justifyContent:"center",
      alignItems:"center",
      height:60
    }, 
  
    buttonIcon:{
      flex:1,
      flexDirection:'row-reverse',
      width:335,
    }, 
  
    buttonText:{
      flex:1,
      justifyContent:"center",
      borderRightColor:"white",
      borderRightWidth:1,
      height:100    ,                 
    },
  
    buttonTextContent:{
      color:"white" ,
      fontFamily: 'Arial', 
      fontSize: 25 ,
      textAlign:"right",
      paddingRight:22,
    }
  })