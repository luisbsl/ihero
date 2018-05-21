import React from 'react'
import { View, Text, FlatList, TouchableHighlight, Image, ActivityIndicator, StatusBar } from 'react-native'
import { fetchQuery, QueryRenderer } from 'react-relay'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import environment from '../../scripts/create-environment'
import { getUserToken, removeUserToken } from '../providers/StorageProvider'

import LogoutImage from '../assets/img/logout.png'
import { executeLogout } from '../actions/AuthActions'
import HeroFlatlist from '../components/HeroFlatlist.relay'

const HeroFlatlistScreenQuery = graphql`
  query HeroFlatlistScreenQuery {
    heroes(first: 10) {
      edges {
        node {
          ...HeroCard_hero
        }
      }
    }
}`

class HeroFlatlistScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      heroes: []
    }
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'iHero',
      headerTintColor: '#4d4d4d',
      headerStyle: {
      },
      headerRight: (
        <View>
          <TouchableHighlight
            style={{ marginRight: 15 }}
            onPress={() => navigation.state.params.handleLogout()}>
            <Image
              source={LogoutImage} style={{ width: 30, height: 30 }} />
          </TouchableHighlight>
        </View>
      )
    }
  }

  async componentWillMount() {
    this.props.navigation.setParams({
      handleLogout: this.props.executeLogout
    })
  }
  render() {
    return (
      <View>
        <StatusBar
          backgroundColor='#4d4d4d'
          barStyle="light-content"
        />
        <HeroFlatlist isRelay={true} query={HeroFlatlistScreenQuery} navigation={this.props.navigation} />
      </View>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ executeLogout }, dispatch)
export default connect(null, mapDispatchToProps)(HeroFlatlistScreen)