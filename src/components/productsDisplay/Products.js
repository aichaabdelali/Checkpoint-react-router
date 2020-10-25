import React, { useState } from "react";
import { Link, Route } from "react-router-dom";
import Product from "./Product.js";

const Products = (match) => {
  const products = [
    {
      id: 1,
      name: "NIKE Liteforce Blue Sneakers",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie.",
      status: "Available",
    },
    {
      id: 2,
      name: "U.S. POLO ASSN. Slippers",
      description: "Mauris finibus, massa eu tempor volutpat, magna dolor euismod dolor.",
      status: "Available",
    },
    {
      id: 3,
      name: "ADIDAS Adispree Running Shoes",
      description:
        "Maecenas condimentum porttitor auctor. Maecenas viverra fringilla felis, eu pretium.",
      status: "Available",
    },
    {
      id: 4,
      name: "Lee Cooper Mid Sneakers",
      description: "Ut hendrerit venenatis lacus, vel lacinia ipsum fermentum vel. Cras.",
      status: "Out of Stock",
    },
  ];

  const [content, setContent] = useState("select a product");

  const handleContent = () => {
    setContent(
      <Route
        path={`/products/:productID`}
        render={(props) => <Product products={products} {...props} />}
      />
    );
  };

  return (
    <div className="products">
      <div className="productLinks">
        <h1>Products</h1>
        <ul>
          {products.map((product) => (
            <li>
              <Link to={`/products/${product.id}`} onClick={handleContent}>
                {product.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="productContent">{content}</div>
    </div>
  );
};

export default Products;
