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
      })
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

  function calculateTotal() {
    let total = 0;
    let tax = 0.05;
    for (let i = 0; i < items.length; i++) {
      total += items[i].price;
    }
    return {value: total + total * tax, tax, total}
  }
  const calc = calculateTotal();
  function bagTotal() {
    
    return (
      <div>
        <p>
          Subtotal:{" "}
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(calc.total)}
        </p>
        <p>
          Tax (5%):{" "}
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(calc.total * calc.tax)}
        </p>
        <hr />
        <p>
          Total incl. tax:{" "}
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(calc.value)}
        </p>
      </div>
    );
  }

  return (
    <>
      {items.map((item, index) => {
        return (
          <OrderItem item={item} index={index} loadItems={loadItems} />
        );
      })}

      <div>{bagTotal()}</div>

      <div>
        <MyOrderForm total_price={calc.value} />
      </div>
    </>
  );
}
