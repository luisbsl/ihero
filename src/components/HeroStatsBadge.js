import React from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components'

const ContainerWrapper = styled.View`
  width: 100px;
  height: 20px; 
  border-radius: 2px;
  background-color: ${props => props.bgColor};
`

const Container = styled.View`
  flex: 1;
  flex-direction: row;
`
const BadgeNumberContainer = styled.View`
  width: 40px;
`
const BadgeNumber = styled.Text`
  color: #ffffff; 
  font-weight: bold; 
  text-align: center;
`

const BadgeTextContainer = styled.View`
  width: 90px;
  margin-left: 3px;
`

const BadgeText = styled.Text`
  color: #ffffff;
`

export default class HeroStatsBadge extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <ContainerWrapper {...this.props} >
        <Container>
          <BadgeNumberContainer>
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
      </ContainerWrapper>
    )
  }
}