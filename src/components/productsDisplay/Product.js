import React from "react";

const Product = ({ match, productsData }) => {
  let product = productsData.find((prod) => prod.id === match.params.productid);
  let productDisplay;
  if (product)
    productDisplay = (
      <div>
        <h3>Product</h3>
        <h4>{product.item}</h4>
        <p>{product.description}</p>
        <hr />
        <h3>{product.inStock}</h3>
      </div>
    );
  else productDisplay = <h4> The product you selected does not exist </h4>;
  return <div>{productDisplay}</div>;
};

export default Product;
