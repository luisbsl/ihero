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

const InfoContainer = styled.View`
  flex: 1;
  height: 100px;
`

const StyledImage = styled.Image`
  margin-bottom: 10px;
  margin-top: 10;
  width: 90px;
  height: 90px;
  border-radius: 100;
`

const Info = styled.Text`
  font-weight: bold;
  font-size: 14px;
  margin-left: 15px;
  margin-top: 15px;
`

const Subtitle = styled.Text`
  margin-left: 15px;
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
            <InfoContainer>
              <View style={{ height: '80%', paddingTop: 25 }} >
                <Text style={{ color: '#4d4d4d', fontWeight: 'bold' }} >{this.props.hero.name.toUpperCase()}</Text>

                <View style={{ flex: 1, flexDirection: 'row', marginTop: 7 }}>
                  <HeroStatsBadge bgColor={'#0066ff'} heroStats={null} statName={'Comics'} statNumber={this.props.hero.comics} />
                  <View style={{marginRight: 5}} />
                  <HeroStatsBadge bgColor={'#00cc00'} heroStats={null} statName={'Series'} statNumber={this.props.hero.series} />
                </View>
              </View>
            </InfoContainer>
          </Container>
        </TouchableHighlight>
        : null
      // <ErrorCard error='Error! Hero properties is required!' />
    )
  }
}