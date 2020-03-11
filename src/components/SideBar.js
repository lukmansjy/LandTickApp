import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Right, Body, Text, Icon } from 'native-base';
export default class SideBar extends Component {
  constructor(props){
    super(props)
  }

  goPage = (page) =>{
    this.props.navigation.navigate(page)
    this.props.closeDrawer()
  }
  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: '#016d01'}}> 
          <Body>
            <Title>Menu Navigasi</Title>
          </Body>
          <Right>
          
            <Button transparent onPress={this.props.closeDrawer}>
              <Icon name="close" />
            </Button>

          </Right>
        </Header>
        <Content>
          <Button onPressOut={()=>this.goPage('Ticket')} transparent style={{marginTop: 6, marginBottom: 3, borderRadius: 0, backgroundColor: '#ddd'}}>
            <Icon name="md-card" style={{color: 'green'}}/><Text style={{flex: 1, color: 'green'}}>Tiket Saya</Text>
          </Button>

          <Button onPressOut={()=>this.goPage('Payment')} transparent style={{marginTop: 3, marginBottom: 3, borderRadius: 0, backgroundColor: '#ddd'}}>
            <Icon name="md-pricetag" style={{color: 'green'}}/><Text style={{flex: 1, color: 'green'}}>Pembayaran</Text>
          </Button>
        </Content>
        <Footer style={{backgroundColor: '#ddd'}}>
          <Content>
            <Button onPressOut={()=>this.props.closeDrawer()} transparent style={{marginTop: 3, marginBottom: 3, borderRadius: 0, backgroundColor: '#ddd'}}>
                <Icon name="md-log-out" style={{color: 'red'}}/><Text style={{flex: 1, color: 'red'}}>Logout</Text>
            </Button>
          </Content>
        </Footer>
      </Container>
    );
  }
}