import React, { Component } from "react";

const Nutrient = ({detail: {name, value, unit}}) => (
  <React.Fragment>
  <li>{`${name}: ${value} ${unit}`}</li>
  </React.Fragment>
)

export default Nutrient;