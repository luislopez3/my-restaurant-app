import "./App.css";
import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Welcome from './Welcome';
import MyOrders from './MyOrders';
import Location from './Location';

export default function App() {
  return (
    <Router>
      <div style={{ width: 1000, margin: "0 auto", padding: 20 }}>
        <Link to="/">Welcome</Link> | <Link to="/my-orders">My Orders</Link> | <Link to="/location">Location/Contact</Link>
        <hr />
        <Route exact path="/">
          <Welcome />
        </Route>
        <Route path="/my-orders">
          <MyOrders />
        </Route>
      <Route path="/location">
        <Location />
      </Route>
      </div>
    </Router>
  );
}
