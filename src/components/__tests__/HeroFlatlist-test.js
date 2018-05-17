import React from 'react'
import 'jest-styled-components'
import renderer from 'react-test-renderer'

import HeroFlatlist from '../HeroFlatlist'

test('renders correctly', () => {
  const heroes = [
    {
      "id": "1009187",
      "image": "http://i.annihil.us/u/prod/marvel/i/mg/6/60/5261a80a67e7d/standard_fantastic.jpg",
      "name": "Black Panther",
      "description": "",
      "comics": 543,
      "series": 175,
      "stories": 745
    },
    {
      "id": "1009220",
      "image": "http://i.annihil.us/u/prod/marvel/i/mg/3/50/537ba56d31087/standard_fantastic.jpg",
      "name": "Captain America",
      "description": "Vowing to serve his country any way he could, young Steve Rogers took the super soldier serum to become America's one-man army. Fighting for the red, white and blue for over 60 years, Captain America is the living, breathing symbol of freedom and liberty.",
      "comics": 2067,
      "series": 554,
      "stories": 3071
    },
    {
      "id": "1010338",
      "image": "http://i.annihil.us/u/prod/marvel/i/mg/6/80/5269608c1be7a/standard_fantastic.jpg",
      "name": "Captain Marvel (Carol Danvers)",
      "description": "",
      "comics": 421,
      "series": 140,
      "stories": 510
    },
    {
      "id": "1009282",
      "image": "http://i.annihil.us/u/prod/marvel/i/mg/5/f0/5261a85a501fe/standard_fantastic.jpg",
      "name": "Doctor Strange",
      "description": "",
      "comics": 672,
      "series": 213,
      "stories": 839
    },
    {
      "id": "1009368",
      "image": "http://i.annihil.us/u/prod/marvel/i/mg/9/c0/527bb7b37ff55/standard_fantastic.jpg",
      "name": "Iron Man",
      "description": "Wounded, captured and forced to build a weapon by his enemies, billionaire industrialist Tony Stark instead created an advanced suit of armor to save his life and escape captivity. Now with a new outlook on life, Tony uses his money and intelligence to make the world a safer, better place as Iron Man.",
      "comics": 2404,
      "series": 583,
      "stories": 3551
    },
    {
      "id": "1009583",
      "image": "http://i.annihil.us/u/prod/marvel/i/mg/7/20/527bb5d64599e/standard_fantastic.jpg",
      "name": "She-Hulk (Jennifer Walters)",
      "description": "Seriously wounded, young lawyer Jennifer Walters was given a blood transfusion by her cousin Bruce Banner. Usually in better control of her powers and temper than the Hulk, She-Hulk has been a high profile New York lawyer as well as an upstanding member of both the Avengers and Fantastic Four.",
      "comics": 405,
      "series": 131,
      "stories": 468
    },
    {
      "id": "1009664",
      "image": "http://i.annihil.us/u/prod/marvel/i/mg/d/d0/5269657a74350/standard_fantastic.jpg",
      "name": "Thor",
      "description": "As the Norse God of thunder and lightning, Thor wields one of the greatest weapons ever made, the enchanted hammer Mjolnir. While others have described Thor as an over-muscled, oafish imbecile, he's quite smart and compassionate.  He's self-assured, and he would never, ever stop fighting for a worthwhile cause.",
      "comics": 1582,
      "series": 433,
      "stories": 2419
    }
  ]

  const navigation = {
    navigate: {}
  }

  const tree = renderer.create(<HeroFlatlist heroes={heroes} navigation={navigation} />).toJSON()
  expect(tree).toMatchSnapshot()
})