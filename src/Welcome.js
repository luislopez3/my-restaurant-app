import React from "react";
import { Link, Route, useRouteMatch } from "react-router-dom";
import Breakfast from "./Breakfast";

export default function Welcome() {
  const menuList = ["Breakfast", "Lunch", "Dinner"];
  const { url, path } = useRouteMatch();

  return (
    <div>
      <h1>Capital City Cafe</h1>
      <h2>Welcome to your next favorite restaurant!</h2>
      <h3>We offer many classic and unique dishes that are sure to please.</h3>
      <p>
        We are open daily from 7:00 - 3:00, for Breakfast and Lunch, and 5:00 -
        9:00 for Dinner.
      </p>
      <p>Breakfast is served from 7:00 - 11:00</p>
      <p>Lunch is served from 11:00 - 3:00</p>
      <p>Dinner is served from 5:00 - 9:00</p>
      <hr />
      <h4>To start an order, click the "menu" link below.</h4>
      <h4>
        If you have created an account and would like to repeat a previous
        order, click the "My Orders" link to log-in to your account.
      </h4>
      {menuList.map((menu, index) => {
        return (
          <ul key={index}>
            <Link to={`${url}/${menu}`}>
              <button>{menu}</button>
            </Link>
          </ul>
        );
      })}
      <hr />
      <Route path={`${path}/:menu`}>
        <Breakfast />
      </Route>
    </div>
  );
}
