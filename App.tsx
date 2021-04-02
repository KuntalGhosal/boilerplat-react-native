import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import Home from './navigation/footer';
export interface Props {}

const App: React.FC<Props> = props => {
  return <Home />;
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    alignSelf: 'center',
  },
});

export default App;
