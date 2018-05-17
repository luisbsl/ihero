import React from 'react'
import { View, Text, FlatList, TouchableHighlight, Image, ActivityIndicator, StatusBar } from 'react-native'
import { fetchQuery, QueryRenderer } from 'react-relay'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import environment from '../../scripts/create-environment'
import { getUserToken, removeUserToken } from '../providers/StorageProvider'

import LogoutImage from '../assets/img/logout.png'

import { executeLogout } from '../actions/AuthActions'
import { MeQuery } from '../mutations/AuthMutation'

import HeroCard from '../components/HeroCard'

const HeroFlatlistScreenQuery = graphql`
  query HeroFlatlistScreenQuery {
    heroes {
      id
      name
    	description
      image
      comics
      series
      stories
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

  async componentDidMount() {
    const _heroes = await this._getEnviroment().then(_env => {
      return fetchQuery(_env, HeroFlatlistScreenQuery)
        .then(data => {
          return data.heroes
        })
        .catch(error => {
          alert(error)
        })
    })
    this.setState({ heroes: _heroes })
  }

  async _getEnviroment() {
    return await getUserToken().then(token => {
      return environment(token)
    })
  }

  render() {
    return (
      <View>
        <StatusBar
          backgroundColor='#4d4d4d'
          barStyle="light-content"
        />
        {
          this.state.heroes.length > 0
            ?
            <FlatList
              style={{ marginTop: 10 }}
              data={this.state.heroes}
              keyExtractor={(item, index) => index.toString()}
              renderItem={
                ({ item }) =>
                  <HeroCard
                    hero={item}
                    navigation={this.props.navigation} />
              }
            />

            : <View style={{
              flex: 1,
              justifyContent: 'center'
            }} >
              <ActivityIndicator size="large" color="#0000ff" />
            </View>
        }
      </View>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ executeLogout }, dispatch)
export default connect(null, mapDispatchToProps)(HeroFlatlistScreen)