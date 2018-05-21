import React from 'react'
import { View, Text, Button, TextInput, TouchableHighlight, StatusBar, Alert } from 'react-native'
import FontAwesome, { Icons } from 'react-native-fontawesome'
import styled from 'styled-components'

import { authenticate } from '../mutations/AuthMutation'
import { setUserToken } from '../providers/StorageProvider'

import { goRegisterScreen } from '../actions/AuthActions'

import AppNavigator from '../navigators/AppNavigator'
import RegisterScreen from './RegisterScreen'

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

const TitleContainer = styled.View`
  height: 50%;
  width: 100%;
  justify-content: center;
  align-items: center;
`

const Title = styled.Text`
  font-size: 40px;
  font-weight: bold;
  color: #4d4d4d;
`

const FormContainerWrapper = styled.View`
  height: 30%;
  width: 100%;
  justify-content: center;
  align-items: center;
`

const FormContainer = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const InputWrapper = styled.View`
  width: 300px;
  height: 70px;
`

const TextInputStyled = styled.TextInput`
  height: 50px; 
  background-color: #e6e6e6;
`

const ActionsContainerWrapper = styled.View`
  height: 20%;
  width: 100%;
  justify-content: center;
  align-items: center;
`

const ActionsContainer = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const LoginButtonContainer = styled.View`
  width: 150px;
  height: 50px;
`

const CreateAccountLinkContainer = styled.View`
  width: 150px;
  height: 50px;
  align-items: center;
`

const CreateAccountLinkText = styled.Text`
  color: #4d4d4d;
  font-weight: bold;
`

class LoginScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: false,
      email: '',
      password: ''
    }
  }

  _resetForm() {
    this.setState({ email: '', password: '' })
  }

  async _login() {
    try {
      await authenticate(this.state.email, this.state.password, (res) => {
        if (res === null) {
          Alert.alert(
            'Error',
            'Email or passwords invalids',
            [
              { text: 'OK', onPress: () => this._resetForm() }
            ],
            { cancelable: false }
          )
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
      <Container>
        <StatusBar
          barStyle="light-content"
        />
        <TitleContainer>
          <Title>
            iHero
          </Title>
        </TitleContainer>

        <FormContainerWrapper>
          <FormContainer>
            <InputWrapper>
              <TextInputStyled
                underlineColorAndroid='transparent'
                onChangeText={(email) => this.setState({ email })}
                value={this.state.email}
                placeholder='Email' />
            </InputWrapper>

            <InputWrapper>
              <TextInputStyled
                underlineColorAndroid='transparent'
                onChangeText={(password) => this.setState({ password })}
                value={this.state.password}
                secureTextEntry={true}
                placeholder='Password' />
            </InputWrapper>
          </FormContainer>
        </FormContainerWrapper>

        <ActionsContainerWrapper>
          <ActionsContainer>
            <LoginButtonContainer>
              <Button
                title='LOGIN'
                disabled={this.state.email.length < 1 || this.state.password.length < 1}
                onPress={() => this._login()} />
            </LoginButtonContainer>

            <CreateAccountLinkContainer>
              <TouchableHighlight onPress={() => this.setState({ isRegisterScreen: true })}>
                <CreateAccountLinkText>
                  CREATE ACCOUNT
                </CreateAccountLinkText>
              </TouchableHighlight>
            </CreateAccountLinkContainer>
          </ActionsContainer>
        </ActionsContainerWrapper>
      </Container>
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
