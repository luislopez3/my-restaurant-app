import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import AppContext from "./AppContext";

export default function MyOrderForm({ total_price }) {
  const [name, setName] = useState("");
  const handleNameChange = (event) => setName(event.target.value);
  const [address, setAddress] = useState("");
  const handleAddressChange = (event) => setAddress(event.target.value);
  const [email, setEmail] = useState("");
  const handleEmailChange = (event) => setEmail(event.target.value);
  const [phone_number, setPhoneNumber] = useState("");
  const handlePhoneChange = (event) => setPhoneNumber(event.target.value);
  const { order_id, setOrder, setOrderId } = useContext(AppContext);
  let history = useHistory();
  const order = {
    status: "active",
    name,
    address,
    email,
    phone_number,
    total_price,
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`http://localhost:5000/orders/${order_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setOrder(stateOrder => ({ ...stateOrder, ...order }));
        setOrderId(null);
        localStorage.clear();
        history.push("/order_received");
      });
    setName("");
    setAddress("");
    setEmail("");
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
      <label htmlFor="email">
        Enter Your Email:
        <input
          id="email"
          type="email"
          name="email"
          required
          onChange={handleEmailChange}
          value={email}
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
