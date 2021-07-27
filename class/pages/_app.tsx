import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client'
import { AppProps } from 'next/dist/next-server/lib/router/router'
import '../styles/globals.css'
import 'antd/dist/antd.css'
import Layout from '../src/commons/layout'
import { Global } from '@emotion/react'
import { globalstyles } from '../src/commons/styles/globalStyles'
import firebase from 'firebase/app'
import 'firebase/firestore'

if (typeof window !== "undefined" ) {
firebase.initializeApp({
  apiKey: "AIzaSyB2AZodzgw35GmS8qlyy3Z22jFI3Du2GH8",
  authDomain: "codecamp-01.firebaseapp.com",
  databaseURL: "https://codecamp-01.firevaseio.com",
  projectId: "codecamp-01",
  storageBucket: "codecamp-01.appspot.com",
})
}

function MyApp({ Component, pageProps }: AppProps) {
  const client = new ApolloClient({
    uri: 'http://backend02.codebootcamp.co.kr/graphql',//백앤드 API가 있는 주소
    cache: new InMemoryCache()
  })

  return (
    <ApolloProvider client={client}>
      <Layout>
        <Global styles={globalstyles}/>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  )
}
export default MyApp



