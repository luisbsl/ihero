import { AppRegistry, YellowBox } from 'react-native'
import { createStackNavigator } from 'react-navigation'

// import App from './App'
import LoginScene from './src/scenes/LoginScene'
import HeroFlatlistScene from './src/scenes/HeroFlatlistScene'
import HeroDetailScene from './src/scenes/HeroDetailScene'
import AppNavigator from './src/navigators/AppNavigator'

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader'])

const AppNavigation = createStackNavigator({
  Main: {
    screen: AppNavigator,
    // navigationOptions: {
    //   title: 'iHero App',
    //   // header: ({ params }) => {
    //   //   right:
    //   //   <Button
    //   //     title="Sair"
    //   //     onPress={() => this.params._loggedOut()} />
    //   // }
    // }
  },
  Login: {
    screen: LoginScene,
    navigationOptions: {
      header: null,
    }
  },
  HeroDetail: {
    screen: HeroDetailScene,
    navigationOptions: {
      title: 'Your Hero Detail'
    }
  }
})

AppRegistry.registerComponent('ihero', () => AppNavigation)
