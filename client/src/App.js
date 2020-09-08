import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Moretattoos from './Components/Moretattoos'
import Footer from './Components/Footer'
import Certificate from  './Components/Certificate'
import Flashes from './Components/Flashes'
import About from './Components/About'
import { Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/moretattoos" component={Moretattoos} />
          <Route exact path="/certificate" component={Certificate} />
          <Route exact path="/flashes" component={Flashes} />
          <Route exact path="/about" component={About} />
        </Switch>
        <hr className="hrstyle" />
        <Footer />
      </div>
    );
  }
}
export default App;
