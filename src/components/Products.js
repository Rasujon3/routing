import React, { Component } from "react";

function Products(props) {
  return (
    <div>
      <h1>Products</h1>
      <span> {props.match.params.id} </span>
    </div>
  );
}

export default Products;
