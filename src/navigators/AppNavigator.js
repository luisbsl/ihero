import React from 'react'
import { View, Text, Button, TouchableHighlight, Image } from 'react-native'
import FontAwesome, { Icons } from 'react-native-fontawesome'

import LoginScene from '../scenes/LoginScene'
import HeroFlatlistScene from '../scenes/HeroFlatlistScene'
import { getUserToken } from '../provider/StorageProvider'

import LogoutImage from '../assets/img/logout.png'

class AppNavigator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLogged: false,
      isLoading: true
    }
  }
  static navigationOptions = ({ navigation }) => (
    {
      title: 'iHero',
      headerRight: (
        // <Button
        //   style={{ marginRight: 20 }}
        //   title="Logout"
        //   onPress={() => navigation.state.params.handleLogout()} />
        <TouchableHighlight 
          style={{paddingRight: 15}}
          onPress={() => navigation.state.params.handleLogout()}>
          <Image 
            source={LogoutImage} style={{width: 30, height: 30}} />
        </TouchableHighlight>
      )
    }
  )
  async _logout() {
    return await alert('SAir')
  }
  async componentDidMount() {
    this.props.navigation.setParams({ handleLogout: this._logout });
    await getUserToken()
      .then(res => {
        if (res !== null) {
          this.setState({ isLogged: true, isLoading: false })
        } else {
          this.props.navigation.navigate('Login')
        }
      })
  }
  render() {
    if (this.state.isLoading) return null
    if (this.state.isLogged) {
      return <HeroFlatlistScene navigation={this.props.navigation} />
    }
  }
}

export default AppNavigator