import React from 'react'
import { View, Text, Button, TextInput, TouchableHighlight, StatusBar } from 'react-native'
import FontAwesome, { Icons } from 'react-native-fontawesome'

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
        alignItems: 'center',
        width: '100%'
      }} >
      <StatusBar
          barStyle="light-content"
        />
        <View
          style={{
            height: '50%',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center'
          }} >
          <Text
            style={{
              fontSize: 40,
              fontWeight: 'bold',
              color: '#4d4d4d'
            }} >
            iHero
          </Text>
        </View>

        <View style={{
          height: '30%',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center'
        }} >
          <View style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <View style={{ width: 300, height: 70 }}>
              <TextInput
                underlineColorAndroid='transparent'
                onChangeText={(email) => this.setState({ email })}
                style={{ height: 50, backgroundColor: '#e6e6e6' }}
                placeholder='Email' />
            </View>

            <View style={{ width: 300, height: 70 }}>
              <TextInput
                underlineColorAndroid='transparent'
                onChangeText={(password) => this.setState({ password })}
                style={{ height: 50, backgroundColor: '#e6e6e6' }}
                secureTextEntry={true}
                placeholder='Senha' />
            </View>
          </View>
        </View>

        <View style={{
          height: '20%',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center'
        }} >
          <View style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <View style={{ width: 150, height: 50 }}>
              <Button
                title='LOGIN'
                onPress={() => this._login()} />
            </View>

            <View style={{ width: 150, height: 50, alignItems: 'center' }} >
              <TouchableHighlight onPress={() => this.setState({ isRegisterScreen: true })}>
                <Text style={{ color: '#4d4d4d', fontWeight: 'bold' }}>
                  CREATE ACCOUNT
              </Text>
              </TouchableHighlight>
            </View>
          </View>
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