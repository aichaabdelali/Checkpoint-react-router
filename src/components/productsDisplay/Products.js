import React from "react";
import { Link, Route } from "react-router-dom";
import Product from "./Product";

const productsData = [
  {
    id: 1,
    item: "NIKE Liteforce Blue Sneakers",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie.",
    inStock: "Available",
  },
  {
    id: 2,
    item: "U.S. POLO ASSN. Slippers",
    description: "Mauris finibus, massa eu tempor volutpat, magna dolor euismod dolor.",
    inStock: "Available",
  },
  {
    id: 3,
    item: "ADIDAS Adispree Running Shoes",
    description:
      "Maecenas condimentum porttitor auctor. Maecenas viverra fringilla felis, eu pretium.",
    inStock: "Available",
  },
  {
    id: 4,
    item: "Lee Cooper Mid Sneakers",
    description: "Ut hendrerit venenatis lacus, vel lacinia ipsum fermentum vel. Cras.",
    inStock: "Out of Stock",
  },
];

const Products = ({ match }) => {
  let ProductsLink = productsData.map((product) => {
    return (
      <li>
        <Link to={`${match.url}/${product.id}`}>{product.item}</Link>
      </li>
    );
  });
  return (
    <div>
      <div>
        <h3>Products</h3>
        <ul>
          <li>{ProductsLink}</li>
        </ul>
      </div>
      <div>
        <Route
          path={`${match.url}/:productid`}
          render={(props) => <Product productsData={productsData} {...props} />}
        />
        <Route exact path={`${match.url}`} render={() => <div>Please select a product</div>} />
      </div>
    </div>
  );
};
export default Products;
