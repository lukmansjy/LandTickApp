import React, { Component } from 'react';
import {Drawer, Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import Home from './src/pages/Home';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import SideBar from './src/components/SideBar'
import MyHeader from './src/components/MyHeader';
import Ticket from './src/pages/Ticket';
import Payment from './src/pages/Payment';

class App extends Component{



  render(){
    return(
      <NavigationContainer>
        <Stack.Navigator headerMode="none" initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Ticket" component={Ticket} />
          <Stack.Screen name="Payment" component={Payment} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

export default App;
