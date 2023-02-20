import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
// import useProduct from "../hooks/useProduct";

export default function Products() {
  const [checked, setChecked] = useState(false);
  // custom hook으로 처리하였을 때는 각각의 컴포넌트를 호출할 때마다 로직이 제실행되어 중복되는 데이터 메모리를 가지게 되었다
  // react query를 이용하여 데이터를 'products'라는 키값을 가지는 메모리에 저장을 해둔다
  // 따라서 데이터 요청이 한번만 일어나게 된다
  // 다른 곳에서 재사용되는 경우 'products' 키에 저장한 메모리의 값(캐쉬된 값)을 가져온다
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
