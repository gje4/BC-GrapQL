import withApollo from "next-with-apollo";
import ApolloClient from "apollo-boost";
import { devToken, prodToken } from "../config";

function createClient({ headers }) {
  return new ApolloClient({
    uri: "https://grapgqltest.mybigcommerce.com/graphql",
    request: operation => {
      operation.setContext({
        headers: {
          ...headers,
          Authorization:
            process.env.NODE_ENV === "development"
              ? `Bearer ${devToken}`
              : `Bearer ${prodToken}`
        }
      });
    },
    // local data
    clientState: {
      resolvers: {
        Mutation: {}
      },
      defaults: {}
    }
  });
}

export default withApollo(createClient);
