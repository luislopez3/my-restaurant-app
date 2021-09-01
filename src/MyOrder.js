import React, { useEffect, useState, useContext } from "react";
import AppContext from "./AppContext";
import MyOrderForm from "./MyOrderForm";
import OrderItem from "./OrderItem";

export default function MyOrder() {
  const [orders, setOrders] = useState({});
  const [items, setItems] = useState([]);
  const { order_id } = useContext(AppContext);

  useEffect(() => {
    if (!order_id) {
      return;
    }
    fetch(`http://localhost:5000/orders/${order_id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setOrders(data);
        loadItems();
      });
  }, [order_id]);

  console.log(orders);

  function loadItems() {
    return fetch(`http://localhost:5000/order_items/${order_id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setItems(data);
      });
  }

  /*
  function confirmOrder() {
    return (
      <div>
        <MyOrderForm total_price={calc.value} />;
      </div>
    );
  }
  */

  function calculateTotal() {
    let total = 0;
    let tax = 0.05;
    for (let i = 0; i < items.length; i++) {
      total += items[i].price;
    }
    return { value: total + total * tax, tax, total };
  }
  const calc = calculateTotal();

  function bagTotal() {
    return (
      <div>
        <h5>
          Subtotal:{" "}
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(calc.total)}
        </h5>
        <h5>
          Tax (5%):{" "}
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(calc.total * calc.tax)}
        </h5>
        <hr />
        <h4>
          Total incl. tax:{" "}
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(calc.value)}
        </h4>
      </div>
    );
  }

  return (
    <>
      {items.map((item, index) => {
        return <OrderItem item={item} index={index} loadItems={loadItems} />;
      })}
      <div>{bagTotal()}</div>
      <button onClick={() => confirmOrder()}>Confirm Order</button>
      <MyOrderForm total_price={calc.value} />
    </>
  );
}
