import React, { useState } from "react";
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
  const [isLogged, setIsLogged] = useState(false);
  const handleLogin = () => {
    setIsLogged(true);
  };

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
        <Route path="/Products" component={Products} />
        <Route path="/Category" component={Category} />
        <PrivateRoute path="/admin" isLogged={isLogged} component={Login} />
        <Route
          path="/login"
          render={(props) => <Login isLogged={isLogged} handleLogin={handleLogin} {...props} />}
        />
      </Switch>
    </div>
  );
}
export default App;
