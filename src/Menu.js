import "./Menu.css";
import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import AppContext from "./AppContext";
import config from "./config";

export default function Menu() {
  const [menus, setMenus] = useState([]);
  const { type } = useParams();
  const { order_id, setOrderId } = useContext(AppContext);

  useEffect(() => {
    fetch(`${config.API_URL}/menu_items?type=${type}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setMenus(data);
      });
  }, [type]);

  function addToBag(menu) {
    fetch(`${config.API_URL}/order_items`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...menu, order_id }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (!order_id) {
          setOrderId(data.order_id);
          localStorage.order_id = data.order_id;
        }
      });
  }

  return (
    <>
      <div className="menu-by-type">
        {menus.map((menu, index) => {
          return (
            <div className="full-menu-row">
              <div className="full-menu-column" key={index}>
                <h2>Item: {menu.name}</h2>
                <h3>Description: {menu.description}</h3>
                <img
                  className="menu-img"
                  src={menu.image_url}
                  alt={menu.name}
                />
                <h4>
                  Price:{" "}
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(menu.price)}
                </h4>
                <button
                  className="add-to-order-button"
                  onClick={() => addToBag(menu)}
                >
                  Add to Order
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
