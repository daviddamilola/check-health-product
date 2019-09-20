import React, { Component } from "react";
import Nutrient from "./Nutrient.jsx";

const Nutrients = ({ list }) => (
  <ul>
    {list.map(nutrient => <Nutrient key={ nutrient.nutrient_id} detail={nutrient} />)}
  </ul>
);

export default Nutrients;
