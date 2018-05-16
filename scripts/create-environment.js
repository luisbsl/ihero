import { Environment, Network, RecordSource, Store } from 'relay-runtime'

const env = (token) => {
  function fetchQuery(
    operation,
    variables,
  ) {
    return fetch('http://localhost:5000/graphql', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': token
      },
      body: JSON.stringify({
        query: operation.text,
        variables
      })
    }).then(response => {
      return response.json()
    })
  }

  const network = Network.create(fetchQuery)
  const source = new RecordSource()
  const store = new Store(source)

  return new Environment({
    network,
    store,
  })
}

export default env