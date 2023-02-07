import React, { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";

export default function AppCounter() {
  /** 4.18 카운터 상태 끌어올리기 - 내 방법
   * const [count1, setCount1] = useState(0);
   * const [count2, setCount2] = useState(0);
   * return (
   *  <div className="container">
   *    <div className="banner">
   *      Total Count: {count1 + count2} {count1 + count2 > 10 ? "🔥" : "❄️"}
   *    </div>
   *    <div className="counters">
   *      <Counter count={count1} setCount={setCount1} />
   *      <Counter count={count2} setCount={setCount2} />
   *    </div>
   *  </div>
   * );
   */

  const [count, setCount] = useState(0);
  const handleClick = () => setCount((prev) => prev + 1);
  return (
    <div className="container">
      <div className="banner">
        Total Count: {count} {count > 10 ? "🔥" : "❄️"}
      </div>
      <div className="counters">
        <Counter total={count} onClick={handleClick} />
        <Counter total={count} onClick={handleClick} />
      </div>
    </div>
  );
}
