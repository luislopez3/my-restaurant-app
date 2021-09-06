import React, { useContext } from "react";
import AppContext from "./AppContext";

export default function OrderReceived() {
  const { order_id, order } = useContext(AppContext);

  console.log(order)

  return (
    <>
      <h2>Your order has been received!</h2>
      <h3>Your order number is: {order_id} </h3>
      <h4>
        Your order will be ready in:{" "}
        {order.items.reduce((acc, item) => {
          return acc + item.quantity;
        }, 0) > 4
          ? 25
          : 15}{" "}
        minutes.
      </h4>
    </>
  );
}
