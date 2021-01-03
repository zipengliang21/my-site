import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./views/Home";
import NoMatch from "./views/NoMatch";

ReactDOM.render(
    <Router>
       <Switch>
          <Route exact path="/">
             <Home/>
          </Route>
          <Route exact path="/projects">
          </Route>
          <Route exact path="/resume">
          </Route>
          <Route path="*">
             <NoMatch/>
          </Route>
       </Switch>
       <App />
    </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
