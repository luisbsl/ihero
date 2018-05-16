import {
  commitMutation,
  fetchQuery,
  graphql
} from 'react-relay'
import environment from '../../scripts/create-environment'

const mutation = graphql`
  mutation RegisterMutation($input: RegisterEmailInput!) {
    RegisterEmail(input: $input) {
      token
    }
  }
`
export const register = (name, email, password, callback) => {
  const variables = {
    input: {
      name,
      email,
      password
    }
  }

  commitMutation(
    environment(null),
    {
      mutation,
      variables,
      onCompleted: (response) => {
        const token = response.RegisterEmail.token
        callback(token)
      },
      onError: err => console.error(err),
    },
  )
}