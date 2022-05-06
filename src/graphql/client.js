import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      "x-hasura-admin-secret":
        "uzt6ks8EtM7cMuf72MAn6AV3aM5D3s2D7g4EboxZItMl24iBeXVoaWk93S31H8cc",
    },
  };
});

const httpLink = createHttpLink({
  uri: "https://music-line-apollo.hasura.app/v1/graphql",
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
