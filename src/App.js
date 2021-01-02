
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Home, About, Contact, Covid, Weather, Stocks, News } from "./components";
function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/contact" exact component={() => <Contact />} />
          <Route path="/covid" exact component={() => <Covid />} />
          <Route path="/weather" exact component={() => <Weather />} />
          <Route path="/stocks" exact component={() => <Stocks />} />
          <Route path="/news" exact component={() => <News />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
