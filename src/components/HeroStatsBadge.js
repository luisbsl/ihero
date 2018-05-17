import React from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components'

const Container = styled.View`
  flex: 1;
  flex-direction: ${'row'};
`
const BadgeNumberContainer = styled.View`
  width: 40;
`
const BadgeNumber = styled.Text`
  color: ${'#fff'}; 
  font-weight: ${'bold'}; 
  text-align: ${'center'};
`

const BadgeTextContainer = styled.View`
  width: 90;
  margin-left: 3;
`

const BadgeText = styled.Text`
  color: ${'#fff'};
`

export default class HeroStatsBadge extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View style={{ width: 100, height: 20, borderRadius: 2, backgroundColor: this.props.bgColor }}>
        <Container>
          <BadgeNumberContainer style={{ width: 40 }} >
            <BadgeNumber>
              {this.props.statNumber}
            </BadgeNumber>
          </BadgeNumberContainer>
          <BadgeTextContainer>
            <BadgeText>
              {this.props.statName}
            </BadgeText>
          </BadgeTextContainer>
        </Container>
      </View>
    )
  }
}