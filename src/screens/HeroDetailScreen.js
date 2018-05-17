import React from 'react'
import { View, Text, Image } from 'react-native'

class HeroDetailScreen extends React.Component {
  render() {
    const { hero } = this.props.navigation.state.params
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%'
      }} >
        <View
          style={{
            height: '10%',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center'
          }} >
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: '#4d4d4d'
            }} >
            {hero.name}
          </Text>
        </View>

        <View
          style={{
            height: '40%',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center'
          }} >
          <Image
            resizeMode={'cover'}
            style={{ width: 200, height: 200, borderRadius: 100 }}
            source={{ uri: `${hero.image}` }} />
        </View>

        <View
          style={{
            height: '50%',
            width: '80%',
            justifyContent: 'center',
            alignItems: 'center'
          }} >
          <Text style={{ color: '#4d4d4d', fontSize: 16 }} >
            {hero.description? hero.description: 'No Description available'}
          </Text>
        </View>
      </View>
    )
  }
}

export default HeroDetailScreen