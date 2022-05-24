function Child({ number }) {
  console.log("Child rendered");
  return (
    <div className="r-c-c child-container">
      <div className="c-c-c parent">
        <div className="c-c-c">
          <h1>child number: {number}</h1>
          <button>Click to Increment Child number</button>
        </div>
      </div>
    </div>
  );
}

export default Child;
