// import React, { Component } from 'react';
// import {Drawer, Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
// import Home from './src/pages/Home';
// import { NavigationContainer } from '@react-navigation/native';
// import 'react-native-gesture-handler';
// import { createStackNavigator } from '@react-navigation/stack';
// const Stack = createStackNavigator();

// import SideBar from './src/components/SideBar'
// import MyHeader from './src/components/MyHeader';
// import Ticket from './src/pages/Ticket';
// import Payment from './src/pages/Payment';

// class App extends Component{



//   render(){
//     return(
//       <NavigationContainer>
//         <Stack.Navigator headerMode="none" initialRouteName="Home">
//           <Stack.Screen name="Home" component={Home} />
//           <Stack.Screen name="Ticket" component={Ticket} />
//           <Stack.Screen name="Payment" component={Payment} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     )
//   }
// }

// export default App;

import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { Header, Left, Body, Title, Right, Card, CardItem, Drawer, Container, Content, Form, Item, Input, Label, DatePicker, Button, Icon} from 'native-base';

import Ticket from './src/pages/Ticket';
import Payment from './src/pages/Payment';
import Home from './src/pages/Home';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'white',
        activeBackgroundColor: '#028902',
        inactiveTintColor: 'white',
        inactiveBackgroundColor:'#069206'
      }}
      >
      <Tab.Screen 
        name="Home"
        component={Home}
        options={{
        tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Icon name="md-home" style={{color: color}}/>
          )
        }}

        
        />
      <Tab.Screen
        name="Ticket"
        component={Ticket}
        options={{
          tabBarLabel: 'Tiket',
            tabBarIcon: ({ color, size }) => (
              <Icon name="md-card" style={{color: color}}/>
            )
          }} />

      <Tab.Screen
        name="Payment"
        component={Payment}
        options={{
          tabBarLabel: 'Pembayaran',
            tabBarIcon: ({ color, size }) => (
              <Icon name="md-cart" style={{color: color}}/>
            )
          }}
       />
       <Tab.Screen
        name="Account"
        component={Payment}
        options={{
          tabBarLabel: 'Akun',
            tabBarIcon: ({ color, size }) => (
              <Icon name="md-person" style={{color: color}}/>
            )
          }}
       />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
