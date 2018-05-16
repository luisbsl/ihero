import React from 'react'
import { View, Text, Button, TextInput, TouchableHighlight } from 'react-native'

import { authenticate } from '../mutations/AuthMutation'
import { setUserToken } from '../providers/StorageProvider'

import { goRegisterScreen } from '../actions/AuthActions'

import AppNavigator from '../navigators/AppNavigator'
import RegisterScreen from './RegisterScreen'

class LoginScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: false,
      email: '',
      password: ''
    }
  }

  async _login() {
    try {
      await authenticate(this.state.email, this.state.password, (res) => {
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
  
  _renderLoginScreen() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#000000',
        alignItems: 'center',
        width: '100%'
      }} >
        <View style={{ height: '50%' }} >
          <Text style={{ color: '#ffffff' }} >
            Login Scene
        </Text>
        </View>

        <View style={{ width: '70%', height: '30%' }} >
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

        <View style={{
          width: '50%',
          height: '20%',
          alignItems: 'center'
        }} >
          <Button
            disabled={this.state.email.length < 1 || this.state.password.length < 1}
            style={{ width: 200, height: 50 }}
            title='LOGIN'
            onPress={() => this._login()} />

          <TouchableHighlight onPress={() => this.setState({ isRegisterScreen: true })}>
            <Text
              style={{ color: '#ffffff' }}
            >
              CREATE ACCOUNT
          </Text>
          </TouchableHighlight>
        </View>

      </View>
    )
  }
  render() {
    if (this.state.isLoggedIn) {
      return <AppNavigator />
    }
    if (this.state.isRegisterScreen) {
      return <RegisterScreen />
    }
    return this._renderLoginScreen()
  }
}

export default LoginScreen