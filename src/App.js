import React,{ useEffect} from "react";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Checkout from "./Components/Checkout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import { auth } from "./firebase";
import { useStateValue } from "./Components/StateProvider";

function App() {

  const [{} ,dispatch] = useStateValue();

  useEffect(() =>{
    //will only  run when app component loads...
    auth.onAuthStateChanged(authUser =>{
      console.log('THE USER IS >>> ',authUser);

      if(authUser){
        // the user just logged in / the  user was logged in
        dispatch({
          type:'SET_USER',
          user:authUser
        })
      }
      else{
        //the user is logged out
        dispatch({
          type:'SET_USER',
          user:null
        })
      }
    })
  }, [])
  
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/login"
            element={
              <>
                <Login />
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
