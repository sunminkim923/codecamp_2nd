import * as React from 'react';
import { ApolloClient, ApolloProvider, ApolloLink, InMemoryCache} from '@apollo/client'
import MainBottomTabNavigationPage from './pages/navigation/MainBottomTabNavigation';

const client = new ApolloClient({
  uri: 'http://backend02.codebootcamp.co.kr/graphql',
  // link: ApolloLink.from([errorLink, uploadLink as unknown as ApolloLink]),
  cache: new InMemoryCache()
})
function App() {
  return (
    <>
    <ApolloProvider client = {client}>
      <MainBottomTabNavigationPage/>
    </ApolloProvider>
    </>
  );
}

export default App;
