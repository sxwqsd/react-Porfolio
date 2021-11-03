import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';




function App() {
  return (
    <div >
      <Router>
        <Nav/>
        <Switch>
          <Route path="/" exact component={() => <About />} />
          <Route path="/Portfolio" exact component={() => <Portfolio />} />
          <Route path="/contact" exact component={() => <Contact />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
