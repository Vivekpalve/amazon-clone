import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Checkout from "./Components/Checkout";
import { BrowserRouter as Router, Routers, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="app">
        <Routers>
          <Route link="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route link="/home">
            <Header />
            <Home />
          </Route>
        </Routers>
      </div>
    </Router>
  );
}

export default App;
