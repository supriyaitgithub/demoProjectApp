import { useNavigation } from '@react-navigation/native';
import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View,Image,TextInput,FlatList, TouchableNativeFeedback, Modal } from 'react-native';
import Card from '../Component/Card';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Home({navigation}) {
    const [add, setAdd] = useState(false)
    const [state, setState] = useState(false);
    const [search, setSearch] = useState('');
    const [filteredDataSource, setFilteredDataSource] = useState([]);
    const [masterDataSource, setMasterDataSource] = useState([]);
    const [rejectionModal, setrejectionModal] = useState(false);
   const {navigate} = useNavigation()

    useEffect(() => {
        fetch('https://leaguex.s3.ap-south-1.amazonaws.com/task/shopping/catalogue.json')
          .then((response) => response.json())
          .then((responseJson) => {
            setFilteredDataSource(responseJson);
            setMasterDataSource(responseJson);
            // console.log('FILETERDATA=========',masterDataSource)
          })
          
          .catch((error) => {
            console.error(error);
          });
      }, []);


      const searchFilterFunction = (text) => {
        // Check if searched text is not blank
        if (text) {
          // Inserted text is not blank
          // Filter the masterDataSource
          // Update FilteredDataSource
          const newData = masterDataSource.filter(function (item) {
            const itemData = item.name ? item.name.toUpperCase() : item.gender.toUpperCase();
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;
          });
          setFilteredDataSource(newData);
          setSearch(text);
        } else {
          // Inserted text is blank
          // Update FilteredDataSource with masterDataSource
          setFilteredDataSource(masterDataSource);
          setSearch(text);
        }
      };
  return (
    <View style={{backgroundColor:"#fff"}}>
        <View style={styles.container}>
            <View style={styles.containerStyle}>
                <Text style={{fontSize:20,fontWeight:'600'}}>TeeRexStore</Text>
            </View>
            <View style={styles.logo}>
                <TouchableNativeFeedback onPress={() => navigate('ShoppingCart',{id:masterDataSource})}>
                <Image style={styles.tinyLogo}
                    source={require('../Images/ShopingCartIcon.png')}/>
                </TouchableNativeFeedback>
            </View>
        </View>
        <View style={styles.viewStyle}>
            <View style={{flex:1,justifyContent:'space-between'}}>
                <TextInput
                    style={styles.textInputStyle}
                    onChangeText={(text) => searchFilterFunction(text)}
                    onClear={(text) => searchFilterFunction('')}
                    value={search}
                    underlineColorAndroid="transparent"
                    placeholder="Search for Products"
                />
                
            </View>
            <View style={{flex:1,justifyContent:"flex-end",marginLeft:200}}>
                <Image source={require('../Images/search.png')}
                style={styles.searchIconStyle}
                />
            </View>
            <TouchableNativeFeedback onPress={() => setAdd(true)}>
                <View style={{flex:1,justifyContent:"flex-end",marginLeft:10}}>
                    <Image source={require('../Images/filterIcon.png')}
                    style={styles.searchIconStyle}
                    />
                </View>
            </TouchableNativeFeedback>
            <Modal
                animationType='slide'
                transparent={true}
                visible={add}
                onRequestClose={() => setAdd(false)}
            >
                <View style={{ justifyContent: 'flex-start', top: 200, marginHorizontal: 20, height: 540, backgroundColor: "#fff", borderRadius: 10, borderWidth: 1,padding:20 }}>
                    <View>
                        <Text style={{alignItems:'flex-start',fontWeight:'700'}}>Colour</Text>
                    </View>
                <FlatList
                    data={filteredDataSource}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => {
                        console.log('GETDATA===========>',item)
                        return (
                    <View style={{flexDirection:"row",marginTop:10}}>
                            <View
                            style={{borderWidth:1,
                                backgroundColor:'#ccc5c5',
                                width:15,
                                height:15,
                                borderRadius:2,
                                borderColor:'#ccc5c5',
                            flex:0.1,
                            // marginRight:50
                            }}
                            >
                            </View>
                            <View style={{marginLeft:15,flex:0.2,}}>
                                <Text style={styles.colorTextStyle}>{item?.color}</Text>
                            </View>
                    </View> 
                    
                )}}/> 
                    <View style={{marginTop:10}}>
                        <Text style={{alignItems:'flex-start',fontWeight:'700'}}>Gender</Text>
                    </View>
                    <FlatList
                    data={filteredDataSource}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => {
                        console.log('GETDATA===========>',item)
                        return (
                    <View style={{flexDirection:"row",marginTop:10}}>
                            <View
                            style={{borderWidth:1,
                                backgroundColor:'#ccc5c5',
                                width:15,
                                height:15,
                                borderRadius:2,
                                borderColor:'#ccc5c5',
                            flex:0.1,
                            // marginRight:50
                            }}
                            >
                            </View>
                            <View style={{marginLeft:15,flex:0.2,}}>
                                <Text style={styles.colorTextStyle}>{item?.gender}</Text>
                            </View>
                    </View> 
                    
                )}}/> 
                   
                    <View style={{marginTop:10}}>
                        <Text style={{alignItems:'flex-start',fontWeight:'700'}}>Price</Text>
                    </View>
                    <FlatList
                    data={filteredDataSource}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => {
                        console.log('GETDATA===========>',item)
                        return (
                    <View style={{flexDirection:"row",marginTop:10}}>
                            <View
                            style={{borderWidth:1,
                                backgroundColor:'#ccc5c5',
                                width:15,
                                height:15,
                                borderRadius:2,
                                borderColor:'#ccc5c5',
                            flex:0.1,
                            // marginRight:50
                            }}
                            >
                            </View>
                            <View style={{marginLeft:15,flex:0.2,}}>
                                <Text style={styles.colorTextStyle}>{item?.price}</Text>
                            </View>
                    </View> 
                    
                )}}/> 
                   
                    <View style={{marginTop:10}}>
                        <Text style={{alignItems:'flex-start',fontWeight:'700'}}>Type</Text>
                    </View>
                    <FlatList
                    data={filteredDataSource}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => {
                        console.log('GETDATA===========>',item)
                        return (
                    <View style={{flexDirection:"row",marginTop:10}}>
                            <View
                            style={{borderWidth:1,
                                backgroundColor:'#ccc5c5',
                                width:15,
                                height:15,
                                borderRadius:2,
                                borderColor:'#ccc5c5',
                            flex:0.1,
                            // marginRight:50
                            }}
                            >
                            </View>
                            <View style={{marginLeft:15,flex:0.2,}}>
                                <Text style={styles.colorTextStyle}>{item?.type}</Text>
                            </View>
                    </View> 
                    
                )}}/> 
                   
                    {/* <TouchableOpacity onPress={() => submitButton()}><Text style={styles.buttons}>Submit</Text></TouchableOpacity> */}
                    <Text style={{ paddingHorizontal: 20, paddingVertical: 10, marginTop: 10 }} onPress={() => setAdd(false)}>Close</Text>
                </View>

            </Modal>
            
        </View>
            <FlatList
            data={filteredDataSource}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => {
                console.log('GETDATA===========>',item)
                return (
                  <View style={{flex:1,}}>
                    <Card
                      data={item}
                      key={index}
                    />
                  </View>
                )
              }}
              enableEmptySections={true}
            
            />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    backgroundColor: '#e8edec',
    // margin:20,
    padding:10,
    borderRadius:5
  },
  containerStyle: {
    flex:1,
    alignItems: "flex-start",
    textAlign:'left',
    paddingTop:10
  },
  tinyLogo: {
    width: 30,
    height: 30,
    paddingRight:10.
  },
  logo: {
    backgroundColor:'#d3cdcd',
    padding:10,
    marginRight:10
  },
  searchStyle: {
    margin:20
  },
  viewStyle: {
    // justifyContent: 'center',
    marginTop: 20,
    padding: 16,
    flexDirection:'row',
  },
  textStyle: {
    padding: 10,
  },
  textInputStyle: {
    height: 40,
    borderBottomWidth: 1,
    // paddingLeft: 10,
    borderColor: '#d3cdcd',
    width:250
  },
  searchIconStyle:{
    width:16,
    height:16,
    backgroundColor:"#000",
    padding:20,
    borderRadius:5
  },
  colorTextStyle:{
    fontWeight:'700'
  }
});
