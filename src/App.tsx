import { ApolloProvider } from '@apollo/client';

import { Teste } from './components';
import { client } from './lib';

function App(): JSX.Element {
  return (
    <ApolloProvider client={client}>
      <Teste />
    </ApolloProvider>
  );
}

export default App;
