import { Button, Container, Content, DatePicker, Form, Icon, Input, Item, Label, Text, View } from 'native-base';
import React, { Component } from 'react';
import { ImageBackground, NativeModules, processColor } from 'react-native';

const { StatusBarManager } = NativeModules;

class Home extends Component{
    constructor(props) {
        super(props);
        this.state = { chosenDate: new Date() };
        this.setDate = this.setDate.bind(this);
    }
    setDate(newDate) {
        this.setState({ chosenDate: newDate });
    }
    componentDidMount() {
        StatusBarManager.setColor(processColor('#005400'), true);
    }


    closeDrawer() {
        this._drawer._root.close()
    };
    openDrawer() {
        this._drawer._root.open()
    };
      
    render(){
        console.log(this.props.navigation)
        return(
                <Container>
                    {/* <MyHeader/> */}
                    <Content>
                        <Content>
                            <ImageBackground
                                source={require('../assets/img/jumbotron-img.jpg')}
                                style={{width: '100%', height: '100%'}}
                                >
                                <View style={{backgroundColor: 'rgba(18, 184, 18, 0.55)', paddingTop: 66, paddingLeft: 12, paddingRight: 12, paddingBottom: 42}}>
                                    <Text style={{color: 'white', fontSize: 24, fontWeight: 'bold'}}>Selamat Siang, Ticket Seekers</Text>
                                    <Text style={{color: 'white'}}>Ingin Pulkam dengan Good Deal ?</Text>
                                    <Text style={{color: 'white'}}>Masuk atau Daftar Sekarang ! !</Text>
                                </View>
                            </ImageBackground>
                        </Content>

                        <View>
                            <Text style={{fontSize: 20, textAlign: 'center', marginTop: 18}}>Tiket Kereta Api</Text>
                            <Form>
                                <Item floatingLabel>
                                    <Label>Asal Stasiun</Label>
                                    <Input />
                                </Item>
                                <Item floatingLabel>
                                    <Label>Tujuan Stasiun</Label>
                                    <Input />
                                </Item>


                                <View style={{flexDirection: 'row', alignSelf: 'center'}}>
                                    <Item style={{width: '44%'}}>
                                        <DatePicker
                                        defaultDate={new Date(2018, 4, 4)}
                                        minimumDate={new Date(2018, 1, 1)}
                                        maximumDate={new Date(2018, 12, 31)}
                                        locale={"en"}
                                        timeZoneOffsetInMinutes={undefined}
                                        modalTransparent={false}
                                        animationType={"fade"}
                                        androidMode={"default"}
                                        placeHolderText="Tgl Berangkat"
                                        textStyle={{ color: "black", marginTop: 26 }}
                                        placeHolderTextStyle={{ color: "#d3d3d3", marginTop: 26}}
                                        onDateChange={this.setDate}
                                        disabled={false}
                                        style={{paddingBottom: 1}}
                                    />
                                    </Item>

                                    <Text style={{ marginTop: 40, paddingLeft: 8, paddingRight: 8}}> - </Text>
                                    
                                    <Item style={{width: '44%'}}>
                                    <DatePicker
                                        defaultDate={new Date(2018, 4, 4)}
                                        minimumDate={new Date(2018, 1, 1)}
                                        maximumDate={new Date(2018, 12, 31)}
                                        locale={"en"}
                                        timeZoneOffsetInMinutes={undefined}
                                        modalTransparent={false}
                                        animationType={"fade"}
                                        androidMode={"default"}
                                        placeHolderText="Range Tgl Berangkat"
                                        textStyle={{ color: "black", marginTop: 26 }}
                                        placeHolderTextStyle={{ color: "#d3d3d3", marginTop: 26}}
                                        onDateChange={this.setDate}
                                        disabled={false}
                                        style={{paddingBottom: 1}}
                                    />
                                    </Item>
                                </View>

                                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 16}}>
                                    <Text style={{flex: 1, textAlign: 'center'}}>Dewasa</Text>
                                    <Text style={{flex: 1, textAlign: 'center'}}>Bayi</Text>
                                </View>
                                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 10}}>
                                    <View style={{flexDirection: 'row', backgroundColor: '#ddd', marginLeft: 28}}>
                                        <Button success >
                                            <Text><Icon name="add" style={{color: 'white'}}/></Text>
                                        </Button>
                                        <Text style={{marginLeft: 16, marginRight: 16, textAlignVertical: 'center'}}>0</Text>
                                        <Button success >
                                            <Text><Icon name="remove" style={{color: 'white'}}/></Text>
                                        </Button>
                                    </View>
                                    <View style={{flexDirection: 'row', backgroundColor: '#ddd', marginRight: 28}}>
                                        <Button success >
                                            <Text><Icon name="add" style={{color: 'white'}}/></Text>
                                        </Button>
                                        <Text style={{marginLeft: 16, marginRight: 16, textAlignVertical: 'center'}}>0</Text>
                                        <Button success >
                                            <Text><Icon name="remove" style={{color: 'white'}}/></Text>
                                        </Button>
                                    </View>
                                    
                                </View>
                                
                                <Button success style={{marginLeft: 16, marginRight: 16, marginTop: 40}}><Text style={{textAlign: 'center', flex: 1}}>Cari Tiket</Text></Button>
                            </Form>
                        </View>
                    </Content>

                    {/* <NavBottom/> */}
                </Container>
        )
    }
}

export default Home;
