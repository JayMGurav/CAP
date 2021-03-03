import '../styles/globals.css'
import { ApolloClient, InMemoryCache,ApolloProvider  } from '@apollo/client';
import { ChakraProvider } from "@chakra-ui/react"

import theme from '@/theme/index';


const client = new ApolloClient({
  uri: '/api/graphql',
  cache: new InMemoryCache()
});


function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider resetCSS theme={theme} >
        <Component {...pageProps} />
      </ChakraProvider>
    </ApolloProvider>
  )
}

export default MyApp
