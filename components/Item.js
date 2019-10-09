import React, { Component } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Title from "./styles/Title";
import ItemStyles from "./styles/ItemStyles";
import PriceTag from "./styles/PriceTag";
import formatMoney from "../lib/formatMoney";

export default class Item extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired
  };

  render() {
    const { item } = this.props;
    console.log("item", item.node);
    return (
      <ItemStyles>
        {item.node.defaultImage.url && (
          <img src={item.node.defaultImage.url} alt={item.node.name} />
        )}

        <Title>
          <Link
            href={{
              pathname: "/item",
              query: { id: item.node.entityId }
            }}
          >
            <a>{item.title}</a>
          </Link>
        </Title>
        <PriceTag>{formatMoney(item.node.prices.price.value)}</PriceTag>
        <p>{item.description}</p>

        <div className="buttonList">
          <Link
            href={{
              pathname: "update",
              query: { id: item.node.entityId }
            }}
          >
            <a>Edit ✏️</a>
          </Link>
          <a>Buy Now</a>
        </div>
      </ItemStyles>
    );
  }
}
