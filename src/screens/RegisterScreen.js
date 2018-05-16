import React from 'react'
import { View, Text, TextInput, Button, TouchableHighlight } from 'react-native'

import LoginScreen from './LoginScreen'

import { register } from '../mutations/RegisterMutation'
import AppNavigator from '../navigators/AppNavigator'

import { setUserToken } from '../providers/StorageProvider'

export default class RegisterScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      password: '',
      isLoggedIn: false,
      isLoginScreen: false
    }
  }
  async _register() {
    try {
      await register(this.state.name, this.state.email, this.state.password, (res) => {
        if (res === null) {
          alert('Email or passwords invalids!')
        } else {
          setUserToken(res)
          this.setState({ isLoggedIn: true })
        }
      })
    } catch (error) {
      alert('Error - ' + error)
    }
  }
  _renderRegisterScreen() {
    return (
      <View>
        <Text>
          Register account
        </Text>

        <View >
          <TextInput
            onChangeText={(name) => this.setState({ name })}
            style={{ height: 50, backgroundColor: '#fff' }}
            placeholder='Name' />

          <TextInput
            onChangeText={(email) => this.setState({ email })}
            style={{ height: 50, backgroundColor: '#fff' }}
            placeholder='Email' />

          <TextInput
            onChangeText={(password) => this.setState({ password })}
            style={{ height: 50, backgroundColor: '#fff' }}
            secureTextEntry={true}
            placeholder='Senha' />
        </View>

        <Button
          disabled={this.state.name.length < 1 || this.state.email.length < 1 || this.state.password.length < 1}
          style={{ width: 200, height: 50 }}
          title='Register'
          onPress={() => this._register()} />

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
    if (this.state.isLoggedIn) {
      return <AppNavigator />
    }
    return this._renderRegisterScreen()
  }
}