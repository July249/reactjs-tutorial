import { useState, useEffect } from "react";

export default function useProducts({ salesOnly }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setLoading(true);
    setError(undefined);
    fetch(`data/${salesOnly ? "sales_" : ""}products.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log("🔥 뜨끈한 데이터를 네트워크에서 받아옴");
        setProducts(data);
        console.log(products);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));

    return () => {
      console.log("Clean-Up!!");
    };
  }, [salesOnly]);

  return [loading, error, products];
}
