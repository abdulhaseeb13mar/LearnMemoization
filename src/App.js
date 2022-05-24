import { useState } from "react";
import Child from "./Child";

function App() {
  const [parentNum, setParentNum] = useState(0);
  const [childNum, setChildNum] = useState(0);

  const incrementParentNum = () => {
    setParentNum((parentNum) => parentNum + 1);
  };

  return (
    <div className="r-c-c container">
      <div className="c-c-c parent">
        <div className="c-c-c">
          <h1>parent number: {parentNum}</h1>
          <button onClick={incrementParentNum}>
            Click to Increment parent number
          </button>
        </div>
        <Child number={childNum} />
      </div>
    </div>
  );
}

export default App;
