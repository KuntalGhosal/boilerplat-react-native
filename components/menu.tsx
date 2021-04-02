import React from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  Image,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Button,
  Icon,
} from 'native-base';

// import { useNavigation } from '@react-navigation/native';
// import { block } from 'react-native-reanimated';
// import {Actions} from 'react-native-router-flux';
// import { NativeRouter, Route, Link } from 'react-router-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    // remove width and height to override fixed static size
    width: '100%',
    height: '5%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#F5F5F5',
  },
  locationIcon: {
    width: 40,
    height: 30,
  },
  messageIcon: {
    width: 25,
    height: 25,
  },

  profileIcon: {
    width: 30,
    height: 30,
  },
  fireBtn: {
    width: '18%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  unreadMsg: {
    height: 25,
    width: 25,
    borderRadius: 25,
    backgroundColor: 'red',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    right: 5,
  },
  messageCount: {
    color: 'white',
    fontSize: 12,
  },
});

const MenuBar = () => {
  // const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.fireBtn}>
        <TouchableOpacity>
          <Icon name="apps" />
          <Text>Apps</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.fireBtn}>
        <TouchableOpacity>
          <Icon name="apps" />
          <Text>Apps</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.fireBtn}>
        <TouchableOpacity>
          <Icon name="apps" />
          <Text>Apps</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.fireBtn}>
        <TouchableOpacity>
          <Icon name="apps" />
          <Text>Apps</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default MenuBar;
