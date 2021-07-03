import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { ApolloCache, ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'


const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: InMemoryCache()
})

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
