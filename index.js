import React from 'react'
import StorybookUI from './storybook'
import { AppRegistry, YellowBox } from 'react-native'

import App from './App'

YellowBox.ignoreWarnings([
  'Warning: isMounted(...) is deprecated', 'Module RCTImageLoader',
  'The StackNavigator function name is deprecated, please use createStackNavigator instead'
])

AppRegistry.registerComponent('ihero', () => App)
