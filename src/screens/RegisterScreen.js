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
      <View style={{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%'
      }} >
        <View
          style={{
            height: '40%',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center'
          }} >
          <Text
            style={{
              fontSize: 35,
              fontWeight: 'bold',
              color: '#4d4d4d'
            }} >
            Creacte your account
          </Text>
        </View>

        <View style={{
          height: '40%',
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
                onChangeText={(name) => this.setState({ name })}
                style={{ height: 50, backgroundColor: '#e6e6e6' }}
                placeholder='Name' />
            </View>
            <View style={{ width: 300, height: 70 }}>
              <TextInput
                onChangeText={(email) => this.setState({ email })}
                style={{ height: 50, backgroundColor: '#e6e6e6' }}
                placeholder='Email' />
            </View>
            <View style={{ width: 300, height: 70 }}>
              <TextInput
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
                style={{ width: 200, height: 50 }}
                title='CREATE'
                onPress={() => this._register()} />
            </View>

            <View style={{ width: 150, height: 50, alignItems: 'center' }} >
              <TouchableHighlight onPress={() => this.setState({ isLoginScreen: true })}>
                <Text style={{ color: '#4d4d4d', fontWeight: 'bold' }}>
                  LOGIN
                </Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
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