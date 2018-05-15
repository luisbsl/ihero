var fetch = require('node-fetch')
var fs = require('fs')

const { buildClientSchema, introspectionQuery, printSchema } = require('graphql/utilities')

fetch('http://localhost:5000/graphql',
  {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ 'query': introspectionQuery })
  }
).then(res => res.json()).then(res => {
  const schemaString = printSchema(buildClientSchema(res.data))
  fs.writeFileSync('schema.graphql', schemaString)
})