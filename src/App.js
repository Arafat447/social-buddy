import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotFound from './Components/NotFoound/NotFound';
import PostDetail from './Components/PostDetail/PostDetail';
import Header from './Components/Header/Header';


function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
          <Home></Home>
          </Route>
          <Route path="/post/:postId">
            <PostDetail></PostDetail>
          </Route>
          <Route exact path="/">
          <Home></Home>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
