import withApollo from "next-with-apollo";
import ApolloClient from "apollo-boost";

function createClient({ headers }) {
  return new ApolloClient({
    uri: "https://headless.mybigcommerce.com/graphql",
    request: operation => {
      operation.setContext({
        headers: {
          ...headers,
          Authorization:
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiJ9.eyJlYXQiOjIwMDAwMDAwMDAsInN1Yl90eXBlIjoyLCJ0b2tlbl90eXBlIjoxLCJjb3JzIjpbImh0dHBzOi8vYmMtZGVtby5ub3cuc2giXSwiY2lkIjoxLCJpYXQiOjE1NzA2NDg2MzksInN1YiI6InA2OGk1cjJ0cTNocjRwMDJob2ttYnNic3YyemZyZjciLCJzaWQiOjEwMDA3MjMwNzcsImlzcyI6IkJDIn0.0mFHFFSH-coFk8rvLb7vhzoK20qdhGHtvNw4ibZQEd2fXid7qVIeZQvwKU_uGp0uLNRhp2NNb7SW0lq3f41wug"
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
