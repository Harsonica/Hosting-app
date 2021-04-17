import React, { Component } from 'react';
import { Button, View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import HomeScreen from './Screens/HomeScreen';
import JokesScreen from './Screens/JokesScreen'
import WeatherScreen from './Screens/WeatherScreen'
import NewsScreen from './Screens/NewsScreen'
import HorsecopeScreen from './Screens/HorsecopeScreen';


export default class App extends Component {
  constructor(){
   super();
    this.state={
      like:0,
      dislike:0
    }
  }
  render() {
    return (
        <View>
        <AppContainer/>
        <Text>{this.state.like}</Text>
        <Text>{this.state.dislike}</Text>
        <TouchableOpacity onPress = {this.likeCount}>
        <Image 
       style = {{width: 50, height: 50, marginLeft: 5}}
        source={require('./thumbs-up-hand-symbol.png')}
        />
        </TouchableOpacity>
        <TouchableOpacity onPress={this.dislikeCount}>
        <Image
                style={{
                  width: 50,
                  height: 50,
                  marginLeft: 100,
                  marginTop: -35,
                }}
                source={require('./thumbs-down-silhouette.png')}></Image>
        </TouchableOpacity>
        </View>
    );
  }
  likeCount=()=>{
  this.setState
  ({like:this.state.like+1})
}
dislikeCount=()=>{
  this.setState
  ({dislike:this.state.dislike+1})


}
}

const AppNavigation = createSwitchNavigator({
  HomeScreen:HomeScreen,
  JokesScreen:JokesScreen,
  HorsecopeScreen:HorsecopeScreen,
  NewsScreen:NewsScreen,
  WeatherScreen:WeatherScreen
})
const AppContainer = createAppContainer(AppNavigation)