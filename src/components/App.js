import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import "./script";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Header />
          <Content />
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
