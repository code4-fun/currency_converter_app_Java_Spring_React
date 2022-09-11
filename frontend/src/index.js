import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/_styles.scss'
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://converter-with-graphql.herokuapp.com/graphql',
  cache: new InMemoryCache({
    addTypename: false
  })
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)