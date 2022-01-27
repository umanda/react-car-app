import { ApolloClient, InMemoryCache } from "@apollo/client";

export const apolloClient = new ApolloClient({
  uri: process.env.REACT_APP_API_URL+`/graphql` as any,
  //uri: `http://localhost:3001/graphql` as any,
  cache: new InMemoryCache(),
});
