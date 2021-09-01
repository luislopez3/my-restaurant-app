import React, { useEffect, useState } from "react";

export default function FullMenu() {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/menu_items/menus")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setMenus(data);
      });
  }, []);

  return (
    <>
      <div>
        <h1>
          To create an order, return to the Welcome page to select the
          appropriate menu for the current time.
        </h1>
        <li>
          {menus.map((menu, index) => {
            return (
              <div key={index}>
                <h2>{menu.type} Menu</h2>
                <h3>Plate: {menu.name}</h3>
                <h4>Description: {menu.description}</h4>
                <img src={menu.image_url} alt={menu.name} />
                <h4>Price: ${menu.price}</h4>
              </div>
            );
          })}
        </li>
      </div>
    </>
  );
}
