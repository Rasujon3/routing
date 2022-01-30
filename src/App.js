import { Route, Switch, Redirect } from "react-router-dom";
import Admin from "./components/Admin";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import NotFound from "./components/NotFound";
import Posts from "./components/Posts";
import Product from "./components/Product";
import Products from "./components/Products";

function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/products/:id" component={Product} />
        <Route path="/products" component={Products} />
        <Route path="/products/:id" component={Products} />
        <Route path="/posts/:year?/:month?" component={Posts} />
        <Route path="/admin" component={Admin} />
        <Route path="/not-found" component={NotFound} />
        <Redirect to="/not-found" />
      </Switch>
    </>
  );
}

export default App;
