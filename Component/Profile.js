import React, {Component} from 'react'
import {View,Image,ScrollView} from 'react-native'

class Profile extends Component{
    render(){
        let pic={
            uri:'https://yt3.ggpht.com/-K0yYgQu0dtY/AAAAAAAAAAI/AAAAAAAAARA/RTxfhR24gNU/s288-mo-c-c0xffffffff-rj-k-no/photo.jpgs'
        }
        return(
            <ScrollView style={{flex:1}}>
            <View style={{
                 height: PROFILE_IMAGE_MAX_HEIGHT,
                 width: PROFILE_IMAGE_MAX_HEIGHT,
                 borderRadius: PROFILE_IMAGE_MAX_HEIGHT / 2,
                 borderColor: 'black',
                 borderWidth: 1,
                 overflow: 'hidden',
                 marginLeft: 150,
                 marginTop: 10
                 
            }}>
            <Image source={pic}
                            style={{ flex: 1, width: null, height: null }}
></Image>

            </View>

            </ScrollView>
        
        
        );
    }
}
export default Profile