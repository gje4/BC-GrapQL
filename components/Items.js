import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import styled from "styled-components";
import Item from "./Item";

const ALL_ITEMS_QUERY = gql`
  query getProducts {
    site {
      products {
        edges {
          node {
            name
            description
            entityId
            defaultImage {
              url(width: 200)
            }
            prices {
              price {
                value
              }
            }
          }
        }
      }
    }
  }
`;

const Center = styled.div`
  text-align: center;
`;

const ItemsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
`;

class Items extends Component {
  render() {
    return (
      <Center>
        <Query query={ALL_ITEMS_QUERY}>
          {({ data, error, loading }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error: {error.message}</p>;
            console.log("test", data.site.products.edges);
            // return <a> TEST </a>;
            return (
              <ItemsList>
                {data.site.products.edges.map(item => (
                  <Item item={item} key={item.entityId} />
                ))}
              </ItemsList>
            );
          }}
        </Query>
      </Center>
    );
  }
}

export default Items;
export { ALL_ITEMS_QUERY };
