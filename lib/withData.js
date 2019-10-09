import withApollo from "next-with-apollo";
import ApolloClient from "apollo-boost";

function createClient({ headers }) {
  return new ApolloClient({
    uri: "https://headless.mybigcommerce.com/graphql",
    request: operation => {
      operation.setContext({
        ...headers,
        "Content-Type": "application/json",

        "X-Auth-Client": "rstcpw0dk6udvc45o6sl0skvr5pexss",
        "X-Auth-Token": "eo8zlp9nzaw8j12tlt4xknfj77byft1",
        Authorization:
          "Bearer simple_jkwmtff63ap318zciryjbfwanagbedsze61f2hyvnq11fccdpjllgcm5xqpl7y28"
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
