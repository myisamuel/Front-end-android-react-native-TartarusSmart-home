import React, { useState } from 'react'
import axios from 'axios';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StyleSheet,View,Image,Text,TextInput,Button} from 'react-native';

const Login = ({navigation})=>{

  let [username,setUsername] = useState("");
  let [password,setPassword] = useState("");

  function setUsernameVar(data){
    setUsername(data);
  }

  function setPasswordVar(data){
    setPassword(data);
  }

  async function login(){
    try{
      let response = await axios.post("http://192.168.1.2:8080/login",{
        username:username,
        password:password
      });
      await AsyncStorage.setItem("token",`Bearer `+ response.data.token);
      let data = await AsyncStorage.getItem("token")
      navigation.navigate("MainMenu");
      console.log(data);
    }catch(error){
      console.log(error);
    }
  }

  const NavigateToRegister = () => {
    navigation.navigate("Register");
  }

  return (
  <View style={styles.container}>
      <Image source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }} style={Logo.logo}/>
      <Text style={AppNameAsLogoStyle.container}>Tartarus Smart Home </Text>
      <TextInput onChangeText={(text)=>{setUsernameVar(text)}} style={loginStyle.username} placeholder="username" />
      <TextInput secureTextEntry={true} onChangeText={(text)=>{setPasswordVar(text)}} style={loginStyle.password} placeholder="password" />
      <Button onPress={()=>{login()}} color="#0000ff" title="Login"/>
      <View style={{height:20}}></View>
      <Button onPress={()=>{NavigateToRegister()}} color="#0000ff" title="Register"/>
  </View>
  )

}

export default Login;

const LogoStyle = StyleSheet.create({
  logo:{
    margin:30,
  },
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5f9ea0',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const loginStyle = StyleSheet.create({
  username:{
    paddingLeft:10,
    backgroundColor:'#fff',
    height:40,
    width:200,
    margin:20,
    borderRadius:5,
  },
  password:{
      paddingLeft:10,
      marginBottom:50,
      backgroundColor:'#fff',
      height:40,
      width:200,
      borderRadius:5,
  },
});

const AppNameAsLogoStyle = StyleSheet.create({
  container:{
    fontSize:20,
    margin:10,
  },
})

// const LoginButton = StyleSheet.create({
//   container: {
//     margin:150,
//     backgroundColor:'0000ff',
//   },
// })

const Logo = StyleSheet.create({
  logo:{
    height:75,
    width:70,
  },
})
