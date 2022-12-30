import { useEffect, useState } from "react";
import { getShoredCart } from "../utilities/utilities";

const useCart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = getShoredCart();
    const savedCart = [];
    const keys = Object.keys(storedCart);

    fetch(`${process.env.REACT_APP_API_DOMAIN}/foodByKeys`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(keys),
    })
      .then((res) => res.json())
      .then((foods) => {
        for (const id in storedCart) {
          const addedFood = foods.find((p) => p._id === id);
          if (addedFood) {
            addedFood.quantity = storedCart[id];
            savedCart.push(addedFood);
          }
        }
        setCart(savedCart);
      });
  }, []);

  return { cart, setCart };
};

export default useCart;
