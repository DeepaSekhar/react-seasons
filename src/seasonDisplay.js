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
    <div>{season === "winter" ? "burr its freezing" : "lets go to beach"}</div>
  );
};
export default seasonDisplay;
