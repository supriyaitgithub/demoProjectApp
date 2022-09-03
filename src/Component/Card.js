import React,{useState} from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity,ImageBackground } from 'react-native';


const Card = ({
    data}) => {
        // let DATA = data?.filter(item => item.id === );
        console.log('DATA================>',data)
    const [num, setNum]= useState(0);
    let incNum =()=>{
      if(num<10)
      {
      setNum(Number(num)+1);
      }
    };
    let decNum = () => {
       if(num>0)
       {
        setNum(num - 1);
       }
    }
   let handleChange = (e)=>{
     setNum(e.target.value);
    }
  return (
    <View style={[styles.container,styles.shadowProp]}>
        <View style={styles.cardStyle}>
            
            <Image source={data?.imageURL} resizeMode="cover" style={styles.image}/>
                <Text style={styles.text}>{data?.name}</Text>
            {/* </Image> */}
        </View>
        <View style={{flexDirection:'row',justifyContent:'center',marginTop:10}}>
            <View style={{flex:1,marginTop:5,paddingLeft:20}}>
                <Text>Rs.{data?.price}{data?.currency}</Text>
            </View>
            <View style={{flex:1,backgroundColor:"#3f3c3c",borderRadius:5,padding:10,marginRight:15}}>
                <View style={{flexDirection:'row'}}>
                    <View style={{flex:1,paddingLeft:15,}}>
                        <TouchableOpacity onPress ={decNum}>
                            <Image style={styles.arrowStyle} source={require('../Images/minusIcon.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.numberView}>
                            <Text style={{fontSize:15, color:'#fff',fontWeight:"600"}}>{num}</Text>
                    </View>
                    <View style={{flex:1,}}>
                        <TouchableOpacity onPress ={incNum}>
                            <Image style={styles.arrowStyle} source={require('../Images/PlusIcon.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    </View>
  );
}

export default Card;
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin:10,
    borderColor:"#d3cdcd",
    borderWidth:1,
    padding:20,
  },
  shadowProp:{
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  searchIconStyle:{
    // width:30,
    // height:30,
    backgroundColor:"#000",
    padding:20,
    borderRadius:5,
    
  },
  cardStyle:{
    backgroundColor:'#d3cdcd',
    padding:20,
    width:300,
    justifyContent:'center',
    borderRadius:5,
    // paddingLeft:20
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
  },
  countText: {
    color: "#FF111f"
  },
  arrowStyle:{
    width:16,
    height:16,
    paddingTop:5
  },
  numberView:{
    flex:1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  }
});