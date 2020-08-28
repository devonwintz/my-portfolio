import React from "react";
/*import Navbar from "./Navbar";*/

const Header = () => {
  return (
    <div className="container-fluid header">
      <div className="row hero-text">
        <div className="col-md-12 mt-5 intro">Hey, there</div>
        <div className="col-md-12 intro">I'm</div>
        <div className="col-md-12 my-name">DEVON WINTZ</div>
        <div className="col-md-12 mb-5 intro">
          A Freelance
          <span
            class="txt-rotate"
            data-period="2000"
            data-rotate='[ " Web Developer.", " Designer." ]'
          ></span>
        </div>
      </div>
    </div>
  );
};

export default Header;
