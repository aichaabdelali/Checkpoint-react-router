import React from "react";
import { Link, Route } from "react-router-dom";
import productsData from "./ProductsData";
import Product from "./Product";

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
        <ul>{ProductsLink}</ul>
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
