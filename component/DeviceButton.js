import React from 'react'
import { TouchableOpacity } from 'react-native';
import { Text,Image,View } from 'react-native';

const DeviceButton = ({props,navigation})=>{

  const navTo = () => {
    navigation.navigate('Device',{idDevice:props.idDevice});
  }

  return (
    <TouchableOpacity onPress={navTo} style={{borderBottomWidth:1,borderColor:"black"}}>
      
      {/* <div className="card" style={{ width: '18rem',backgroundColor:'lightGray',borderRadius:'5px',padding:'10px',border:'solid black 1px' }}>
      <img className="card-img-top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Arduino_Logo.svg/720px-Arduino_Logo.svg.png" alt="Card image cap" style={{height:'200px',width:'250px'}} />
      <div className="card-body">
        <div className="card-text">
          <div> id device = {props.idDevice}</div>
          <div> name      = {props.name}</div>
          <div> type      = {props.type}</div>
        </div>
      </div>
    </div> */}

    <View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
      <Image source={{uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Arduino_Logo.svg/720px-Arduino_Logo.svg.png"}} style={{height:100,width:100}}></Image>
      <Text style={{fontSize:16}}>
        id:{props.idDevice} {"\n"}
        name:{props.name} {"\n"}
        type:{props.name} {"\n"}
      </Text>  
    </View>
    
  </TouchableOpacity>
  )
}


export default DeviceButton; 