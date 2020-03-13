import React, { Component } from 'react';
import { Header, Left, Body, Title, Right, Card, CardItem, Drawer, Container, Content, Text, View, Form, Item, Input, Label, DatePicker, Button, Icon} from 'native-base';
import MyHeader from '../components/MyHeader';


import {Image, ImageBackground} from 'react-native'
import SideBar from '../components/SideBar';


class Ticket extends Component{
      
    render(){
        return(
            <Container>
                {/* <Header style={{ backgroundColor: '#016d01'}}>
                    <Left>
                    <Button transparent onPress={()=>this.props.navigation.goBack() }>
                        <Icon name='md-arrow-round-back' />
                    </Button>
                    </Left>
                    <Body>
                    <Title>Tiket Saya</Title>
                    </Body>
                    <Right />
                </Header> */}
                <Content style={{marginHorizontal: 16, marginVertical: 16}}>
                    <Card>
                        <CardItem header style={{flexDirection: 'column'}}>
                            <View style={{flex: 1}}>
                                <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 18, flex: 1}}>Tiket Kereta Api</Text>
                            </View>
                            <View style={{flex: 1}}>
                                <Text style={{textAlign: 'center', flex: 1, fontSize: 14, color: '#666'}}>Senin, 09 Maret 2020</Text>
                            </View>
                            <View style={{flex: 1}}>
                                <Text style={{textAlign: 'center', flex: 1, fontSize: 12, color: '#666'}}>INV 40102</Text>
                            </View>
                        </CardItem>
                        <CardItem>
                            <View style={{flex: 1}}>
                                <Text style={{textAlign: 'center', fontWeight: 'bold', flex: 1}}>Argo Wilis</Text>
                            </View>
                            <View style={{flex: 1}}>
                                <Text style={{textAlign: 'center', flex: 1, fontSize: 14, color: '#666'}}>Executive</Text>
                            </View>
                        </CardItem>
                        <CardItem>
                            <Content>
                                <View style={{flex: 1}}>
                                    <Text style={{textAlign: 'center', flex: 1, fontSize: 12, color: '#666'}}>Berangkat</Text>
                                </View>
                                <View style={{flex: 1}}>
                                    <Text style={{textAlign: 'center', fontWeight: 'bold', flex: 1}}>Stasiun Gambir</Text>
                                </View>
                                <View style={{flex: 1}}>
                                    <Text style={{textAlign: 'center', fontWeight: 'bold', flex: 1}}>(Jakarta)</Text>
                                </View>
                                <View style={{flex: 1}}>
                                    <Text style={{textAlign: 'center', flex: 1, fontSize: 14, color: '#666'}}>Senin, 09 Maret 2020</Text>
                                </View>
                                <View style={{flex: 1}}>
                                    <Text style={{textAlign: 'center', flex: 1, fontSize: 12, color: '#666'}}>Jam 07:00 WIB</Text>
                                </View>
                            </Content>
                            <Content>
                                <View style={{flex: 1}}>
                                    <Text style={{textAlign: 'center', flex: 1, fontSize: 12, color: '#666'}}>Tujuan</Text>
                                </View>
                                <View style={{flex: 1}}>
                                    <Text style={{textAlign: 'center', fontWeight: 'bold', flex: 1}}>Stasiun Pasarturi</Text>
                                </View>
                                <View style={{flex: 1}}>
                                    <Text style={{textAlign: 'center', fontWeight: 'bold', flex: 1}}>(Surabaya)</Text>
                                </View>
                                <View style={{flex: 1}}>
                                    <Text style={{textAlign: 'center', flex: 1, fontSize: 14, color: '#666'}}>Senin, 09 Maret 2020</Text>
                                </View>
                                <View style={{flex: 1}}>
                                    <Text style={{textAlign: 'center', flex: 1, fontSize: 12, color: '#666'}}>Jam 21:00 WIB</Text>
                                </View>
                            </Content>
                        </CardItem>

                        <CardItem>
                            <Content>
                                <View style={{alignItems: 'center'}}>
                                    <Image source={require('../assets/img/qr-code.png')} style={{height: 120, width: 120}}/>
                                </View>
                                <View style={{alignItems: 'center'}}>
                                    <Text>YTR2874</Text>
                                </View>
                            </Content>
                        </CardItem>
                        <CardItem footer style={{marginBottom: 8}}>
                            <View style={{ flex: 1, marginLeft: '20%'}}>
                                <View style={{flex: 1}}>
                                    <Text style={{flex: 1, color: '#666'}}>Nama</Text>
                                </View>
                                <View style={{flex: 1}}>
                                    <Text style={{flex: 1, color: '#666'}}>No KTP</Text>
                                </View>
                                <View style={{flex: 1}}>
                                    <Text style={{flex: 1, color: '#666'}}>No. Hp</Text>
                                </View>
                                <View style={{flex: 1}}>
                                    <Text style={{flex: 1, color: '#666'}}>Email</Text>
                                </View>
                                <View style={{flex: 1}}>
                                    <Text style={{flex: 1,  fontWeight: 'bold'}}>Qty</Text>
                                </View>
                                <View style={{flex: 1}}>
                                    <Text style={{flex: 1, fontWeight: 'bold'}}>Total</Text>
                                </View>
                            </View>
                            <View style={{flex: 3}}>
                                <View style={{flex: 3}}>
                                    <Text style={{flex: 1, color: '#666'}}>Lukman Sanjaya</Text>
                                </View>
                                <View style={{flex: 1}}>
                                    <Text style={{flex: 1, color: '#666'}}>84938841000829</Text>
                                </View>
                                <View style={{flex: 1}}>
                                    <Text style={{flex: 1, color: '#666'}}>08222645525</Text>
                                </View>
                                <View style={{flex: 1}}>
                                    <Text style={{flex: 1, color: '#666'}}>lukman.rocks@live.com</Text>
                                </View>
                                <View style={{flex: 1}}>
                                    <Text style={{flex: 1, fontWeight: 'bold'}}>2 seat @ Rp. 300.000</Text>
                                </View>
                                <View style={{flex: 1}}>
                                    <Text style={{flex: 1, fontWeight: 'bold'}}>Rp. 600.000</Text>
                                </View>
                            </View>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        )
    }
}

export default Ticket;
