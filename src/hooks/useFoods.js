import { useEffect, useState } from "react";

const useFoods = () => {
  const [allFoods, setAllFoods] = useState([]);
  const [isFoodLoading, setIsFoodLoading] = useState(true);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_DOMAIN}/food`)
      .then((res) => res.json())
      .then((data) => {
        setAllFoods(data);
        setIsFoodLoading(false);
      });
  }, []);

  return [allFoods, setAllFoods, isFoodLoading];
};

export default useFoods;

//"https://raw.githubusercontent.com/motalibpathan/red-onion/main/public/fakeData.json"
