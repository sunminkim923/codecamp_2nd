import * as React from 'react';
// import {
//   ApolloClient,
//   ApolloProvider,
//   ApolloLink,
//   InMemoryCache,
// } from '@apollo/client';
import MainBottomTabNavigationPage from './pages/navigation/MainBottomTabNavigation';
import {useState, createContext} from 'react';
import StartPageStackNAvigationPage from './pages/navigation/StartPageStackNavigation';

// const client = new ApolloClient({
//   uri: 'http://backend02.codebootcamp.co.kr/graphql',
//   // link: ApolloLink.from([errorLink, uploadLink as unknown as ApolloLink]),
//   cache: new InMemoryCache(),
// });

export const GlobalContext = createContext({});

function App() {
  const [idToken, setIdToken] = useState();
  const [userInfo, setUserInfo] = useState(false);

  const value = {
    idToken: idToken,
    setIdToken: setIdToken,
    userInfo: userInfo,
    setUserInfo: setUserInfo,
  };
  return (
    <>
      <GlobalContext.Provider value={value}>
        {/* <ApolloProvider client={client}> */}
        {userInfo ? (
          <>
            <MainBottomTabNavigationPage />
          </>
        ) : (
          <>
            <StartPageStackNAvigationPage />
          </>
        )}
        {/* </ApolloProvider> */}
      </GlobalContext.Provider>
    </>
  );
}

export default App;
