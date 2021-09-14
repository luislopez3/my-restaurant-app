import "./Welcome.css";
import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import Inside from "./photos/Inside.jpeg";
import Breakfast from "./photos/Breakfast.jpeg";
import Lunch from "./photos/Lunch.jpeg";
import Dinner from "./photos/Dinner.jpeg";

export default function Welcome() {
  const { url } = useRouteMatch();

  return (
    <>
      <div className="welcome">
        <h1 className="first-header">CAPITAL CITY CAFE</h1>
        <img src={Inside} className="first-img" alt="Inside Restaurant" />
        <div className="first-img-text">
          <h2>Welcome to your next favorite restaurant!</h2>
          <h3>We are open daily from 7:00 - 9:00.</h3>
          <h4>Breakfast is served from 7:00 - 11:00</h4>
          <h4>Lunch is served from 11:00 - 3:00</h4>
          <h4>Dinner is served from 5:00 - 9:00</h4>
          <h4>To start an order, click the appropriate menu link below.</h4>
        </div>
      </div>

      <div className="welcome-column">
        <Link to={`${url}menu/Breakfast`}>
          <h5>Breakfast Menu</h5>
          <img
            className="welcome-img"
            src={Breakfast}
            alt={"Breakfast Plate"}
          />
        </Link>
      </div>
      <div className="welcome-column">
        <Link to={`${url}menu/Lunch`}>
          <h5>Lunch Menu</h5>
          <img className="welcome-img" src={Lunch} alt={"Lunch Plate"} />
        </Link>
      </div>

      <div className="welcome-column">
        <Link to={`${url}menu/Dinner`}>
          <h5>Dinner Menu</h5>
          <img className="welcome-img" src={Dinner} alt={"Dinner Plate"} />
        </Link>
      </div>
      <div className="welcome-footer">
        <h4>1000 Main Street Santa Fe, New Mexico 87501</h4>
        <h4>(505) 555-1234</h4>
      </div>
    </>
  );
}
