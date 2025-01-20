import { useState } from "react";
export default function () {
  const [count, setCount] = useState(0);
  const [increamentBy, setIncreamentBy] = useState(1);
  const increase = () => setCount(count + increamentBy);
  function decrease() {
    setCount(count - increamentBy);
  }
  function increaseIncreament() {
    setIncreamentBy(increamentBy + 1);
  }
  return (
    <div>
      <h3>Count value is:{count} </h3>
      <button onClick={increase}> Increase</button>
      <button onClick={decrease}> Decrease</button>
      <h1> We are increasing the value by: {increamentBy}</h1>
      <button onClick={increaseIncreament}>Increament</button>
    </div>
  );
}
