import React, { useState } from "react";
import Order from "./Order";

const Restaurant = () => {
  return (
    <div className="orders">
      <ul>
        <h3>Restaurant Orders</h3>
        <Order orderType="pizza" />
        <Order orderType="Salads" />
        <Order orderType="Chocolate cake" />
      </ul>
    </div>
  );
};

export default Restaurant;
