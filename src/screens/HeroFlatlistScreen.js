import React from 'react'
import { View, Text, FlatList, TouchableHighlight, Image } from 'react-native'
import { fetchQuery, QueryRenderer } from 'react-relay'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import environment from '../../scripts/create-environment'
import { getUserToken, removeUserToken } from '../providers/StorageProvider'

import LogoutImage from '../assets/img/logout.png'

import { executeLogout } from '../actions/AuthActions'

const HeroFlatlistScreenQuery = graphql`
  query HeroFlatlistScreenQuery {
    heroes {
      id
      name
    	description
      image
    }
  }`

class HeroFlatlistScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      heroes: []
    }
  }

  static navigationOptions = ({ navigation }) => (
    {
      title: 'iHero',
      headerRight: (
        <TouchableHighlight
          style={{ marginRight: 15 }}
          onPress={() => navigation.state.params.handleLogout()}>
          <Image
            source={LogoutImage} style={{ width: 30, height: 30 }} />
        </TouchableHighlight>
      )
    }
  )

  componentWillMount() {
    this.props.navigation.setParams({ handleLogout: this.props.executeLogout })
  }

  async componentDidMount() {
    const _heroes = await fetchQuery(environment, HeroFlatlistScreenQuery)
      .then(data => {
        let _heroArray = []
        let _hero = {}
        data.heroes.forEach(obj => {
          _heroArray.push(obj)
        })
        return _heroArray
      })
      .catch(error => {
        alert(error)
      })
    this.setState({ heroes: _heroes })
  }
  render() {
    return (
      <View>
        <Text>
          Hero Flatlist
        </Text>

        {
          this.state.heroes.length > 0
            ? //alert(JSON.stringify(this.state.heroes))

            <FlatList
              data={this.state.heroes}
              keyExtractor={(item, index) => index.toString()}
              renderItem={
                ({ item }) =>
                  <View>
                    <Text onPress={() => this.props.navigation.navigate('HeroDetail')}>
                      {item.name}
                    </Text>
                    <Text>
                      {item.description}
                    </Text>
                  </View>
              }
            />

            : <Text>
              Nothing
              </Text>
        }
      </View>
    )
  }
}

// export default HeroFlatlistScreen

const mapStateToProps = state => ({ isLoggedIn: state.auth.isLoggedIn })
const mapDispatchToProps = dispatch => bindActionCreators({ executeLogout }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(HeroFlatlistScreen)