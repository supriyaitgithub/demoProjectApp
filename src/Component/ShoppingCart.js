import { useRoute } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import axios from 'axios';



const ShoppingCart = ({route, navigation}) => {
    const [deletemodal,setDeletemodal]=useState(false);
    const [updates,setUpdates]=useState(false);
    
    route=useRoute();
    
    const { id } = route.params;
 console.log('IDDATA++++++++++++++++++++++++>',id)
    // let shopData = id?.id
    const deletes = () => {
        axios.delete(`http://192.168.8.100:5000/user/` + updates)
            .then((res) => {
                setDeletemodal(false);
                getUser();
                setUpdates('');

                console.log("user", values);
            })

    }
    return (
        <>
            <View style={{ paddingHorizontal: 20, paddingVertical: 40,backgroundColor:"#fff",height:700 }}>
                <View style={{flexDirection:'row'}}>
                        <TouchableOpacity onPress={() => navigation.goBack()} >
                            <Image style={styles.arrowStyle} source={require('../Images/leftArrow.png')} />
                        </TouchableOpacity>
                    <Text style={{alignItems:'flex-start',fontWeight:'700',marginLeft:10}}>Shopping Cart</Text>
                </View>
                <FlatList
                    data={id}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => {
                        console.log('GETDATA===========>',item)
                        return (
                        <View style={{flexDirection:"row",marginTop:20}}>
                            <View
                                style={{borderWidth:1,
                                backgroundColor:'#ccc5c5',
                                width:30,
                                height:30,
                                borderRadius:2,
                                borderColor:'#ccc5c5',
                                flex:0.1,
                                // marginRight:50
                                }}
                            >
                            </View>
                            <View style={{marginLeft:15,flex:0.4,}}>
                                <Text style={styles.colorTextStyle}>{item?.name}</Text>
                                <Text style={[styles.colorTextStyle,{fontSize:12}]}>Rs.{item?.price}</Text>
                            </View>

                            <View style={{marginLeft:15,flex:0.2,backgroundColor:"#ccc5c5",borderColor:"#000",paddingVertical:10,borderRadius:4,paddingLeft:20}}>
                                <Text style={[styles.colorTextStyle,{fontSize:12}]}>qty.{item?.quantity}</Text>
                            </View>
                            <View style={{marginLeft:30,flex:0.3,borderWidth:1,}}>
                            <TouchableOpacity onPress={() => deletes()}>
                                <Text style={styles.deleteStyle}>Delete</Text>
                            </TouchableOpacity>
                            </View>
                    </View> 
                    
                )}}/> 
                
            </View>
            
            
            
            
                {/* <View style={{ justifyContent: 'center', alignItems: 'center', top: 200, marginHorizontal: 20, height: 300, backgroundColor: "#fff", borderRadius: 10, borderWidth: 1 }}>
 
                    <TouchableOpacity onPress={() => deletes()}><Text style={styles.buttons}>Delete</Text></TouchableOpacity>
                    <Text style={{ paddingHorizontal: 20, paddingVertical: 10, backgroundColor: 'gray', marginTop: 10, borderRadius: 5 }} onPress={() => setDeletemodal(false)}>Cancel</Text>
                </View> */}

            
        </>
    )
}

export default ShoppingCart;

const styles = StyleSheet.create({
    input: {
        padding: 10,
        borderWidth: 1,
        borderRadius: 10,
        width:300
    },
    buttons: {
        padding: 10,
        borderWidth: 1,
        borderRadius: 10,
        marginLeft: 10
    },
    colorTextStyle:{
        fontWeight:'700',
        color:'#000',
        fontSize:16,
      },
      deleteStyle:{
        fontSize:12,
        fontWeight:'500',
        // paddingLeft:10,
        paddingTop:10,
        color:'#000',
        textAlign:'center'
      },
      arrowStyle:{
        width:16,
        height:16,
        paddingTop:5
      },

});