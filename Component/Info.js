import React, {Component} from 'react'
import {View,Text,Button} from 'react-native'
class Info extends Component{
    render(){
      return(
        <View style ={{ flex: 1, }}>
        
        <Button
            
            title="PERSONAL INFORMATION"
            onPress={() => this.props.navigation.navigate('Personal Info')}
            style={{backgroundColor: 'red'}}
            
          />
          <View style={{alignContent: 'center', alignItems:'center',marginTop: 50}}>
          <Text style={{color:'blue',fontWeight: 'bold', fontSize: 15, }}>NAME: MUHAMMAD HANZALA KHAN</Text>
          <Text style={{color:'blue',fontWeight: 'bold', fontSize: 15,}}>FATHER NAME: KHALIL AHMED KHAN</Text>
          <Text style={{color:'blue',fontWeight: 'bold', fontSize: 15 }}>CONTACT NUMBERR: +92314 2822460 </Text>
          <Text style={{color:'blue',fontWeight: 'bold', fontSize: 15, paddingRight: 18}}>EMAIL: hanzalakhan059@gmail.com</Text>
          <Text style={{color:'blue',fontWeight: 'bold', fontSize: 15, paddingRight: 20}}>  ADDRESS: A-200, BLOCK-2, Johar</Text>
         
          </View>
        
        </View>
        
        
        
      );
    }
  }
  export default Info