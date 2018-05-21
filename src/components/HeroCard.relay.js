import { createFragmentContainer } from 'react-relay'

import HeroCard from './HeroCard'

export default createFragmentContainer(HeroCard, graphql`
  fragment HeroCard_hero on Hero { 
    id
    name
    description
    image
    comics
    series
    stories
  }
`)