import "./App.css";
import HomePage from "./pages/homepage/homePage.jsx";
import ShopPage from "./pages/shop/shopPage.jsx";
import { Switch, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
