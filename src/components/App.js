import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./script";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="">
          <Header />
          <Content />
          <Footer />
        </div>

        <Switch>
          <Route path="/wp-templates" component={Footer}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
