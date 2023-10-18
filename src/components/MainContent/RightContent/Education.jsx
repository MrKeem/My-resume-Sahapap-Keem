import React, { useState, useEffect } from "react";

function Education() {
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
      !event.target.closest(".maincontent-right-content-wrapper")
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
    if (isScroll) {
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
    <div className="maincontent-right-content">
      <a href="#maincontent-right-education" onClick={handleLinkClick}>
        <div
          className={`maincontent-right-content-wrapper ${
            isTargeted ? "target" : "untarget"
          }`}
          id="maincontent-right-education"
        >
          <div className="maincontent-primary-wrapper">
            <h1 className="maincontent-primary ">Education</h1>
          </div>

          <div className="maincontent-secondary-wrapper">
            <p className="maincontent-secondary">
              Bachelor of Engineering In Electrical Engineering <br />
              —King Mongkut's Institute of Technology Ladkrabang
            </p>
            <p className="maincontent-times">Graduated 2022</p>
          </div>

          <div className="maincontent-detail">
            <ul>
              <li>GPA 3.11</li>
            </ul>
          </div>
          {isTargeted ? (
            <div className="hidden-content">
              <div
                className="maincontent-secondary-wrapper"
                id="hidden-content"
              >
                <p className="maincontent-secondary">
                  Full Stack JavaScript Developer Bootcamp <br />
                  —TechUp
                </p>
                <p className="maincontent-times">Jun.2023 - Oct.2023</p>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </a>
    </div>
  );
}

export default Education;
