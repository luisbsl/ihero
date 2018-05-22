// @flow

import React from 'react'
import { FlatList, Text } from 'react-native'

import HeroCardRelay from './HeroCard.relay'
import HeroCard from './HeroCard'
import type { HeroType } from '../types/HeroType';

type Props = {
  data: Object,
  navigation: Object,
  isRelay: boolean
}

export default class HeroFlatlist extends React.Component<Props> {
  render() {
    const { navigation, isRelay } = this.props
    const { edges } = this.props.data.heroes
    return (
      <FlatList
        style={{ marginTop: 10 }}
        data={edges}
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

