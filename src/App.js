import { useState, useCallback, useMemo } from "react";
import Child from "./Child";

function App() {
  const [parentNum, setParentNum] = useState(0);
  const [childNum, setChildNum] = useState(0);
  const [arr, setArr] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ]);

  const changeChildNumber = useCallback((num) => setChildNum(num), []);

  const incrementParentNum = () => {
    setParentNum((parentNum) => parentNum + 1);
  };

  const getLargestNumber = () => {
    console.log("computing largest number");
    return Math.max(...arr);
  };

  const largestNumber = useMemo(() => getLargestNumber(), [arr]);

  // const changeChildNumber = (num) => {
  //   setChildNum(num);
  // };

  const changeArray = () => {
    setArr([100, 200, 400, 600, 500]);
  };

  return (
    <div className="r-c-c container">
      <div className="c-c-c parent">
        <div className="c-c-c">
          <h1>parent number: {parentNum}</h1>
          <button onClick={incrementParentNum}>
            Click to Increment parent number
          </button>
          <h1>largest number: {largestNumber}</h1>
          <button onClick={changeArray}>Change Array</button>
        </div>
        <Child changeNumber={changeChildNumber} number={childNum} />
      </div>
    </div>
  );
}

export default App;
