import React from 'react'
import { View, Text, TextInput, Button, TouchableHighlight } from 'react-native'
import styled from 'styled-components'

import LoginScreen from './LoginScreen'

import { register } from '../mutations/RegisterMutation'
import AppNavigator from '../navigators/AppNavigator'

import { setUserToken } from '../providers/StorageProvider'

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

const TitleContainer = styled.View`
  height: 40%;
  width: 100%;
  justify-content: center;
  align-items: center;
`

const Title = styled.Text`
  font-size: 35px;
  font-weight: bold;
  color: #4d4d4d;
`

const FormContainerWrapper = styled.View`
  height: 40%;
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

const CreateButtonContainer = styled.View`
  width: 150px;
  height: 50px;
`

const LoginLinkContainer = styled.View`
  width: 150px; 
  height: 50px; 
  align-items: center;
`

const LoginLinkText = styled.Text`
  color: #4d4d4d;
  font-weight: bold;
`

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
      <Container>
        <TitleContainer>
          <Title>
            Creacte your account
          </Title>
        </TitleContainer>

        <FormContainerWrapper>
          <FormContainer>
            <InputWrapper>
              <TextInputStyled
                onChangeText={(name) => this.setState({ name })}
                placeholder='Name' />
            </InputWrapper>
            <InputWrapper>
              <TextInputStyled
                onChangeText={(email) => this.setState({ email })}
                placeholder='Email' />
            </InputWrapper>
            <InputWrapper>
              <TextInputStyled
                onChangeText={(password) => this.setState({ password })}
                secureTextEntry={true}
                placeholder='Password' />
            </InputWrapper>
          </FormContainer>
        </FormContainerWrapper>

        <ActionsContainerWrapper>
          <ActionsContainer>
            <CreateButtonContainer>
              <Button
                disabled={this.state.name.length < 1 || this.state.email.length < 1 || this.state.password.length < 1}
                title='CREATE'
                onPress={() => this._register()} />
            </CreateButtonContainer>

            <LoginLinkContainer>
              <TouchableHighlight onPress={() => this.setState({ isLoginScreen: true })}>
                <LoginLinkText>
                  LOGIN
                </LoginLinkText>
              </TouchableHighlight>
            </LoginLinkContainer>
          </ActionsContainer>
        </ActionsContainerWrapper>
      </Container>
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
