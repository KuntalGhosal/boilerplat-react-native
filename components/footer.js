import React, { Component } from 'react';
import RaiseStack from '../navigation/raise'
import HomeStack from '../navigation/home'
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
export default class FooterTabsIconTextExample extends Component {
    renderScreen(screen) {
        console.log('Entered stack renderer');
        switch (screen) {
            case 'home':
                return <HomeStack />;
            case 'cycle':
                return <MyCycleStack />;
            case 'chart':
                return <StatisticsStack />;
            case 'menu':
                return <MenuStack />;
            default:
                return <HomeStack />;
        }
    }
    render() {
        return (
            <Footer>
                <FooterTab>
                    <Button vertical>
                        <Icon name="apps" />
                        <Text>Apps</Text>
                    </Button>
                    <Button vertical>
                        <Icon name="camera" />
                        <Text>Camera</Text>
                    </Button>
                    <Button vertical active>
                        <Icon active name="navigate" />
                        <Text>Navigate</Text>
                    </Button>
                    <Button vertical>
                        <Icon name="person" />
                        <Text>Contact</Text>
                    </Button>
                </FooterTab>
            </Footer>
        );
    }
}