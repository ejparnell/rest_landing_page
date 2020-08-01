import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import Nav from './components/Nav';
import Menu from './components/Menu';
import Order from './components/Order';
import Home from './components/Home';
import Locations from './components/Locations';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

const MainRouter = () => (
    <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/menu" component={Menu}/>
          <Route exact path="/order" component={Order}/>
          <Route exact path="/locations" component={Locations} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        <Footer />
    </Router>
);

export default MainRouter;