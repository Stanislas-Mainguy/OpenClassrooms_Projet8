import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import Appartment from './pages/AppartmentPage';
import About from './pages/AboutPage';


const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/error404" component={ErrorPage} />
        <Route path="/appartment" component={Appartment} />
      </Switch>
    </Router>
  );
};

export default Routes;