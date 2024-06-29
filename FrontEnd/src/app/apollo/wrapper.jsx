"use client";
import Cookies from 'js-cookie';
import { ApolloLink, HttpLink } from "@apollo/client";
import {
  ApolloNextAppProvider,
  ApolloClient,
  InMemoryCache,
  SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support";
import { setContext } from '@apollo/client/link/context';

function makeClient() {
  const httpLink = new HttpLink({
    uri: "http://localhost:8080/proxy",
    fetchOptions: { cache: "no-store" },
  });

  const authLink = setContext((_, { headers }) => {
    const token =  Cookies.get('jwt');
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      }
    };
  });

  const link = ApolloLink.from([authLink, httpLink]);

  return new ApolloClient({
    cache: new InMemoryCache(),
    link: link,
  });
}

// You need to create a component to wrap your app in
export function ApolloWrapper({ children }) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
}
