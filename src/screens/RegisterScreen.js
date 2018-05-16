import React from 'react'
import { View, Text, Button, TouchableHighlight } from 'react-native'

import LoginScreen from './LoginScreen'

export default class RegisterScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoginScreen: false
    }
  }
  _renderRegisterScreen() {
    return (
      <View>
        <Text>
          Register account
        </Text>

        <Button
          // disabled={this.state.email.length < 1 || this.state.password.length < 1}
          style={{ width: 200, height: 50 }}
          title='Register'
          onPress={() => alert('Register')} />

        <TouchableHighlight onPress={() => this.setState({ isLoginScreen: true })}>
          <Text
          // style={{ color: '#ffffff' }}
          >
            Login
          </Text>
        </TouchableHighlight>
      </View>
    )
  }
  render() {
    if (this.state.isLoginScreen) {
      return <LoginScreen />
    }
    return this._renderRegisterScreen()
  }
}