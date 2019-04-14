import React, { Component } from 'react';
import { View ,Text , StyleSheet ,FlatList,TouchableOpacity ,Image} from 'react-native';
import Header from "./header";
import Icon from 'react-native-vector-icons/Ionicons';
import * as resourcesActions from '../../auth/auth.action';
import store from '../../store';
import { connect } from 'react-redux';

class Resources extends React.Component{
    handleResources=(itemId)=>{
        store.dispatch(resourcesActions.changeResourcesSuccess(this.props.navigation.state.params.catId,itemId))
    }
    
    // componentWillMount(){
    //     for (let index = 0; index < this.props.allResources.length; index++) {
    //        if (this.props.allResources[index].catId==this.props.navigation.state.params.catId) {
    //            let catIndex = index
    //         //    console.log("catIndex",catIndex)
    //        } 
    //     }
    // }

    render(){
        let catIndex = null
        for (let index = 0; index < this.props.allResources.length; index++) {
            if (this.props.allResources[index].catId ==this.props.navigation.state.params.catId) {
                catIndex = index
            } 
        }

        const sourcesData= this.props.allResources[catIndex].categoryResources
        console.log("first resource checked", sourcesData[0].checked)
    
        return(
            <View style={styles.container}>
                <Header  navigation={this.props.navigation}/>
                <View style={styles.body}>
                    <View style={styles.bodyTextContainer}><Text style={styles.bodyText}>قنوات تلزيونية</Text></View>
                    <FlatList
                        data={sourcesData}
                        extraData={sourcesData}
                        renderItem={({item}) => 
                            <View style={styles.resourceImage}>
                                {!item.checked && 
                                <View style={styles.unCheckedContainer}>
                                    <TouchableOpacity style={styles.unChecked} onPress ={()=>this.handleResources(item.id)}>
                                        <Text>إضافة</Text>
                                        <Icon name="ios-add" size={30} color="#2C8BC9" />
                                    </TouchableOpacity>
                                </View> }
    
                                {item.checked && 
                                <TouchableOpacity style={styles.checkedContainer} onPress ={()=>this.handleResources(item.id)}>
                                <View style={styles.checked}>
                                        <Icon style={styles.checkedIcon} name="ios-checkmark" size={30} color="white" />
                                    </View>
                                </TouchableOpacity>}
    
                                <View style={styles.resourceTexts}>
                                    <Text style={styles.iconTextContentOne}>{item.sourceLabel}</Text>
                                    <Text style={styles.iconTextContentThree}>{item.subTitle}</Text>
                                    <Text style={styles.iconTextContentTwo}>{item.followers}</Text>
                                </View>   
    
                                <View style={styles.iconItem}>
                                    {/* <Icon name={item.sourceIcon} size={30} color="red" /> */}
                                    <Image
                                        style={{width: 45, height: 30}}
                                        source={{uri: "https://www.e3lam.org/wp-content/uploads/2018/01/71564-اخبار-اليوم-780x405.jpg"}}
                                    />
                                </View>
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

export default connect(mapStateToProps,null)(Resources);


const styles = StyleSheet.create({
    container:{
        flex: 1, 
        justifyContent:"center",
    },
    body:{
        flex: 1,
        justifyContent:"center",

    },
    bodyTextContainer:{
        alignItems:"flex-end",
        justifyContent:"center",

    },
    bodyText:{
        marginRight:8

    },

    resourceImage:{
        // backgroundColor:"blue",
        flexDirection:"row",
        height:80,
        // borderWidth:1

    },
    unCheckedContainer:{
        flex: 2, 
        justifyContent:"center",
        alignItems:"center",

    },
    unChecked:{
        // backgroundColor:"yellow",
        justifyContent:"space-around",
        alignItems:"center",
        borderWidth:1,
        borderColor:"#2C8BC9",
        flexDirection:"row",
        height:32,
        width:80,
        borderRadius:5,
        marginLeft:20
    },
    checkedContainer:{
        flex: 2, 
        justifyContent:"center",
        alignItems:"center",
        // backgroundColor:"yellow"

    },

    checked:{
        // backgroundColor:"yellow",
        justifyContent:"center",
        alignItems:"center",
        borderWidth:1,
        borderColor:"#2C8BC9",
        height:32,
        width:80,
        borderRadius:5,
        backgroundColor:"#2C8BC9",
        marginLeft:20

        
    },
    checkedIcon:{
        
    },
    iconItem:{
        flex: 1.5, 
        // backgroundColor:"yellow",
        justifyContent:"center",
        alignItems:"center",
    },
    // iconItemImage:{
        

    // },
    resourceTexts:{
        flex: 6,        
        justifyContent:"center",
        alignItems:"flex-end",
    },
    iconTextContentOne:{
        fontSize:20,
        color:"#353333",
    },
    iconTextContentTwo:{
        fontSize:13,
        color:"grey",
    },
    iconTextContentThree:{
        fontSize:13,
        color:"grey",
    },

})
