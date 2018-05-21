import React from 'react';
import { storiesOf } from '@storybook/react-native'

import HeroFlatlist from '../HeroFlatlist'

const withData = storiesOf('Hero Flatlist', module)
  .add('With data', () => {
    const data = {
      "heroes": {
        "edges": [
          {
            "node": {
              "id": "SGVybzoxMDA5MTg3",
              "image": "http://i.annihil.us/u/prod/marvel/i/mg/6/60/5261a80a67e7d/standard_fantastic.jpg",
              "name": "Black Panther",
              "comics": 543,
              "series": 175,
              "stories": 745
            }
          },
          {
            "node": {
              "id": "SGVybzoxMDA5MjIw",
              "image": "http://i.annihil.us/u/prod/marvel/i/mg/3/50/537ba56d31087/standard_fantastic.jpg",
              "name": "Captain America",
              "comics": 2067,
              "series": 554,
              "stories": 3071
            }
          },
          {
            "node": {
              "id": "SGVybzoxMDEwMzM4",
              "image": "http://i.annihil.us/u/prod/marvel/i/mg/6/80/5269608c1be7a/standard_fantastic.jpg",
              "name": "Captain Marvel (Carol Danvers)",
              "comics": 421,
              "series": 140,
              "stories": 510
            }
          }
        ]
      }
    }

    const navigation = {
      navigate: {}
    }
    return <HeroFlatlist data={data} navigation={navigation} />
  });

export {
  withData
}