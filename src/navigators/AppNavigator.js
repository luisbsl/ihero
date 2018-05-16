import React from 'react'
import { createNavigator, StackNavigator } from 'react-navigation'
import { View, Text, TouchableHighlight, Image } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import LoginScreen from '../screens/LoginScreen'
import HeroFlatlistScreen from '../screens/HeroFlatlistScreen'
import HeroDetailScreen from '../screens/HeroDetailScreen'
import { getUserToken, removeUserToken } from '../providers/StorageProvider'

import { verifyLoggedIn, executeLogout } from '../actions/AuthActions'

import LogoutImage from '../assets/img/logout.png'

class AppNavigator extends React.Component {
  async componentWillMount() {
    await this.props.verifyLoggedIn()
  }
  render() {
    const Navigation = new StackNavigator({
      HeroList: {
        screen: HeroFlatlistScreen
      },
      HeroDetail: {
        screen: HeroDetailScreen
        ,
        navigationOptions: {
          title: 'Your Hero Detail'
        }
      }
    })
    if (this.props.isLoggedIn) {
      return <Navigation />
    }
    if (!this.props.isLoggedIn) {
      return <LoginScreen />
    }
  }
}

const mapStateToProps = state => ({ isLoggedIn: state.auth.isLoggedIn, isRegisterScreen: state.auth.isRegisterScreen })
const mapDispatchToProps = dispatch => bindActionCreators({ verifyLoggedIn }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(AppNavigator)