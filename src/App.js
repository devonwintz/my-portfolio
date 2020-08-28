import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./components/script";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import "./App.css";

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
