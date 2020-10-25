import React from "react";

const Product = ({ match, products }) => {
  let product = products.find((product) => product.id === match.params.productID);
  console.log(product);

  return (
    <div>
      <h1>{product.name}</h1> <br></br>
      {product.description} <hr></hr>
      {product.status}
    </div>
  );
};

export default Product;
