import React from 'react';
import { storiesOf } from '@storybook/react-native';

import HeroCard from './HeroCard'

const withData = storiesOf('Hero Card', module)
  .add('With data', () => {
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
    return <HeroCard hero={hero} navigation={navigation} />
  });

export {
  withData
}