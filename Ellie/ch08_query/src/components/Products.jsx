import { useState } from "react";
import useProducts from "../hooks/useProduct";

export default function Products() {
  const [checked, setChecked] = useState(false);
  const [loading, error, products] = useProducts({ salesOnly: checked });
  const handleChange = () => setChecked((prev) => !prev);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>{error}</p>;

  return (
    <>
      <input id="checkbox" type="checkbox" value={checked} onChange={handleChange} />
      <label htmlFor="checkbox">Show Only Sale</label>
      <ul>
        {Products.map((product) => (
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
