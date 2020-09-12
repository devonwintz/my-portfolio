import React, { useState } from "react";
import "./script";
import esi from "./images/projects/rsz_esi-laptop.png";
import businessWebsiteTemplate from "./images/projects/simple-business-website-template1.png";
import nwisi from "./images/projects/North West Investments Security Inc.png";
import tr from "./images/projects/true-radiance.png";
import nders from "./images/projects/Nders.png";
import ollos from "./images/projects/Ollo.png";
import devdynamics from "./images/projects/Coming Soon.png";

const Content = () => {
  const workTypes = [
    "Custom Websites & WordPress Themes",
    "Flyers & Business Cards Designs",
  ];
  const [myWorkType, setMyWorkType] = useState("");
  const [showDiv, setShowDiv] = useState(true);

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
          I am Devon Wintz, a Front-end Web Developer and UI/UX enthusiast from
          Georgetown, Guyana. I create custom websites to help businesses and
          individuals do better online. I primarily use JavaScript and its
          associated libriaries and frameworks such as Vue, React, jQuery, etc,
          but picking up a new framework or language is not a problem.
          <br />
          <br />
          <span style={{ fontWeight: "bold" }}>Goal: </span>
          <span>
            To help start-ups, small businesses and individuals achieve high
            quality websites and expectional user experience.
          </span>
          <br />
          <button className="btn mt-5" style={{ borderColor: "#1c2331" }}>
            <a
              href="https://drive.google.com/file/d/1R0YeP2WiEFDYXr96UqSCSQVrzQfQ6u5h/view?usp=sharing++"
              download
              rel="noopener noreferrer"
              target="_blank"
            >
              Download CV
            </a>
          </button>
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

          <span>JavaScript/ReactJs/VueJS</span>
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

          <span>WordPress/Drupal/Joomla</span>
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
                width: "50%",
                fontSize: "100%",
                backgroundColor: "#1c2331",
              }}
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              50%
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
            Click on the two options below to view some of my work.
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
                <div>
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
                <div>
                  <span style={{ fontWeight: "bold" }} className="workType">
                    Graphics Designs
                  </span>
                  <br />{" "}
                  <span style={{ fontSize: "85%" }} className="workTypeDetails">
                    Logo, Flyer/Poster & Business Card Designs
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
                <div
                  className="col-md-6 websites"
                  style={{ textAlign: "center" }}
                >
                  <figure>
                    <a
                      href="https://ecosolutionsfurniture.com"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <img src={esi} alt="esi-screen-of-website" width="80%" />
                    </a>
                    <figcaption>Eco-solutions Furniture Inc.</figcaption>
                  </figure>
                </div>

                <div
                  className="col-md-6 websites"
                  style={{ textAlign: "center" }}
                >
                  <figure>
                    <a
                      href="https://devonwintz.github.io/simple-business-website-template/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <img
                        src={businessWebsiteTemplate}
                        alt="simple-business-website-template"
                        width="80%"
                      />
                    </a>
                    <figcaption>Simple Business Website Template.</figcaption>
                  </figure>
                </div>

                <div
                  className="col-md-6 websites"
                  style={{ textAlign: "center" }}
                >
                  <figure>
                    <a href="/#" rel="noopener noreferrer" target="_blank">
                      <img
                        src={devdynamics}
                        alt="devdynamics-enterprise-coming-soon"
                        width="80%"
                        style={{ border: "1px solid #A8A8A8" }}
                      />
                    </a>
                    <figcaption>DevDynamics Enterprise.</figcaption>
                  </figure>
                </div>
              </div>
            </div>
          )}

          {myWorkType === "Flyers & Business Cards Designs" && (
            <div className="flyers-business-cards">
              <div className="row">
                <div className="col-md-6" style={{ textAlign: "center" }}>
                  <figure>
                    <a
                      href="https://drive.google.com/uc?id=1nROYrcMp6J4cv4hogTMAPfbaitGabhju"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <img src={nwisi} alt="nwisi-flyer" width="80%" />
                    </a>
                    <figcaption>
                      North West Investments Security Inc. (Flyer)
                    </figcaption>
                  </figure>
                </div>
                <div className="col-md-6" style={{ textAlign: "center" }}>
                  <figure>
                    <a
                      href="https://drive.google.com/uc?id=1kydlM-wgCbssIak-3e9n2CnNWKNL43Y1"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <img src={tr} alt="tr-business-card" width="80%" />
                    </a>
                    <figcaption>
                      True Radiance: Makeup Artist (Business Card)
                    </figcaption>
                  </figure>
                </div>
                <div className="col-md-6" style={{ textAlign: "center" }}>
                  <figure>
                    <a
                      href="https://drive.google.com/uc?id=1PGMgAs2-VBaDVVBN5iX7r1hvyYQmlZdx"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <img src={nders} alt="nders-logo" width="80%" />
                    </a>
                    <figcaption>NDERS (Logo)</figcaption>
                  </figure>
                </div>
                <div className="col-md-6" style={{ textAlign: "center" }}>
                  <figure>
                    <a
                      href="https://drive.google.com/uc?id=1iCkAYXjl3p4hphcaSHK2Rki3o4XyWxn8"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <img src={ollos} alt="ollo's-business-card" width="80%" />
                    </a>
                    <figcaption>Ollo's Barbershop (Business Card)</figcaption>
                  </figure>
                </div>
              </div>
            </div>
          )}
        </div>

        {/*Div that is hidden on click*/}
        {showDiv === true && (
          <div className="hide-div">
            <div className="row">
              <div
                className="col-md-6 websites"
                style={{ textAlign: "center" }}
              >
                <figure>
                  <a
                    href="https://ecosolutionsfurniture.com"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <img src={esi} alt="esi-screen-of-website" width="80%" />
                  </a>
                  <figcaption>Eco-solutions Furniture Inc.</figcaption>
                </figure>
              </div>
              <div
                className="col-md-6 websites"
                style={{ textAlign: "center" }}
              >
                <figure>
                  <a
                    href="https://devonwintz.github.io/simple-business-website-template/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <img
                      src={businessWebsiteTemplate}
                      alt="simple-business-website-template"
                      width="80%"
                    />
                  </a>
                  <figcaption>Simple Business Website Template.</figcaption>
                </figure>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Content;
