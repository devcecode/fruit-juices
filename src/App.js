import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


import Header from './Header'
import Greet from "./Greet";
import Explore from "./Explore";
import Map from "./Map";
import Whatsapp from "./Whatsapp";
import History from './History'

import { Provider, useSelector } from "react-redux";
import { createStore } from "redux";

const initialState = {
  active: "lola"
}

const reducer = (state, action) => {
  
  console.log(action)

  if(action.type === 'SET_ACTIVE') {
    return { ...state, active: action.payload}
  }

  return {
    state
  }
}

const store =  createStore(reducer, initialState)



const App = () => {

  
  
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <>
            <Header />
            <Switch>
              <Route exact path="/">
                <Greet />
              </Route>
              <Route exact path="/explore">
                <Explore />
              </Route>
              <Route exact path="/map">
                <Map />
              </Route>
              <Route exact path="/whatsapp">
                <Whatsapp />
              </Route>
              <Route exact path="/history">
                <History />
              </Route>
            </Switch>
          </>
        </Router>
      </div>
    </Provider>
  );
}

export default App