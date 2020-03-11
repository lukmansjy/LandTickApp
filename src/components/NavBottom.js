import React, { Component } from "react";
import { FooterTab, Footer, Button, Icon, Text } from "native-base";

class NavBottom extends Component{
    render(){
        return(
            <Footer>
                <FooterTab>
                    <Button
                        vertical
                        onPress={() => alert(1)}>
                        <Icon name="home" />
                        <Text>Home</Text>
                    </Button>
                    <Button
                        vertical
                        onPress={() => alert('2')}>
                        <Icon name="md-card" />
                        <Text>Ticket</Text>
                    </Button>
                    <Button
                        vertical
                        onPress={() => alert('2')}>
                        <Icon name="md-pricetag" />
                        <Text>Payment</Text>
                    </Button>
                    <Button
                        vertical
                        onPress={() => alert('3')}>
                        <Icon name="person" />
                        <Text>Profil</Text>
                    </Button>
                </FooterTab>
            </Footer>
        )
    }
}

export default NavBottom