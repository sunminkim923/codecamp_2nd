import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client'
import { AppProps } from 'next/dist/next-server/lib/router/router'
import '../styles/globals.css'
import 'antd/dist/antd.css'
import Layout from '../src/commons/layout/index'
import { Global } from '@emotion/react'
import { globalstyles } from '../src/commons/styles/globalstyles'


function MyApp({ Component, pageProps }:AppProps) {
  const client = new ApolloClient({
    uri: 'http://backend02.codebootcamp.co.kr/graphql',//백앤드 API가 있는 주소
    cache: new InMemoryCache()
  })

  return (
    <ApolloProvider client={client}>
      <Layout>
        <Global styles={globalstyles} />
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  )
}

export default MyApp