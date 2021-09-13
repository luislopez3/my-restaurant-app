import "./FullMenu.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import config from "./config";

export default function FullMenu() {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    fetch(`${config.API_URL}/menu_items/menus`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setMenus(data);
      });
  }, []);

  return (
    <div className="full-menu">
      <h1 className="home-link">
        To create an order, return to the
        <Link className="home-link" to="/">
          Welcome
        </Link>
        page to select the appropriate menu for the current time.
      </h1>
      <>
        {menus.map((menu, index) => {
          return (
            <div className="full-menu-row">
              <div className="full-menu-column" key={index}>
                <h2>{menu.type}</h2>
                <h3>{menu.name}</h3>
                <h4>Description: {menu.description}</h4>
                <img
                  className="menu-img"
                  src={menu.image_url}
                  alt={menu.name}
                />
                <h4>Price: ${menu.price}</h4>
              </div>
            </div>
          );
        })}
      </>
    </div>
  );
}
