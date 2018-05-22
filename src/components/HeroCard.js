// @flow

import React from 'react'
import { createFragmentContainer } from 'react-relay'
import { View, Image, Text, Dimensions, TouchableHighlight } from 'react-native'
import styled from 'styled-components'

import type { HeroType } from '../types/HeroType'
import HeroStatsBadge from './HeroStatsBadge'

const Container = styled.View`
  flex-direction: row;
  margin-bottom: 10px;
  border-color: #bfbfbf;
  border-width: 2px;
  align-items: center;
  width: ${(Dimensions.get('window').width - 10)}px;
  background-color: #e6e6e6;
`

const ImageContainer = styled.View`
  align-items: center;
  width: 30%;
`

const InfoWrapper = styled.View`
  flex: 1;
  height: 100px;
`

const InfoContainer = styled.View`
  height: 80%; 
  padding-top: 25px;
`

const StyledImage = styled.Image`
  margin-bottom: 10px;
  margin-top: 10px;
  width: 90px;
  height: 90px;
  border-radius: 100;
`

const Info = styled.Text`
  color: #4d4d4d; 
  font-weight: bold;
`
const BadgesContainer = styled.View`
  flex: 1;
  flex-direction: row; 
  margin-top: 7px;
`

type Props = {
  hero: HeroType,
  navigation: Object
}

export default class HeroCard extends React.Component<Props> {
  render() {
    const { navigate } = this.props.navigation
    const { hero } = this.props
    return (
      hero
        ?
        <TouchableHighlight onPress={() => navigate('HeroDetail', { hero: hero })}>
          <Container>
            <ImageContainer>
              <StyledImage
                resizeMode={'cover'}
                source={{ uri: `${hero.image}` }} />
            </ImageContainer>
            <InfoWrapper>
              <InfoContainer>
                <Info>{hero.name.toUpperCase()}</Info>

                <BadgesContainer>
                  <HeroStatsBadge bgColor={'#0066ff'} statName={'Comics'} statNumber={hero.comics} />
                  <View style={{ marginRight: 5 }} />
                  <HeroStatsBadge bgColor={'#00cc00'} statName={'Series'} statNumber={hero.series} />
                </BadgesContainer>
              </InfoContainer>
            </InfoWrapper>
          </Container>
        </TouchableHighlight>
        : null
      // <ErrorCard error='Error! Hero properties is required!' />
    )
  }
}