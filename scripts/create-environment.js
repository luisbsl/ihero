import { Environment, Network, RecordSource, Store } from 'relay-runtime'

function fetchQuery(
  operation,
  variables,
) {
  return fetch('http://localhost:5000/graphql', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhZjczZDA5ZThmOTdlNjc0YzIyZDQ3NSIsImlhdCI6MTUyNjMwNzQ0OH0.YoNza9_YPmK9GOdAbJu8Ca5lw4GSRORFLc9ENdKp4tw'
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

export default new Environment({
  network,
  store,
})