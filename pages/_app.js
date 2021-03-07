import '../styles/globals.css'
import { ApolloClient,createHttpLink, InMemoryCache,ApolloProvider  } from '@apollo/client';
// import { setContext } from '@apollo/client/link/context';
import { ChakraProvider } from "@chakra-ui/react"

import theme from '@/theme/index';

// const httpLink = createHttpLink({
  // uri: '/api/graphql',
// });

// const authLink = setContext((_, { headers }) => {
//   // get the authentication token from local storage if it exists
//   const token = localStorage.getItem('token');
//   // return the headers to the context so httpLink can read them
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : "",
//     }
//   }
// });

const client = new ApolloClient({
  uri: '/api/graphql',
  cache: new InMemoryCache(),
  // credentials: "include",
  request: operation => {
    //get the token and set it to headers of each request
    let token = localStorage.getItem('token');
    console.log(token);
    operation.setContext({
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      }
    });
  }
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
