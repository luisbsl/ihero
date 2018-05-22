// @flow

import React from 'react'

import HeroDetail from '../components/HeroDetail'

type Props = {
  navigation: Object
}

class HeroDetailScreen extends React.Component<Props> {
  render() {
    const { hero } = this.props.navigation.state.params
    return (
      <HeroDetail hero={hero} />
    )
  }
}

export default HeroDetailScreen