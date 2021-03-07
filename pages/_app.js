import '../styles/globals.css'
import { ApolloClient, createHttpLink, ApolloProvider, InMemoryCache  } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { ChakraProvider } from "@chakra-ui/react"

import theme from '@/theme/index';

const httpLink = createHttpLink({
  uri: '/api/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  // console.log({token});
  
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
// if (document.cookie && document.cookie.includes('authed')) {
//   window.location.href = "/dashboard"
// }

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider theme={theme} >
        <Component {...pageProps} />
      </ChakraProvider>
    </ApolloProvider>
  )
}

export default MyApp
