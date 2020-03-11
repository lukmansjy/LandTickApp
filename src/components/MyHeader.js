import React,{ Component } from "react";
// import { Drawer, Header, Title, Content, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { Card, Drawer, CardItem, Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base'

import {NativeModules, processColor, Image } from 'react-native';
import SideBar from "./SideBar";
const { StatusBarManager } = NativeModules;

class MyHeader extends Component{
    componentDidMount() {
        StatusBarManager.setColor(processColor('#005400'), true);
    }

    render(){
        return(
            <Header style={{ backgroundColor: '#016d01'}}>
                <Left>
                <Button transparent onPress={this.props.openDrawer}>
                    <Icon name='menu' />
                </Button>
                </Left>
                <Body style={{flexDirection: 'row'}}>
                {/* <Title>LandTick </Title> */}
                    <Text style={{fontSize: 20, textDecorationLine: 'underline', color: 'white', marginRight: 6, fontWeight: 'bold'}}>LandTick</Text>
                    <Image source={require('../assets/icon/brand-icon.png')} style={{width: 40, height: 30}}/>
                </Body>
                <Right />
            </Header>
        )
    }
}


export default MyHeader