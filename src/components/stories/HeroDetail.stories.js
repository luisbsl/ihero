import React from 'react';
import { storiesOf } from '@storybook/react-native';

import HeroDetail from '../HeroDetail'

const withData = storiesOf('Hero Detail', module)
  .add('With data', () => {
    const hero = {
      "id": "1009583",
      "image": "http://i.annihil.us/u/prod/marvel/i/mg/7/20/527bb5d64599e/standard_fantastic.jpg",
      "name": "She-Hulk (Jennifer Walters)",
      "description": "Seriously wounded, young lawyer Jennifer Walters was given a blood transfusion by her cousin Bruce Banner. Usually in better control of her powers and temper than the Hulk, She-Hulk has been a high profile New York lawyer as well as an upstanding member of both the Avengers and Fantastic Four."
    }

    return <HeroDetail hero={hero} />
  });

export {
  withData
}