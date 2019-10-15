import React from "react";
import { embedCheckout } from "@bigcommerce/checkout-sdk";

class Embedcheckout extends React.Component {
  componentDidMount() {
    // Embedcheckout checkout
    // embedCheckout({ containerId: "checkout", url: this.props.url });
    //Redirect to store checkout
    window.location.href = this.props.url.url;
  }
  render() {
    return (
      // Embedcheckout checkout
      <div id="checkout"></div>
    );
  }
}
export default Embedcheckout;
