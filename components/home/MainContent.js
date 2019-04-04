import React, { Component } from 'react';
import { View ,Text ,StyleSheet ,ScrollView ,Image ,FlatList,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo'

const forFlatList = ["dg", "dd", "sdfd", "ser", "ser", "ser", "seer"];

const MainContent= ()=>{
    return(
        <View style={styles.container}>
            <View style={styles.tabs}>
                <View style={styles.mostRead}>
                    <TouchableOpacity><Text style={styles.mostReadText}>الأكثر قراءة</Text></TouchableOpacity>
                </View> 

                <View style={styles.urgent}>
                    <TouchableOpacity><Text style={styles.urgentText}>عاجل</Text></TouchableOpacity>
                </View>

                <View style={styles.latestNews}>
                    <TouchableOpacity><Text style={styles.latestNewsText}>آخر الأخبار</Text></TouchableOpacity>
                </View>
            </View>

            <View style={styles.scrollContainer}>
                <FlatList
                    data={forFlatList}
                    showsVerticalScrollIndicator={true}
                    renderItem={() =>
                    <View style={styles.newsList}>
                        <View style={styles.newsItem}>
                            <View style={styles.newsItemHeader}>
                                <View style={styles.newsTime}>
                                <Text style={styles.newsTimeText}>منذ 15 دقيقة</Text>
                                </View>
                                <View style={styles.newsOrganization}>
                                    <TouchableOpacity><Text style={styles.newsOrganizationText}>بوابة أخبار اليوم</Text></TouchableOpacity>
                                    <Image
                                        style={{width: 15 , height: 15}}
                                        source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
                                    />

                                </View>
                            </View>
                            <View style={styles.newsItemBody}>
                                <Text style={styles.newsItemBodyText}>أبل تقدم خدمة التعرف على عن طريق ((الأوعية الدموية)) </Text>
                                <Image
                                    style={{width: 360, height: 70}}
                                    source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
                                />
                            </View>
                            <TouchableOpacity style={styles.newsItemShow}>
                                    <Icon style={styles.settingsIcon} name="share-alternative" size={25} color="#2C8BC9" />
                            </TouchableOpacity>
                        </View>



                        {/* <View style={styles.newsItem}>
                            <View style={styles.newsItemHeader}>
                                <View style={styles.newsTime}>
                                    <Text style={styles.newsTimeText}>منذ 15 دقيقة</Text>
                                </View>
                                <View style={styles.newsOrganization}>
                                    <TouchableOpacity><Text style={styles.newsOrganizationText}>بوابة أخبار اليوم</Text></TouchableOpacity>
                                    <Image
                                        style={{width: 15 , height: 15}}
                                        source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
                                    />
                                    
                                </View>
                            </View>
                            <View style={styles.newsItemBody}>
                                <Text style={styles.newsItemBodyText}>أبل تقدم خدمة التعرف على عن طريق ((الأوعية الدموية)) </Text>
                                <Image
                                    style={{width: 360, height: 70}}
                                    source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
                                />
                            </View>
                            <TouchableOpacity style={styles.newsItemShow}>
                                    <Icon style={styles.settingsIcon} name="share-alternative" size={25} color="#2C8BC9" />
                            </TouchableOpacity>
                        </View> */}
                    </View>
                    }
                />
            </View>
            
        </View>

);
  
}

export default MainContent;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center"
    },
    tabs:{
        height:31,
        width:360,
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
        marginTop:10,
        borderRadius:5,
        borderColor:"#2C8BC9",
        borderWidth:1,
    },
    latestNews:{
        alignSelf:"stretch",
        alignItems:"center",
        justifyContent:"center",
        width:120,
        backgroundColor:"#2C8BC9",
    },
    latestNewsText:{
        color:"white",
        fontSize:17,
        fontWeight:"400"
    },
    urgent:{
        borderColor:"#2C8BC9",
        borderRightWidth:1,
        borderLeftWidth:1,
        alignSelf:"stretch",
        alignItems:"center",
        justifyContent:"center",
        width:120,
    },
    urgentText:{
        color:"#2C8BC9",
        fontSize:17,
        fontWeight:"400"
    },
    mostRead:{
        alignSelf:"stretch",
        alignItems:"center",
        justifyContent:"center",
        width:120,
    },
    mostReadText:{
        color:"#2C8BC9",
        fontSize:17,
        fontWeight:"400"
    },
    scrollContainer:{
        backgroundColor:"#DDDDDD",
        marginTop:10,
        height:500
        
    },
    newsList:{
        flex:1,
        // backgroundColor:"#DDDDDD",
        backgroundColor:"#DDDDDD",
        alignItems:"center",
        justifyContent:"center",
        // marginTop:250,
        // paddingTop:18,
        // paddingBottom:18,
        width:375,

    },
    newsItem:{
        width:360,
        height:240,
        alignItems:"center",
        backgroundColor:"white",
        marginTop:10
    },
    newsItemHeader:{
        // backgroundColor:"blue",
        flexDirection:"row",
        width:360,
        height:40,
        justifyContent:"space-between",
    },
    newsOrganization:{
        // backgroundColor:"green",
        marginRight:7,
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"row"
    },
    newsOrganizationText:{
        marginRight:10,
        color:"#2C8BC9",
        fontSize:15,
        fontWeight:"200"
    },
    newsTime:{
        // backgroundColor:"yellow",
        marginLeft:7,
        alignItems:"center",
        justifyContent:"center",
        color:"grey"

    },
    newsTimeText:{
        color:"gray"
    },
    newsItemBody:{
        // backgroundColor:"brown",
        height:140,
        width:360,
    },
    newsItemBodyText:{
        fontSize:18,
        fontWeight:"400",
        marginTop:9,
        marginBottom:9,
        marginRight:9,
        textAlign:"right"


    },
 




    newsItemShow:{
        // backgroundColor:"yellow",
        height:40,
        width:360,
        alignItems:"flex-end",
        justifyContent:"center",
        marginRight:12,


    }






})

