import React, { Component } from 'react';
import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Button,
  Icon,
  Text,
  View,
} from 'native-base';
import { TouchableOpacity } from 'react-native';
import RaiseStack from './raise';
import HomeStack from './home';
export default class FooterNanigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: 'home',
      hideFooter: undefined,
    };
  }

  renderScreen(screen) {
    switch (screen) {
      case 'home':
        return <HomeStack />;
      case 'raise':
        return <RaiseStack />;
      default:
        return <HomeStack />;
    }
  }
  render() {
    return (
      <View style={{ height: '100%' }}>
        <View style={{ flex: 1 }}>{this.renderScreen(this.state.screen)}</View>
        <Footer>
          <FooterTab>
            <TouchableOpacity>
              <Icon name="apps" />
              <Text>Apps</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon name="camera" />
              <Text>Camera</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon active name="navigate" />
              <Text>Navigate</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon name="person" />
              <Text>Contact</Text>
            </TouchableOpacity>
          </FooterTab>
        </Footer>
      </View>
    );
  }
}
