import React, { Component } from "react";
import Home from "./pages/Home";
import { Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

class App extends Component {
  render() {
    return (
      <section>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/error" component={Error} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </section>
    );
  }
}

export default App;
