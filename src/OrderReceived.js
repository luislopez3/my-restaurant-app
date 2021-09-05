import React, { useState, useContext, useCallback, useEffect } from "react";
import AppContext from "./AppContext";

export default function OrderReceived() {
  const [orderTime, setOrderTime] = useState(15);
  const [orderItems, setOrderItems] = useState([]);
  const { order_id } = useContext(AppContext);

  useEffect(() => {
    fetch(`http://localhost:5000/order_items/${order_id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setOrderItems(data);
      });
  }, [order_id]);

  return (
    <>
      <h2>Thank you for placing your order!</h2>

      <h3>The total amount due at pick-up is: </h3>
      <h4>
        And your order will be ready in:{" "}
        {orderItems.map((item, index) => {
          return (
            <>{item.quantity > 4 ? setOrderTime(orderTime + 10) : orderTime}</>
          );
        })}{" "}
        minutes.
      </h4>
    </>
  );
}
