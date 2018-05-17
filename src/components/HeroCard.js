import React from 'react'
import { View, Image, Text, Dimensions, TouchableHighlight } from 'react-native'
import styled from 'styled-components'
import { createFragmentContainer } from 'react-relay'

import HeroStatsBadge from './HeroStatsBadge'

const Container = styled.View`
  flex-direction: ${'row'};
  margin-bottom: 10px;
  border-color: ${'#bfbfbf'};
  border-width: 2px;
  align-items: ${'center'};
  width: ${(Dimensions.get('window').width - 10)}px;
  background-color: ${'#e6e6e6'};
`

const ImageContainer = styled.View`
  align-items: ${'center'};
  width: ${'30%'};
`

const InfoWrapper = styled.View`
  flex: 1;
  height: 100px;
`

const InfoContainer = styled.View`
  height: ${'80%'}; 
  padding-top: ${25};
`

const StyledImage = styled.Image`
  margin-bottom: 10px;
  margin-top: 10;
  width: 90px;
  height: 90px;
  border-radius: 100;
`

const Info = styled.Text`
  color: ${'#4d4d4d'}; 
  font-weight: ${'bold'};
`
const BadgesContainer = styled.View`
  flex: 1;
  flex-direction: ${'row'}; 
  margin-top: 7;
`

export default class HeroCard extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      this.props.hero
        ?
        <TouchableHighlight onPress={() => navigate('HeroDetail', { hero: this.props.hero })}>
          <Container>
            <ImageContainer>
              <StyledImage
                resizeMode={'cover'}
                source={{ uri: `${this.props.hero.image}` }} />
            </ImageContainer>
            <InfoWrapper>
              <InfoContainer>
                <Info>{this.props.hero.name.toUpperCase()}</Info>

                <BadgesContainer>
                  <HeroStatsBadge bgColor={'#0066ff'} heroStats={null} statName={'Comics'} statNumber={this.props.hero.comics} />
                  <View style={{marginRight: 5}} />
                  <HeroStatsBadge bgColor={'#00cc00'} heroStats={null} statName={'Series'} statNumber={this.props.hero.series} />
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