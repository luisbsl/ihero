import React from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import { QueryRenderer } from 'react-relay'

import environment from '../../scripts/create-environment'

const createQueryRender = (WrappedComponent) => {
  class CreateQueryRender extends React.Component {
    render() {
      return (
        <QueryRenderer
          environment={environment()}
          query={this.props.query}
          render={({ error, props }) => {
            if (error) {
              return <Text>{error.message}</Text>
            } else if (props) {
              return (
                <WrappedComponent {...this.props} data={props} />
              )
            } else {
              return <ActivityIndicator size="large" color="#0000ff" />
            }
          }}
        />
      )
    }
  }
  return CreateQueryRender
}

export default createQueryRender