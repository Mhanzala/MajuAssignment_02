import React, {Component} from'react'
import {View, ScrollView,Text,Button} from 'react-native'
class Experience extends Component{
    render(){
      
        return(
          <ScrollView>
            <View>
            <Text>
            
            </Text>
           <Button 
              title= "PROFESSIONAL EXPERIENCE"
              onPress = {() => this.props.navigation.navigate('Professional Experince')}
           />
            </View>
            <View style={{alignContent: 'center', alignItems:'center',marginTop: 50}}>
          <Text style={{color:'blue',fontWeight: 'bold', fontSize: 15, }}>STOCK MANAGER IN QMOBILE</Text>
          <Text style={{color:'blue',fontWeight: 'bold', fontSize: 15,}}>YEAR: 2013-2015</Text>
          <Text style={{color:'blue',fontWeight: 'bold', fontSize: 15 }}>STOCK MANAGER IN OPPO</Text>
          <Text style={{color:'blue',fontWeight: 'bold', fontSize: 15, paddingRight: 18}}>YEAR 2015</Text>
         
          </View>
            </ScrollView>
            
        );
    }
    }
    export default Experience