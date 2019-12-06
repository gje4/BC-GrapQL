import withApollo from "next-with-apollo";
import ApolloClient from "apollo-boost";

function createClient({ headers }) {
  return new ApolloClient({
    uri: "https://grapgqltest.mybigcommerce.com/graphql",
    request: operation => {
      operation.setContext({
        headers: {
          ...headers,
          Authorization:
            process.env.NODE_ENV === "development"
              ? `Bearer ${process.env.BC_TOKEN}`
              : `Bearer ${process.env.BC_TOKEN}`
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
