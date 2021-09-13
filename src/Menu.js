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
    <div className="full-menu">
      {menus.map((menu, index) => {
        return (
          <ul key={index}>
            <p>{menu.name}</p>
            <p>{menu.description}</p>
            <img className="menu-img" src={menu.image_url} alt={menu.name} />
            <p>
              Price:{" "}
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(menu.price)}
            </p>
            <button onClick={() => addToBag(menu)}>Add to Bag</button>
          </ul>
        );
      })}
      </div>
    </>
  );
}
