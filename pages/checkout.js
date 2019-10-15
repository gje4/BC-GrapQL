import React from "react";
import ReactDOM from "react-dom";
import Embedcheckout from "../components/embedcheckout";

export default props => {
  console.log("props", props.query);

  // function testing() {
  //   if (typeof window !== "undefined") {
  //     console.log(
  //       "windowstaturl",
  //       window.history.state.checkoutData.data.embedded_checkout_url
  //     );
  //     return window.history.state.checkoutData.data.embedded_checkout_url;
  //   }
  // }
  return (
    <div>
      <Embedcheckout url={props.query} />
    </div>
  );
};
