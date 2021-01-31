import React, { useState } from "react";
//Components
import WebProjectImage from "./Projects/ProjectImages";
import GraphicsProjectImage from "./Projects/ProjectImages";
//Includes
import "./script";
//---Websites Images---
import esi from "./images/projects/rsz_esi-laptop.png";
import businessWebsiteTemplate from "./images/projects/Simple-Business-Website-Template-New.png";
import devdynamics from "./images/projects/Coming Soon.png";
//---Graphics Design Images---
import sampleBusinessDesign from "./images/projects/sample-business-design.png";
import tr from "./images/projects/true-radiance.png";
import nders from "./images/projects/Nders.png";
import ollos from "./images/projects/Ollo.png";
import esiDesign from "./images/projects/esi-design.jpg";
import nwisFlyer from "./images/projects/nwis-flyer.jpg";
import beats from "./images/projects/beats-design.jpg";

const Content = (props) => {
  //Graphics Design Array
  let graphicProjectImageArr = [
    <GraphicsProjectImage
      src={beats}
      url="https://drive.google.com/file/d/1kO7H3EV0jhLRkBXUvBGajQbjezA3djNA/preview"
      title="Sample Business Website (Landing Page)"
    />,
    <GraphicsProjectImage
      src={esiDesign}
      url="https://drive.google.com/file/d/1D2M7yNYeqt4NLnLziv1AgXW17TOvCfiY/preview"
      title="Eco Solutions Furniture Inc. (Landing Page)"
    />,
    <GraphicsProjectImage
      src={sampleBusinessDesign}
      url="https://drive.google.com/file/d/17AipQN0hNzJk-w52wowZC9mZVzyUefrK/preview"
      title="Sample Business Website. (Landing Page)"
    />,
    <GraphicsProjectImage
      src={nwisFlyer}
      url="https://drive.google.com/file/d/15QR5fnmUZeBR0z55ZAY09tI1otdNrOEY/preview"
      title="North West Investments Security Inc. (Flyer)"
    />,
    <GraphicsProjectImage
      src={nders}
      url="https://drive.google.com/file/d/1PGMgAs2-VBaDVVBN5iX7r1hvyYQmlZdx/preview"
      title="NDERS (Logo)"
    />,
    <GraphicsProjectImage
      src={tr}
      url="https://drive.google.com/file/d/1kydlM-wgCbssIak-3e9n2CnNWKNL43Y1/preview"
      title="True Radiance: Makeup Artist (Business Card)"
    />,
    <GraphicsProjectImage
      src={ollos}
      url="https://drive.google.com/file/d/1iCkAYXjl3p4hphcaSHK2Rki3o4XyWxn8/preview"
      title="Ollo's Barbershop (Business Card)"
    />,
  ];

  //Website Design & Development Array
  let webProjectImgArr = [
    <WebProjectImage
      src={esi}
      url="https://ecosolutionsfurniture.com"
      title="Eco-Solutions Furniture Inc."
    />,
    // <WebProjectImage
    //   src={businessWebsiteTemplate}
    //   url="https://devonwintz.github.io/simple-business-website-template/"
    //   title="Simple Business Website Template"
    // />,
    <WebProjectImage
      src={devdynamics}
      url="/#"
      title="DevDynamics Enterprise"
    />,
  ];

  //Type of Work Array
  const workTypes = [
    "Custom Websites & WordPress Themes",
    "Flyers & Business Cards Designs",
  ];
  const [myWorkType, setMyWorkType] = useState("");
  const [showDiv, setShowDiv] = useState(true);

  const [active, setActive] = useState("active");
  const [inActive, setInActive] = useState("");

  return (
    <div className="container content">
      <div className="row about-me-content" id="about-me">
        <div className="col-md-12">
          <div className="heading">
            Some Words About Me
            <hr style={{ backgroundColor: "#000000" }} />
          </div>
        </div>
        <div className="col-md-6 mt-3 content">
          I am Devon Wintz, a Website & Mobile App Developer and UI/UX
          enthusiast from Georgetown, Guyana. I create custom websites to help
          businesses and individuals do better online. I primarily use
          JavaScript and its associated libriaries and frameworks such as Vue,
          React, jQuery, etc, but picking up a new framework or language is not
          a problem.
          <br />
          <br />
          <span style={{ fontWeight: "bold" }}>Goal: </span>
          <span>
            To help start-ups, small businesses and individuals achieve high
            quality websites and expectional user experience.
          </span>
          <br />
          {/* <button className="btn mt-5" style={{ borderColor: "#1c2331" }}>
            <a
              href="https://drive.google.com/file/d/1LKIotIyjlfzhn4fiBg7wiO93Hx-IZ_dH/view?usp=sharing"
              download
              rel="noopener noreferrer"
              target="_blank"
            >
              Download My CV
            </a>
          </button> */}
        </div>
        <div className="col-md-6 about-me-progress mt-3">
          <div className="skills mt-4">
            Skills
            <hr style={{ backgroundColor: "#000000" }} />
          </div>
          <span>HTML5</span>
          <div className="progress mb-2" style={{ textAlign: "center" }}>
            <div
              className="progress-bar"
              role="progressbar"
              style={{
                width: "90%",
                fontSize: "100%",
                backgroundColor: "#1c2331",
              }}
              aria-valuenow="90"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              90%
            </div>
          </div>

          <span>CSS3/SASS/SCSS</span>
          <div className="progress mb-2" style={{ textAlign: "center" }}>
            <div
              className="progress-bar"
              role="progressbar"
              style={{
                width: "85%",
                fontSize: "100%",
                backgroundColor: "#1c2331",
              }}
              aria-valuenow="85"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              85%
            </div>
          </div>

          <span>JavaScript/React</span>
          <div className="progress mb-2" style={{ textAlign: "center" }}>
            <div
              className="progress-bar"
              role="progressbar"
              style={{
                width: "70%",
                fontSize: "100%",
                backgroundColor: "#1c2331",
              }}
              aria-valuenow="80"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              70%
            </div>
          </div>

          <span>React</span>
          <div className="progress mb-2" style={{ textAlign: "center" }}>
            <div
              className="progress-bar"
              role="progressbar"
              style={{
                width: "80%",
                fontSize: "100%",
                backgroundColor: "#1c2331",
              }}
              aria-valuenow="80"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              80%
            </div>
          </div>

          <span>Ionic</span>
          <div className="progress mb-2" style={{ textAlign: "center" }}>
            <div
              className="progress-bar"
              role="progressbar"
              style={{
                width: "60%",
                fontSize: "100%",
                backgroundColor: "#1c2331",
              }}
              aria-valuenow="80"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              60%
            </div>
          </div>

          <span>WordPress</span>
          <div className="progress mb-2" style={{ textAlign: "center" }}>
            <div
              className="progress-bar"
              role="progressbar"
              style={{
                width: "70%",
                fontSize: "100%",
                backgroundColor: "#1c2331",
              }}
              aria-valuenow="70"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              85%
            </div>
          </div>
          <span>Photoshop</span>
          <div className="progress mb-2" style={{ textAlign: "center" }}>
            <div
              className="progress-bar"
              role="progressbar"
              style={{
                width: "70%",
                fontSize: "100%",
                backgroundColor: "#1c2331",
              }}
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              70%
            </div>
          </div>
          <span>Figma</span>
          <div className="progress mb-2" style={{ textAlign: "center" }}>
            <div
              className="progress-bar"
              role="progressbar"
              style={{
                width: "80%",
                fontSize: "100%",
                backgroundColor: "#1c2331",
              }}
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              80%
            </div>
          </div>
        </div>
      </div>

      <div className="row latest-work" id="my-work">
        <div className="col-md-12 mt-4">
          <div className="heading">
            My Work
            <hr style={{ backgroundColor: "#000000" }} />
          </div>
          <div
            className="mb-5"
            style={{ textAlign: "center", fontStyle: "italic" }}
          >
            Click the two options below to view some of my work.
          </div>
        </div>

        <div className="col-md-12 btn-group">
          {workTypes.map((workType) => (
            <button
              type="button"
              className="btn btn-lg btn-default col-md-12 mb-5"
              key={workType}
              onClick={() => {
                setMyWorkType(workType);
                setShowDiv(false);
              }}
            >
              {workType === "Custom Websites & WordPress Themes" && (
                <div
                  className={active}
                  onClick={() => {
                    setActive("active");
                    setInActive("");
                  }}
                >
                  <span style={{ fontWeight: "bold" }} className="workType">
                    Website Development
                  </span>
                  <br />{" "}
                  <span style={{ fontSize: "85%" }} className="workTypeDetails">
                    Custom-Built Websites & Custom-Built WordPress Themes
                  </span>
                </div>
              )}
              {workType === "Flyers & Business Cards Designs" && (
                <div
                  className={inActive}
                  onClick={() => {
                    setActive("");
                    setInActive("active");
                  }}
                >
                  <span style={{ fontWeight: "bold" }} className="workType">
                    Graphics Designs
                  </span>
                  <br />{" "}
                  <span style={{ fontSize: "85%" }} className="workTypeDetails">
                    Logo, Flyer/Poster, Website & Business Card Designs
                  </span>
                </div>
              )}
            </button>
          ))}
        </div>
        <div className="row latest-work-img mt-5">
          {myWorkType === "Custom Websites & WordPress Themes" && (
            <div className="websites">
              <div className="row">
                {webProjectImgArr.map((item, index) => {
                  return (
                    <div key={index} className="col-md-6 websites">
                      {item}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {myWorkType === "Flyers & Business Cards Designs" && (
            <div className="flyers-business-cards">
              <div className="row">
                {graphicProjectImageArr.map((item, index) => {
                  return (
                    <div key={index} className="col-md-6 websites">
                      {item}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/*Div that is hidden on click*/}
        {showDiv === true && (
          <div className="hide-div">
            <div className="row">
              {webProjectImgArr.map((item, index) => {
                return (
                  <div key={index} className="col-md-6 websites">
                    {item}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Content;
