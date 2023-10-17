import React, { useState, useEffect } from "react";

function Address() {
  /*const handleClick = (event) => {
    let target = event.target;
    while (target) {
      if (
        target.classList &&
        target.classList.contains("maincontent-left-content-wrapper")
      ) {
        console.log("Clicked maincontent-left-content-wrapper");
        // Perform actions for the targeted element
        return;
      }
      target = target.parentNode;
    }

    console.log("Clicked outside maincontent-left-content-wrapper");
    // Perform actions for clicking outside the targeted element
  };*/

  const [isTargeted, setIsTargeted] = useState(false);

  const handleLinkClick = () => {
    if (!isTargeted) {
      setIsScroll(false);
    }

    setIsTargeted(true);
  };

  const handleOutsideClick = (event) => {
    if (
      isTargeted &&
      !event.target.closest(".maincontent-left-content-wrapper")
    ) {
      setIsTargeted(false);
    }
  };

  // Attach an event listener to the document for outside clicks
  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isTargeted]);

  const [isScroll, setIsScroll] = useState(false);
  const handleScroll = () => {
    setIsScroll(true);
    if (isScroll && isTargeted) {
      setIsTargeted(false);
    }
  };
  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [isScroll]);

  return (
    <div className="maincontent-left-content">
      <a href="#maincontent-left-address" onClick={handleLinkClick}>
        <div
          className={`maincontent-left-content-wrapper ${
            isTargeted ? "target" : "untarget"
          }`}
          id="maincontent-left-address"
        >
          <div className="maincontent-secondary-wrapper">
            <h1 className="maincontent-secondary ">Address</h1>
          </div>

          <div className="maincontent-detail">
            <ul>
              <li>591/40 Srinakarin Rd, Suan Luang, Bangkok 10250</li>
            </ul>
          </div>

          <div className="image-wrapper">
            <div className="image-area"></div>
          </div>
        </div>
      </a>
    </div>
  );
}

export default Address;
