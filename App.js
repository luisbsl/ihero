import React from 'react';
import { StyleSheet, Text, View } from 'react-native'

import { AuthMutation, MeQuery } from './src/AuthMutation'
import LoginScene from './src/scenes/LoginScene'
import HeroFlatlistScene from './src/scenes/HeroFlatlistScene'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <LoginScene />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


