import React, { useEffect } from "react";
import ReactDom from "react-dom";

const App = () => {
  function add(num1, num2) {
    const sum = num1 + num2;
    return sum;
  }
  useEffect(() => {
    console.log(add(1, 2));
  }, [add]);
  return (
    <div>
      <input type="text" id="num1" name="num1" />
    </div>
  );
};
ReactDom.render(<App />, document.querySelector("#root"));
