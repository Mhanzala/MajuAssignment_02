import React, {Component} from 'react'
import {View,Text} from 'react-native'
import Profile from './Profile'
HEADER_MAX_HEIGHT = 100
HEADER_MIN_HEIGHT = 70
PROFILE_IMAGE_MAX_HEIGHT = 70
PROFILE_IMAGE_MIN_HEIGHT = 40
class Header extends Component{
    render(){
       
        return(
            <View style={{flex:1}}>
   <View style={{
     postion:"absolute",
     top: 0,
     left: 0,
     right: 0,
     backgroundColor: 'red',
     height: HEADER_MAX_HEIGHT,
     borderColor: 'black',
    
     borderWidth: 1,
    

   }}>
        <Profile/>

    <Text style={{flexDirection: 'column',
    fontSize: 11, fontWeight: 'bold', color:'white', paddingLeft:80, borderColor:'black',marginLeft:40,marginRight:50 }}>
    WELCOME TO MY PROFILE
     </Text>
     
   </View>
   <View><Text style={{ fontWeight: 'bold', fontSize: 15, paddingLeft: 10 , color: 'red'}}>RESUME</Text></View>
  </View>
        
        );
    }
}
export default Header