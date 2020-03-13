import { Button, Card, CardItem, Container, Content, Text, View } from 'native-base';
import React, { Component } from 'react';
import { Image } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-picker';



class Payment extends Component{


    constructor(props) {
        super(props);
        this.state = {
            srcImg: require('../assets/icon/upload-payment-icon.png'),
            uri: '',
            fileName: '',
            loading: false,
        };
      }
   
    choosePicture = () => {
        // var ImagePicker = require('react-native-image-picker');
        alert('masuk')
        return;
        var options = {
            title: 'Pilih Gambar',
            storageOptions: {
              skipBackup: true,
              path: 'images'
            }
        };
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);
            if (response.didCancel) {
              console.log('User cancelled image picker');
            }
            else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
              console.log('User tapped custom button: ', response.customButton);
            }
            else {
              console.log(response.fileName);
              this.setState({
                srcImg: { uri: response.uri },
                uri: response.uri,
                fileName: response.fileName
              });
            }
        });
    };
   
    uploadPicture = () => {
      console.log('mulai upload')
    }

      
    render(){
        return(
            <Container>
                <Content style={{marginHorizontal: 16, marginVertical: 16}}>
                    <Card>
                        <CardItem header style={{flexDirection: 'column'}}>
                            <View style={{flex: 1}}>
                                <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 18, flex: 1}}>Pembayaran</Text>
                            </View>
                            <View style={{flex: 1}}>
                                <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 18, flex: 1}}>Tiket Kereta Api</Text>
                            </View>
                            <View style={{flex: 1}}>
                                <Text style={{textAlign: 'center', flex: 1, fontSize: 14, color: '#666'}}>Senin, 09 Maret 2020</Text>
                            </View>
                            <View style={{flex: 1}}>
                                <Text style={{textAlign: 'center', flex: 1, fontSize: 12, color: '#666'}}>INV 40102</Text>
                            </View>
                            
                            <View style={{flex: 1, backgroundColor: '#eee', paddingHorizontal: 20, paddingVertical: 8, borderRadius: 6, marginTop: 12}}>
                                <Text style={{textAlign: 'center', flex: 1, fontWeight: 'bold', color: 'orange', fontSize: 13}}>Silakan transfer ke no rekening</Text>
                                <Text style={{textAlign: 'center', flex: 1, fontWeight: 'bold', color: 'orange', fontSize: 13}}>BCA 8374827482</Text>
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
                        <CardItem footer>
                            <Content>
                                <View style={{alignItems: 'center'}}>
                                    <TouchableHighlight onPress={()=>alert('sjj')} >
                                        <View style={{borderStyle: 'solid', borderWidth: 0.8, borderRadius: 6, borderColor: '#bbb', padding: 12}}>
                                            <Text style={{marginBottom: 6, fontSize: 13, color: '#666', textAlign:'center'}}>Pilih Bukti Transfer</Text>
                                            <Image source={this.state.srcImg} style={{width: 160, height: 125}}/> 
                                        </View>

                                    </TouchableHighlight>
                                   <Button transparent onPress={() => this.choosePicture()} style={{backgroundColor: 'green', marginTop: 18}}>
                                       <Text style={{color: 'white'}}>Konfirmasi Pembayaran</Text>
                                    </Button>
                                </View>
                            </Content>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        )
    }
}

export default Payment;
