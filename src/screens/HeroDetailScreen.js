import React from 'react'

import HeroDetail from '../components/HeroDetail'

class HeroDetailScreen extends React.Component {
  render() {
    const { hero } = this.props.navigation.state.params
    return (
      <HeroDetail hero={hero} />
    )
  }
}

export default HeroDetailScreen