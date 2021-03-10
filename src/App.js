import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Home from './components/Home/Home';
import TeamDetail from './components/TeamDetail/TeamDetail';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/team/:id">
          <TeamDetail />
        </Route>
        <Route path="*">
          <h1>404!!</h1>
        </Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
