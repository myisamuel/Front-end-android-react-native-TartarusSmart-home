import React, {useState } from 'react'
import axios from 'axios';
import { View,TextInput,Button,StyleSheet} from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";

const Device = ({route,navigation})=>{

  let [username,setUsername] = useState("");
  let [command,setCommand] = useState("");
  let {idDevice} = route.params;
    
  let premission = async (method) => {

    let token = await AsyncStorage.getItem("token");

    let header = {
      headers: {
        'Content-Type': 'application/json',
        "Authorization": token
      },}

    
    let bodyPremission = {
      username:username 
    }

    if(method === "post"){
      try{
        const response = await axios.post(`http://192.168.1.2:8080/premission/addpremission/${idDevice}`,bodyPremission,header);
        console.log(response);
      }catch (error){
        console.log(error);
      }
    }else{
      try {
        const response = await fetch(`http://192.168.1.2:8080/premission/deletepremission/${idDevice}`, {
          method: 'DELETE',
          body: JSON.stringify(bodyPremission),
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        })
        const data = await response.json();
        console.log(data);
      //   console.log(headers)
      //   const response = await axios.delete(`http://localhost:8080/premission/deletepremission/${idDevice.id}`,
      //     bodyPremission,
      //     { headers: {
      //       'Authorization': `Bearer ${localStorage.getItem('token')}`
      //     }});
      //   console.log(response.data);
      }catch (error){
        console.log(error);
      }
    }
  };

  const NavigateLogScreen = ()=>{
    console.log(navigation);
    navigation.navigate("DeviceLog",{idDevice:idDevice})

  };

  const commandPost = async () =>{

    let token = await AsyncStorage.getItem("token");

    let header = {
      headers: {
        'Content-Type': 'application/json',
        "Authorization": token
      },}


      try{
        let response = await axios.post(`http://192.168.1.2:8080/command/device/${idDevice}`,{
          command:command
        },header);
        console.log(response);
      }catch(error){
        console.log(error);
      }
      
  };

  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'#5f9ea0'}}>
      
      <View>
        <TextInput placeholder="username" onChangeText={(text)=>{setUsername(text)}} style={style.form}></TextInput>
        
        <Button onPress={()=>{premission("post")}} title="Add Premission"></Button>
        
        <View style={{marginTop:20}}>
          <Button onPress={()=>{premission("delete")}} title="Delete Premission"></Button>
        </View>
      </View>

      <View>
        <TextInput placeholder='command' onChangeText={(text)=>{setCommand(text)}} style={style.form}></TextInput>
        <Button onPress={()=>{commandPost()}} title="Submit command"></Button>
      </View>
      
      <View style={{width:240,marginTop:20}}>

        <Button onPress={()=>{NavigateLogScreen()}} title="Show Log"></Button>

      </View>

    </View>
  )
}
export default Device

const style = StyleSheet.create({

  form:{
    paddingLeft:10,
    backgroundColor:'#fff',
    height:40,
    width:200,
    margin:20,
    borderRadius:5,
    },
  }
)