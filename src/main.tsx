import React from 'react';

import { ApolloProvider } from '@apollo/client';
import { createRoot } from 'react-dom/client';

import App from './App';
import { client } from './lib';

import './styles/global.css';

const rootElement = document.getElementById('root')!;
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
);
