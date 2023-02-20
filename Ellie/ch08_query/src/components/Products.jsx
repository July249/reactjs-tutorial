import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
// import useProduct from "../hooks/useProduct";

export default function Products() {
  const [checked, setChecked] = useState(false);
  // react-query를 사용하여 네트워크 통신을 구현하였을 때 치명적인 함정이 존재한다
  // 브라우저를 클릭할 때마다, 토글할 때마다, 등등 모든 변화에 대해 매번 네트워크 요청이 반복적으로 이루어지고 있음을 확인할 수 있다
  //
  const {
    isLoading,
    error,
    data: products,
  } = useQuery(["products", checked], async () => {
    console.log("fetching...");
    return fetch(`data/${checked ? "sale_" : ""}products.json`).then((res) => res.json());
  });
  // const [loading, error, products] = useProduct({ salesOnly: checked });
  const handleChange = () => setChecked((prev) => !prev);

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error}</p>;

  return (
    <>
      <input id="checkbox" type="checkbox" value={checked} onChange={handleChange} />
      <label htmlFor="checkbox">Show Only Sale</label>
      <ul>
        {products?.map((product) => (
          <li key={product.id}>
            <article>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          </li>
        ))}
      </ul>
    </>
  );
}
