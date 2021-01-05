import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Home, About, Contact, Covid, Weather, Comment, News} from "./components";
import {Welcome, Login, Register} from "./pages";

export const CredentialsContext = React.createContext(null)

function App() {
  const credentialsState = useState(null);
  return (
    <div className="App">
      <CredentialsContext.Provider value={credentialsState}>
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/contact" exact component={() => <Contact />} />
          <Route path="/covid" exact component={() => <Covid />} />
          <Route path="/weather" exact component={() => <Weather />} />
          <Route path="/Comment" exact component={() => <Comment />} />
          <Route path="/news" exact component={() => <News />} />
          <Route exact path = "/todos"> <Welcome /> </Route>
          <Route path="/register" exact component={() => <Register />} />
          <Route path="/login" exact component={() => <Login />} />
        </Switch>
      </Router>
      </CredentialsContext.Provider>
    </div>
  );
}

export default App;
