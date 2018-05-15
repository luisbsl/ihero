import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { fetchQuery, QueryRenderer } from 'react-relay'

import environment from '../../scripts/create-environment'
import { getUserToken, removeUserToken } from '../provider/StorageProvider'

const HeroFlatlistSceneQuery = graphql`
  query HeroFlatlistSceneQuery {
    heroes {
      id
      name
    	description
      image
    }
  }`

class HeroFlatlistScene extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      heroes: []
    }
  }
  async componentDidMount() {
    // await removeUserToken()
    await fetchQuery(environment, HeroFlatlistSceneQuery)
      .then(data => {
        let _heroArray = []
        let _hero = {}
        data.heroes.forEach(obj => {
          _heroArray.push(obj)
        })
        this.setState({ ...this.state, heroes: _heroArray })
      })
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

export default HeroFlatlistScene