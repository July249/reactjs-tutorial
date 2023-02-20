import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import Products from "./Products";

export default function MainProducts() {
  const [showLeftProducts, setShowLeftProducts] = useState(true);
  const [showRightProducts, setShowRightProducts] = useState(true);

  const client = useQueryClient();

  // Products 컴포넌트를 두번 호출하기 때문에 useProduct 자체도 두번 실행된다
  // 따라서 데이터 호출 자체도 두번 되는 것이다
  // 이는 성능상에 이슈를 야기할 수 있다
  // Query를 이용하여 cache, retry를 이용하여 보자
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
      {/* 새로운 상품이 추가되어 다시 데이터를 불러와야하는 상황이라고 생각해보자
      이 경우 기존의 useQuery 키를 invalid 시켜야 한다 */}
      <button
        onClick={() => {
          client.invalidateQueries(["products", false]);
        }}
      >
        새로운 정보로 업데이트 해야함 !
      </button>
    </main>
  );
}
