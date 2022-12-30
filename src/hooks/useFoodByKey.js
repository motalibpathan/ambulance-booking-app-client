import { useEffect, useState } from "react";

const useFoodByKey = ({ keys }) => {
  const [foods, setFoods] = useState([]);
  console.log(keys);
  useEffect(() => {
    if (keys) {
      fetch(`${process.env.REACT_APP_API_DOMAIN}/foodByKeys`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(keys),
      })
        .then((res) => res.json())
        .then((foods) => setFoods(foods));
    }
  }, [keys]);
  return [foods];
};

export default useFoodByKey;
