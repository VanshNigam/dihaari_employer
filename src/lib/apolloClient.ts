import { ApolloClient, InMemoryCache, HttpLink, ApolloLink } from '@apollo/client';

export function createApolloClient(accessToken: string) {
  const httpLink = new HttpLink({
    uri: 'http://localhost:4000/graphql', // Your GraphQL server URL
  });

  const authLink = new ApolloLink((operation, forward) => {
    // Add the access token to headers
    operation.setContext({
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    });
    return forward(operation);
  });

  return new ApolloClient({
    link: ApolloLink.from([authLink, httpLink]),
    cache: new InMemoryCache(),
  });
}
