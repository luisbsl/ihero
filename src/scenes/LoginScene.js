import React from 'react'
import { View, Text, Button, TextInput, AsyncStorage } from 'react-native'

import { authenticate } from '../AuthMutation'
import { setUserToken } from '../provider/StorageProvider'

import AppNavigator from '../navigators/AppNavigator'

class LoginScene extends React.Component {
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
            .then(() => {
              this.setState({ isLoggedIn: true })
            })
        }
      })
    } catch (error) {
      alert('Error - ' + error)
    }
  }
  _createAccount() {
    alert('Creact Account')
  }
  _renderLoginScene() {
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

          <Text
            style={{ color: '#ffffff' }}
            onPress={() => this._createAccount()} >
            CREATE ACCOUNT
        </Text>
        </View>

      </View>
    )
  }
  render() {
    if (this.state.isLoggedIn) {
      return <AppNavigator />
    }
    return this._renderLoginScene()
  }
}

export default LoginScene