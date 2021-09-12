import "./MyOrder.css";
import React from "react";

export default function OrderItem({ index, item = {}, loadItems }) {
  function updateItem(quantity, item_id) {
    fetch(`http://localhost:5000/order_items/${item_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ quantity }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        loadItems();
      });
  }

  function removeItem(item) {
    fetch(`http://localhost:5000/order_items/${item.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((data) => {
      loadItems();
    });
  }

  return (
    <div className="my-order-row">
      <div className="my-order-column" key={index}>
        <h2>{item.type} Menu</h2>
        <h3>Item: {item.name}</h3>
        <img className="menu-img" src={item.image_url} alt={item.name} />
        <p>
          Quantity:{" "}
          <input
            className="my-order-quantity"
            onChange={(e) => updateItem(e.target.value, item.id)}
            type="number"
            value={item.quantity}
          />
        </p>

        <p>
          <button className="my-order-button" onClick={() => removeItem(item)}>
            Remove Item
          </button>
        </p>
        <p>Price: ${item.price}</p>
      </div>
    </div>
  );
}
