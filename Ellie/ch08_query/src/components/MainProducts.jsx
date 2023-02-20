import { useState } from "react";
import Products from "./Products";

export default function MainProducts() {
  const [showLeftProducts, setShowLeftProducts] = useState(true);
  const [showRightProducts, setShowRightProducts] = useState(true);

  // Products 컴포넌트를 두번 호출하기 때문에 useProduct 자체도 두번 실행된다
  // 따라서 데이터 호출 자체도 두번 되는 것이다
  // 이는 성능상에 이슈를 야기할 수 있다
  return (
    <main className="container">
      <div>
        {showLeftProducts && <Products />}
        <button onClick={() => setShowLeftProducts((show) => !show)}>Toggle</button>
      </div>
      <div>
        {showRightProducts && <Products />}
        <button onClick={() => setShowRightProducts((show) => !show)}>Toggle</button>
      </div>
    </main>
  );
}
