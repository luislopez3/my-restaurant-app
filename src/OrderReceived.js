import React, { useContext } from "react";
import AppContext from "./AppContext";

export default function OrderReceived() {
  const { order } = useContext(AppContext);

  function plateNames() {
    return order.items.map((item, index) => {
      return (
        <ul key={index}>
          <li>{item.name}</li>
        </ul>
      );
    });
  }

  function orderReceipt() {
    return (
      <ul>
        <li>Your order number is: {order.order_id}</li>
        <li>The name on your order is: {order.name} </li>
        <li>The email associated with your order is: {order.email}</li>
        <li>
          Your order includes the following items: <ol>{plateNames()}</ol>
        </li>
        <li>The total amount due at pick-up is: ${order.total_price}</li>
      </ul>
    );
  }

  return (
    <>
      <h2>Your order has been received!</h2>
      <h3>
        Your order will be ready in:{" "}
        {order.items.reduce((acc, item) => {
          return acc + item.quantity;
        }, 0) > 4
          ? 25
          : 15}{" "}
        minutes.
      </h3>
      <h4>Your order receipt: {orderReceipt()} </h4>
    </>
  );
}
