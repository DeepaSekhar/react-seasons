import React from "react";
import ReactDom from "react-dom";

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};
const seasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());

  return (
    <div>
      <h1>{season === "winter" ? "burr its freezing" : "lets go to beach"}</h1>
    </div>
  );
};
export default seasonDisplay;
