import React from 'react'
import { FlatList, Text } from 'react-native'

import HeroCardRelay from './HeroCard.relay'
import HeroCard from './HeroCard'

export default class HeroFlatlist extends React.Component {
  render() {
    const { data, navigation, isRelay } = this.props
    return (
      <FlatList
        style={{ marginTop: 10 }}
        data={data.heroes.edges}
        keyExtractor={(item, index) => index.toString()}
        renderItem={
          ({ item }) => {
            if (this.props.isRelay) {
              return <HeroCardRelay
                hero={item.node}
                navigation={navigation} />
            }
            else {
              return <HeroCard
                hero={item.node}
                navigation={navigation} />
            }
          }

        }
      />
    )
  }
}

