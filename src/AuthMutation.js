import {
  commitMutation,
  fetchQuery,
  graphql
} from 'react-relay'
import environment from '../scripts/create-environment'

const mutation = graphql`
  mutation AuthMutation($input: LoginEmailInput!) {
    LoginEmail(input: $input) {
      token
    }
  }
`
export const authenticate = (email, password, callback) => {
  const variables = {
    input: {
      email,
      password
    }
  }

  commitMutation(
    environment,
    {
      mutation,
      variables,
      onCompleted: (response) => {
        const token = response.LoginEmail.token
        callback(token)
      },
      onError: err => console.error(err),
    },
  )
}

const meQuery = graphql`
  query AuthMutationQuery {
    me {
      id
      name
      email
    }
  }
`

export const MeQuery = () => {
  fetchQuery(environment, meQuery)
    .then(data => {
      alert(JSON.stringify(data))
    })
}