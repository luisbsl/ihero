import React from 'react'
import { FlatList } from 'react-native'

import HeroCard from './HeroCard'

export default class HeroFlatlist extends React.Component {
  render() {
    const { heroes, navigation } = this.props
    return (
      <FlatList
        style={{ marginTop: 10 }}
        data={heroes}
        keyExtractor={(item, index) => index.toString()}
        renderItem={
          ({ item }) =>
            <HeroCard
              hero={item}
              navigation={navigation} />
        }
      />
    )
  }
}