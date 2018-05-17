import React from 'react'
import { View, Text } from 'react-native'

export default class HeroStatsBadge extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View style={{ width: 100, height: 20, borderRadius: 2, backgroundColor: this.props.bgColor }}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View style={{ width: 40 }} >
            <Text
              style={{ 
                color: '#fff', 
                fontWeight: 'bold', 
                textAlign: 'center' }} >
              {this.props.statNumber}
            </Text>
          </View>
          <View 
            style={{ 
              width: 90, 
              marginLeft: 3 }} >
            <Text 
              style={{ 
                color: '#fff' }} >
              {this.props.statName}
            </Text>
          </View>
        </View>
      </View>
    )
  }
}