import React from 'react'
import { View, Text, Image } from 'react-native'
import styled from 'styled-components'

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

const TitleContainer = styled.View`
  height: 10%;
  width: 100%;
  justify-content: center;
  align-items: center;
`

const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #4d4d4d;
`

const ImageContainer = styled.View`
  height: 40%;
  width: 100%;
  justify-content: center;
  align-items: center;
`

const ImageStyled = styled.Image`
  width: 200px;
  height: 200px;
  border-radius: 100;
`

const DescriptionContainer = styled.View`
  height: 50%;
  width: 80%;
  justify-content: center;
  align-items: center;
`

const Description = styled.Text`
  color: #4d4d4d;
  font-size: 16px;
`

class HeroDetail extends React.Component {
  render() {
    const { hero } = this.props
    return (
      <Container>
        <TitleContainer>
          <Title>
            {hero.name}
          </Title>
        </TitleContainer>

        <ImageContainer>
          <ImageStyled
            resizeMode={'cover'}
            source={{ uri: `${hero.image}` }} />
        </ImageContainer>

        <DescriptionContainer>
          <Description>
            {hero.description? hero.description: 'No Description available'}
          </Description>
        </DescriptionContainer>
      </Container>
    )
  }
}

export default HeroDetail