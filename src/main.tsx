import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import router from './router'
import { worker } from './mocks/browser'
import './index.css'

const graphqlApiUri = 'https://rickandmortyapi.com/graphql'
export const restApiUri = 'https://rickandmortyapi.com/api'

// Graphql config
const apolloClient = new ApolloClient({
  uri: graphqlApiUri,
  cache: new InMemoryCache(),
})

// Rest config
const queryClient = new QueryClient()

if (import.meta.env.MODE === 'development') {
  worker.start({
    onUnhandledRequest: 'bypass',
  })
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ApolloProvider client={apolloClient}>
        <RouterProvider router={router} />
      </ApolloProvider>
    </QueryClientProvider>
  </React.StrictMode>
)
