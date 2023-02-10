import { setupWorker } from 'msw'
import graphqlHandlers from './handlers/graphql'
import restHandlers from './handlers/rest'

const handlers = [...graphqlHandlers, ...restHandlers]

export const worker = setupWorker(...handlers)
