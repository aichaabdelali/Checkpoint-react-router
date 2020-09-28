import React from "react";
import { Link, Route } from "react-router-dom";

const Category = ({ match }) => {
  return (
    <div>
      <ul>
        <li>
          <Link to={`${match.url}/shoes`}> shoes</Link>
        </li>
        <li>
          <Link to={`${match.url}/boots`}> boots</Link>
        </li>
        <li>
          <Link to={`${match.url}/footwear`}> footwear</Link>
        </li>
      </ul>
      <Route
        path={`${match.path}/:name`}
        render={({ match }) => (
          <div>
            {" "}
            <h4>{match.params.name}</h4>{" "}
          </div>
        )}
      />
    </div>
  );
};

export default Category;
