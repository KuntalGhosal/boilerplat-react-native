import React from 'react';
import {StyleSheet, View, Image, Text, RefreshControl} from 'react-native';
import Header from '../../components/header';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import Background from '../../components/background';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {HomeStackParamList} from '../../navigation/home';

type HomeNavigationProp = StackNavigationProp<HomeStackParamList, 'Home'>;

interface Props {
  navigation: HomeNavigationProp;
  route: RouteProp<HomeStackParamList, 'Home'>;
}

type State = {
  refreshing: boolean;
};

class Home extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      refreshing: false,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Background />
        <Header />
        <ScrollView
          style={styles.body}
          // refreshControl={
          //   <RefreshControl
          //     refreshing={this.state.refreshing}
          //     title="Loading..."
          //   />
          // }
        >
          <View
            style={{
              position: 'relative',
              top: 0,
              height: 300,
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'center',
              paddingHorizontal: 10,
            }}>
            <View
              style={{
                position: 'absolute',
                zIndex: 1,
                right: 15,
                flexDirection: 'column',
                alignItems: 'flex-end',
                padding: 15,
              }}>
              <Text
                style={{fontSize: 20, fontWeight: 'bold'}}
                numberOfLines={1}>
                aamam{' '}
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    height: '100%',
  },
  body: {flex: 1},
});
