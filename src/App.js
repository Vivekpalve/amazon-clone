import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Checkout from "./Components/Checkout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path='/' element = {<><Header/><Home/></>}/>
          <Route path='/checkout' element={<><Header/><Checkout/></>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

