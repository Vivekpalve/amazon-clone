import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkouts">
            <Header />
            <h1>Hello you can checkout all the items from here n </h1>
          </Route>
          <Route path="/">
            {/* Header */}
            <Header />
            {/* Home */}
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
