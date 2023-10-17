import React, { useState, useEffect } from "react";

function AboutMe() {
  const [isTargeted, setIsTargeted] = useState(false);

  const handleLinkClick = () => {
    if (!isTargeted) {
      setIsScroll(false);
    }

    setIsTargeted(true);

    //  console.log("isTargeted", isTargeted);
    // console.log("isScroll", isScroll);
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
    // console.log("when scroll isTargeted", isTargeted);
    // console.log("when scroll isScroll", isScroll);
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
      <a href="#maincontent-right-aboutme" onClick={handleLinkClick}>
        <div
          className={`maincontent-right-content-wrapper ${
            isTargeted ? "target" : "untarget"
          }`}
          id="maincontent-right-aboutme"
        >
          <div className="maincontent-primary-wrapper">
            <h1 className="maincontent-primary ">About Me</h1>
          </div>

          {isTargeted ? (
            <div className="maincontent-detail">
              <ul>
                <li>
                  Although I didn't graduate in computer field, my{" "}
                  <span className="engaging">passion for development</span>{" "}
                  driven me to eagerly enroll in a{" "}
                  <span className="engaging">
                    Full-Stack Developer bootcamp
                  </span>{" "}
                  cultivate my skills and bridge the gap. My{" "}
                  <span className="engaging">prior experience</span> has
                  equipped me with valuable skills that I believe will be
                  beneficial in my pursuit of becoming a{" "}
                  <span className="engaging">Full-Stack Developer</span>. I am
                  actively seeking opportunities to achieve this goal.
                </li>
              </ul>
            </div>
          ) : (
            <div className="maincontent-detail">
              <ul>
                <li>
                  Although I didn't graduate in computer field, my{" "}
                  <span className="engaging">passion for development</span>{" "}
                  driven me to eagerly enroll in a{" "}
                  <span className="engaging">
                    Full-Stack Developer bootcamp
                  </span>{" "}
                  cultivate my skills and bridge the gap.{" "}
                  <span className="see-more-content">[See More]</span>{" "}
                </li>
              </ul>
            </div>
          )}
        </div>
      </a>
    </div>
  );
}

export default AboutMe;

/*
      <h1 className="maincontent-primary ">About Me</h1>
      <p className="maincontent-detail">
        I do not directly graduate in computer field but I interest to
                be developer so I join Full-Stack Developer bootcamp to develop
                my skill. Furthermore, I still have my old skill for old career
                that I think they can help me in the new carrer. Now, I looking
                the opportunity to be Full-Stack Developer this is my first
                goal.
      </p>
*/

/*
"While my formal education is not in the computer field, my passion for development has driven me to pursue a career as a Full-Stack Developer. I eagerly enrolled in a Full-Stack Developer bootcamp to cultivate my skills and bridge the gap. Leveraging my existing skills from my previous career, I am confident they will complement and enhance my abilities in this new venture. I am actively seeking opportunities to embark on my journey as a Full-Stack Developer, which is my primary goal."


*/
