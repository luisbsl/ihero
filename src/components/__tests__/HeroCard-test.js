import React from 'react'
import 'jest-styled-components'
import renderer from 'react-test-renderer'

import HeroCard from '../HeroCard'

test('renders correctly', () => {
  const hero = {
    "id": "1009187",
    "image": "http://i.annihil.us/u/prod/marvel/i/mg/6/60/5261a80a67e7d/standard_fantastic.jpg",
    "name": "Black Panther",
    "description": "",
    "comics": 543,
    "series": 175,
    "stories": 745
  }
  const navigation = {
    navigate: {}
  }
  const tree = renderer.create(<HeroCard hero={hero} navigation={navigation} />).toJSON()
  expect(tree).toMatchSnapshot()
})