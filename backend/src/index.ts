/* tslint:disable:no-console */
import { GraphQLServer } from 'graphql-yoga'
import 'reflect-metadata'

import { resolvers } from './resolvers'
import { typeDefs } from './schema'

const server = new GraphQLServer({
  typeDefs,
  resolvers,
  context: req => ({
    ...req,
  }),
})
server
  .start({
    cacheControl: true,
    tracing: true,
  })
  .then(http => console.log(`GraphQL Server is running on localhost:4000`))
  .catch(err => {
    console.error(`Something went wrong:${err}`)
    process.exit(1)
  })
