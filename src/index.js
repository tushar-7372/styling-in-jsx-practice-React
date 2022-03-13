//Create a React app from scratch.
import React from "react";
import ReactDOM from "react-dom";

var msg = "";
var today = new Date();
var time = today.getHours();

var customStyle = {
  color: "red"
};

if ((time >= 0) & (time < 12)) {
  msg = "Good morinig";
  customStyle.color = "red";
} else if ((time >= 12) & (time < 16)) {
  msg = "Good Afternoon";
  customStyle.color = "green";
} else {
  msg = "Good evening";
  customStyle.color = "blue";
}

//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.

//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.

//Morning = red, Afternoon = green, Night = blue.
console.log(customStyle);
ReactDOM.render(
  <h1 className="heading" style={customStyle}>
    {msg}
  </h1>,
  document.getElementById("root")
);
