import "./App.css";
import React, { useState } from "react";
import AppContext from "./AppContext";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Welcome from "./Welcome";
import FullMenu from "./FullMenu";
import MyOrder from "./MyOrder";
import Location from "./Location";
import Menu from "./Menu";
import OrderReceived from "./OrderReceived";

export default function App() {
  const [order_id, setOrderId] = useState(localStorage.order_id || null);
  const value = { order_id, setOrderId };

  return (
    <AppContext.Provider value={value}>
      <Router>
        <div style={{ width: 1000, margin: "0 auto", padding: 20 }}>
          <Link to="/">Welcome</Link> | <Link to="/menus">Full Menu</Link> |
          <Link to="/my-order">My Order</Link> |{" "}
          <Link to="/location">Location/Contact</Link>
          <hr />
          <Route exact path="/">
            <Welcome />
          </Route>
          <Route path="/menus">
            <FullMenu />
          </Route>
          <Route path="/my-order">
            <MyOrder />
          </Route>
          <Route path="/location">
            <Location />
          </Route>
          <Route path="/menu/:type">
            <Menu />
          </Route>
          <Route path="/order_received">
            <OrderReceived />
          </Route>
        </div>
      </Router>
    </AppContext.Provider>
  );
}
