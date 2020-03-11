import React, { Component } from 'react';
import { Header, Left, Body, Title, Right, Drawer, Container, Content, Text, View, Form, Item, Input, Label, DatePicker, Button, Icon} from 'native-base';
import MyHeader from '../components/MyHeader';


import {Image, ImageBackground} from 'react-native'
import SideBar from '../components/SideBar';


class Payment extends Component{
      
    render(){
        return(
            <Container>
                <Header style={{ backgroundColor: '#016d01'}}>
                    <Left>
                    <Button transparent onPress={()=>this.props.navigation.goBack() }>
                        <Icon name='md-arrow-round-back' />
                    </Button>
                    </Left>
                    <Body>
                    <Title>Pembayaran</Title>
                    </Body>
                    <Right />
                </Header>
                <Container>
                    <Text>Pembayaran</Text>
                </Container>
            </Container>
        )
    }
}

export default Payment;
