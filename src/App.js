import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Category from "./components/Category";
import Products from "./components/productsDisplay/Products";
import Login from "./components/Admin/Login";
import PrivateRoute from "./components/Admin/PrivateRoute";
import "./App.css";

const Home = () => {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/Category"> Category </Link>
          </li>
          <li>
            <Link to="/Products"> Products </Link>
          </li>
          <li>
            <Link to="/Login"> Admin Area </Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route path="/Category" component={Category} />
        <Route path="/Login" component={Login} />
        <PrivateRoute auth={isAuth} path="/Products" component={Products} />
      </Switch>
    </div>
  );
}
export default App;
