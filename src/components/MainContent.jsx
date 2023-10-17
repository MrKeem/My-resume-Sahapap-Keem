import React, { useState, useEffect } from "react";
import Address from "./MainContent/LeftContent/Address";
import Optional from "./MainContent/LeftContent/Optional";
import SkillSet from "./MainContent/LeftContent/SkillSet";

import AboutMe from "./MainContent/RightContent/AboutMe";
import Education from "./MainContent/RightContent/Education";
import Experience from "./MainContent/RightContent/Experience";

/*function MainContent() {
  return (
    <div className="maincontent-wrapper">
      <div className="maincontent-left">
        <div className="maincontent-left-wrapper">
          <Address />
          <SkillSet />
        </div>
      </div>
      <div className="maincontent-right">
        <div className="maincontent-right-wrapper">
          <AboutMe />
          <Experience />
          <Education />
        </div>
      </div>
    </div>
  );
}*/

const MainContent = () => {
  const [isSliderClosed, setIsSliderClosed] = useState(true);

  const toggleSlider = () => {
    setIsSliderClosed(!isSliderClosed);
  };

  /*useEffect(() => {
    // Function to remove fragment identifier from URL
    const removeFragmentIdentifier = () => {
      window.location.hash = "";
    };

    // Add a click event listener to the document body
    document.body.addEventListener("click", (event) => {
      const target = event.target;

      // Check if the click target is not an <a> element
      if (target.tagName !== "A") {
        removeFragmentIdentifier(); // Remove fragment identifier when clicking outside of <a>
      }
    });

    // Clean up the event listener when the component unmounts
    return () => {
      document.body.removeEventListener("click", removeFragmentIdentifier);
    };
  }, []);*/
  return (
    <>
      <div className="Toggle-button">
        <div className="button-wrapper">
          <button
            className={`main-content-switch button ${
              isSliderClosed ? "closed" : ""
            }`}
            onClick={toggleSlider}
          >
            {isSliderClosed ? "OPEN" : "CLOSE"}
          </button>
        </div>
        {/* <div
          className={`main-content-switch bar ${
            isSliderClosed ? "closed" : ""
          }`}
        />
         <div
          className={`main-content-switch bar-left ${
            isSliderClosed ? "closed" : ""
          }`}
        />
       <div
          className={`main-content-switch bar-right ${
            isSliderClosed ? "closed" : ""
          }`}
        />*/}
      </div>

      <div className={`main-content ${isSliderClosed ? "closed" : ""}`}>
        <div className="maincontent-wrapper">
          <div className="maincontent-left-wrapper">
            <Address />
            <SkillSet />
          </div>

          <div className="maincontent-right-wrapper">
            <AboutMe />
            <div className="rectangle" />
            <Experience />
            <div className="rectangle" />
            <Education />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainContent;
