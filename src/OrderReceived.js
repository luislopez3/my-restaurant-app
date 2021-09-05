import React, { useState, useContext } from "react";
import AppContext from "./AppContext";
import items from "./MyOrder";

export default function OrderReceived() {
  const [orderTime, setOrderTime] = useState(15);
  const { order_id } = useContext(AppContext);

  /*
  {" "}
        {items.map((item, index) => {
          return (
            <>{item.quantity > 4 ? setOrderTime(orderTime + 10) : orderTime}</>
          );
        })}{" "}
  */
  return (
    <>
      <h2>Your order has been received!</h2>
      <h3>Your order number is: {order_id} </h3>
      <h4>Your order will be ready in: {orderTime} minutes.</h4>
    </>
  );
}
