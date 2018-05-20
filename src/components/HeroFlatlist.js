import React from 'react'
import { FlatList, Text } from 'react-native'

import HeroCard from './HeroCard'

import createQueryRenderer from './createQueryRenderer'

class HeroFlatlist extends React.Component {
  render() {
    const { data, navigation } = this.props
    return (
      <FlatList
        style={{ marginTop: 10 }}
        data={data.heroes.edges}
        keyExtractor={(item, index) => index.toString()}
        renderItem={
          ({ item }) =>
            <HeroCard
              hero={item.node}
              navigation={navigation} />
        }
      />
    )
  }
}

export default createQueryRenderer(HeroFlatlist)