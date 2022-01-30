import React from "react";

function Product(props) {
  const handleClick = () => {
    console.log(props);
    props.history.replace("/products");
  };
  return (
    <div>
      <h1>Product</h1>
      <button onClick={handleClick}>Save a product</button>
    </div>
  );
}

export default Product;
