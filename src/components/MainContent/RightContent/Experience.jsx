import React, { useState, useEffect } from "react";

function Experience() {
  const [isTargeted, setIsTargeted] = useState(false);
  const [imageId, setImageId] = useState(1);

  const changeImage = () => {
    if (imageId === 1) {
      setImageId(2);
    } else if (imageId === 2) {
      setImageId(1);
    }
  };

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
      setImageId(1);
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
      setImageId(1);
    }
  };
  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [isScroll]);

  // Attach an event listener to the document for outside clicks
  /*useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
      document.removeEventListener("scroll", handleScroll);
    };
  }, [isTargeted]);*/

  return (
    <div className="maincontent-right-content">
      <a href="#maincontent-right-experience" onClick={handleLinkClick}>
        <div
          className={`maincontent-right-content-wrapper ${
            isTargeted ? "target" : "untarget"
          }`}
          id="maincontent-right-experience"
        >
          <div className="maincontent-primary-wrapper">
            <h1 className="maincontent-primary ">Experience</h1>
          </div>

          <div className="maincontent-secondary-wrapper">
            <p className="maincontent-secondary">
              Test Engineer - Delta Electronics (Thailand) PCL.
            </p>
            <p>Aug.2022 - May.2023</p>
          </div>

          {isTargeted ? (
            <div className="maincontent-detail">
              <ul>
                <li>
                  Proficient in setting up, repairing, and maintaining testing
                  machinery to meet manufacturing test needs.{" "}
                  <span className="engaging"></span>
                </li>
                <li>
                  Conduct preventive maintenance on equipment and fixtures to
                  optimize functionality.
                </li>
                <li>
                  Skilled in configuring test equipment for new production line
                  models, ensuring a seamless setup.
                </li>
                <li>
                  Diligently monitor and manage work processes to enhance
                  efficiency and reduce defects.
                </li>
                <li>
                  Collaborated with cross-functional teams to strategize and
                  coordinate efforts for new product launches and production
                  updates.
                </li>
                <li>
                  Expertise in debugging programs for testing, maintaining
                  tester equipment and tools, and repairing fixtures crucial for
                  product stability.
                </li>
                <li>
                  Analyzed and diagnosed failures, proposing effective solutions
                  to enhance product quality.
                </li>
                <li>
                  Ensured testing processes align with production plans and
                  targets, maintaining stability and accuracy throughout.
                </li>
              </ul>
            </div>
          ) : (
            <div className="maincontent-detail">
              <ul>
                <li>
                  Proficient in setting up, repairing, and maintaining testing
                  machinery to meet manufacturing test needs.{" "}
                  <span className="see-more-content">[See More]</span>{" "}
                </li>
              </ul>
            </div>
          )}
          <div className="image-wrapper">
            {imageId === 1 ? (
              <div className="image-area">
                <img src="src\images\experience\Experience1.jpg" />
              </div>
            ) : imageId === 2 ? (
              <div className="image-area">
                <img src="src\images\experience\Experience2.jpg" />
              </div>
            ) : (
              ""
            )}
            {imageId === 1 && isTargeted ? (
              <div className="image-description">
                I interned at Delta International Exchange Program from July to
                December 2021
              </div>
            ) : imageId === 2 && isTargeted ? (
              <div className="image-description">
                I participated in an overseas training program held in Taiwan in
                December 2022
              </div>
            ) : (
              ""
            )}
            {imageId === 1 ? (
              <button className="triangle-right" onClick={changeImage}></button>
            ) : imageId === 2 ? (
              <button className="triangle-left" onClick={changeImage}></button>
            ) : (
              ""
            )}
          </div>
        </div>
      </a>
    </div>
  );
}

export default Experience;

/*
          <div className="maincontent-secondary-wrapper">
            <p className="maincontent-secondary">
              Test Engineer - Delta Electronics (Thailand) PCL.
            </p>
            <p>Aug.2022 - May.2023</p>
          </div>


            <div className="maincontent-detail">
              <ul>
                <li>
                  Proficient in setting up, repairing, and maintaining testing
                  machinery to meet manufacturing test needs. Conduct preventive
                  maintenance on equipment and fixtures to optimize
                  functionality. Skilled in configuring test equipment for new
                  production line models, ensuring a seamless setup. Diligently
                  monitor and manage work processes to enhance efficiency and
                  reduce defects. Collaborate with cross-functional teams to
                  strategize and coordinate efforts for new product launches and
                  production updates. Expertise in debugging programs for
                  testing, maintaining tester equipment and tools, and repairing
                  fixtures crucial for product stability. Analyze and diagnose
                  failures, proposing effective solutions to enhance product
                  quality. Ensure testing processes align with production plans
                  and targets, maintaining stability and accuracy throughout.
                </li>
              </ul>
            </div>
*/

/*
          <div className="image-wrapper">
            {imageId === 1 ? (
              <div className="image-area">
                <img src="src\images\experience\Experience1.jpg" />
              </div>
            ) : imageId === 2 ? (
              <div className="image-area">
                <img src="src\images\experience\Experience2.jpg" />
              </div>
            ) : (
              ""
            )}
            {imageId === 1 && isTargeted ? (
              <div className="image-description">
                I interned at Delta International Exchange Program from July to
                December 2021
              </div>
            ) : imageId === 2 && isTargeted ? (
              <div className="image-description">
                I participated in an overseas training program held in Taiwan in
                December 2022
              </div>
            ) : (
              ""
            )}
            {imageId === 1 ? (
              <button className="triangle-right" onClick={changeImage}></button>
            ) : imageId === 2 ? (
              <button className="triangle-left" onClick={changeImage}></button>
            ) : (
              ""
            )}
          </div>
*/

/*
<div
          className={`maincontent-right-content-wrapper ${
            isTargeted ? "target" : "untarget"
          }`}
          id="maincontent-right-experience"
        >
          <div className="maincontent-primary-wrapper">
            <h1 className="maincontent-primary ">Experience</h1>
          </div>

          {isTargeted ? (
            <div className="maincontent-detail">
              <ul>
                <li>
                  Proficient in setting up, repairing, and maintaining testing
                  machinery to meet manufacturing test needs. Conduct preventive
                  maintenance on equipment and fixtures to optimize
                  functionality. Skilled in configuring test equipment for new
                  production line models, ensuring a seamless setup. Diligently
                  monitor and manage work processes to enhance efficiency and
                  reduce defects. Collaborate with cross-functional teams to
                  strategize and coordinate efforts for new product launches and
                  production updates. Expertise in debugging programs for
                  testing, maintaining tester equipment and tools, and repairing
                  fixtures crucial for product stability. Analyze and diagnose
                  failures, proposing effective solutions to enhance product
                  quality. Ensure testing processes align with production plans
                  and targets, maintaining stability and accuracy throughout.
                </li>
              </ul>
            </div>
          ) : (
            <div className="maincontent-detail">
              <ul>
                <li>
                  Proficient in setting up, repairing, and maintaining testing
                  machinery to meet manufacturing test needs.{" "}
                  <span className="see-more-content">[See More]</span>{" "}
                </li>
              </ul>
            </div>
          )}
        </div>
*/
