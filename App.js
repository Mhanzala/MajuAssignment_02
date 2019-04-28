import React, {Component} from 'react';
import {Text, View, Button,ScrollView,style} from 'react-native';
import  { createAppContainer, createStackNavigator, createBottomTabNavigator} from  'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons'
import Header from './Component/Header'
import Experience from './Component/Experience'
import Info from './Component/Info'


HEADER_MAX_HEIGHT = 100
HEADER_MIN_HEIGHT = 70
PROFILE_IMAGE_MAX_HEIGHT = 70
PROFILE_IMAGE_MIN_HEIGHT = 40
class HomeScreen extends Component{
render(){

 return(
   <View>

     <Header Text="Welcom to my profile"/>
       
   </View>
  
     
 ) ;
}
}
class Education extends  React.Component{
  render(){
    return(
      <View stule ={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      
      <Button
          
          title="Education"
          
          onPress={() => this.props.navigation.navigate('Education')}
        />
      <View style={{alignContent: 'center', alignItems:'center',marginTop: 50}}>
         <Text style={{color:'blue',fontWeight: 'bold', fontSize: 15, paddingLeft: 10}}>MATRICULATION: HAMDARD PUBLIC SCHOOL.</Text>
        <Text style={{color:'blue',fontWeight: 'bold', fontSize: 15, paddingLeft: 10}} >YEAR: 2013</Text>
        <Text style={{color:'blue',fontWeight: 'bold', fontSize: 15, paddingLeft: 10}}>INTERMEDIATE: GOVT.DEGREE BOYS AND GIRLS SCIENCE AND COMMERCE COLLEGE GULSHAN-E-IQBAL BLOCK.</Text>
        <Text style={{color:'blue',fontWeight: 'bold', fontSize: 15, paddingLeft: 10}}>YEAR: 2016</Text>
        <Text style={{color:'blue',fontWeight: 'bold', fontSize: 15, paddingLeft: 10}}>BS IN SOFTWARE ENGINEERING (IN PROGRESS)</Text>

        </View>
     
      </View>
      
    );
  }
}

 



const TabNavigator = createBottomTabNavigator(
  {
     Home: {screen :HomeScreen,
            navigationOptions:{
              tabBarLable: 'HomeScreen',
              tabBarIcon:({tintColor}) =>(
              <Icon name = "ios-home" color={tintColor} size={24}/>
              )
     
  }},
  Personal_Info: {screen :Info,
    navigationOptions:{
      tabBarLable: 'Info',
      tabBarIcon:({tintColor}) =>(
      <Icon name = "ios-information" color={tintColor}size={40}/>
      )
    }},
     Education:{ screen :Education,
      navigationOptions:{
        tabBarLable: 'Education',
        tabBarIcon:({tintColor}) => (
          <Icon name = "ios-book" color={tintColor}size={30}/>
        
        )
      }},
    Prof_Exp:{ screen: Experience,
      navigationOptions:{
        tabBarLable: 'Experience',
        tabBarIcon: ({tintColor}) => (
          <Icon name ="ios-time" color={tintColor}size={30} />
        )
      }},
    },
{
    initialRouteName: "Personal_Info",
    order:['Home','Education','Prof_Exp','Personal_Info'],
    tabBarOptions:{
      activeTintColor: 'red',
      inactiveTintColor: 'gray'

    }

      },
  
 
);
const AppContainer= createAppContainer(TabNavigator);
export default class App extends Component {
  render() {
    return <AppContainer />
  }
}
