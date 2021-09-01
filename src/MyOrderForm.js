import React, { useState, useContext } from "react";
import AppContext from "./AppContext";

export default function MyOrderForm({ total_price }) {
  const [name, setName] = useState("");
  const handleNameChange = (event) => setName(event.target.value);
  const [address, setAddress] = useState("");
  const handleAddressChange = (event) => setAddress(event.target.value);
  const [phone_number, setPhoneNumber] = useState("");
  const handlePhoneChange = (event) => setPhoneNumber(event.target.value);
  const { order_id } = useContext(AppContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`http://localhost:5000/orders/${order_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status: "active",
        name,
        address,
        phone_number,
        total_price
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return "Your order has been received!";
      });
    setName("");
    setAddress("");
    setPhoneNumber("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        Enter Your Name:
        <input
          type="text"
          id="name"
          name="name"
          required
          onChange={handleNameChange}
          value={name}
        />
      </label>
      <label htmlFor="address">
        Enter Your Address:
        <input
          id="address"
          type="address"
          name="address"
          required
          onChange={handleAddressChange}
          value={address}
        />
      </label>
      <label htmlFor="phone">
        Enter Your Phone Number:
        <input
          id="phone"
          type="phone"
          name="phone"
          required
          onChange={handlePhoneChange}
          value={phone_number}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
