import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import promise from 'redux-promise'

import AppNavigator from './src/navigators/AppNavigator'
import reducers from './src/reducers'

const store = applyMiddleware(promise)(createStore)(reducers)

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider >
    )
  }
}