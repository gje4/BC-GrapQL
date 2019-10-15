import React, { Component } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Title from "./styles/Title";
import ItemStyles from "./styles/ItemStyles";
import PriceTag from "./styles/PriceTag";
import formatMoney from "../lib/formatMoney";
import Parser from "html-react-parser";
import axios from "axios";
import Router from "next/router";

const buttonStyles = {
  fontSize: "13px",
  textAlign: "center",
  color: "#fff",
  outline: "none",
  padding: "12px 60px",
  boxShadow: "2px 5px 10px rgba(0,0,0,.1)",
  backgroundColor: "rgb(255, 178, 56)",
  borderRadius: "6px",
  letterSpacing: "1.5px"
};

export default class Item extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired
  };
  static contextTypes = {
    router: PropTypes.object
  };
  async redirectToCheckout(event) {
    event.preventDefault();
    console.log("prop", this.props.item.node.entityId);

    axios
      .post("https://3htij6awx3.execute-api.us-east-1.amazonaws.com/dev/cart", {
        channel_id: 20825,
        line_items: [
          {
            quantity: 1,
            product_id: this.props.item.node.entityId
          }
        ]
      })
      .then(checkoutData => {
        console.log("test", { checkoutData: JSON.parse(checkoutData.data) });

        const checkoutDataPass = JSON.parse(checkoutData.data);
        console.log("url", checkoutDataPass.data.embedded_checkout_url);
        const checkoutUrl = checkoutData.data.embedded_checkout_url;
        Router.push({
          pathname: "/checkout",
          state: {
            checkoutData: checkoutDataPass
          },
          props: {
            url: checkoutDataPass.data.embedded_checkout_url
          },
          query: {
            url: checkoutDataPass.data.embedded_checkout_url
          }
        });
      })

      .catch(error => {
        console.log("checkoutDataError", error);
      });
  }

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
            <a>{item.node.name}</a>
          </Link>
        </Title>
        <PriceTag>{formatMoney(item.node.prices.price.value * 100)}</PriceTag>
        <div>{Parser(item.node.description)}</div>
        <div className="buttonList">
          <button
            style={buttonStyles}
            onClick={event => this.redirectToCheckout(event)}
          >
            BUY NOW
          </button>
        </div>
      </ItemStyles>
    );
  }
}
