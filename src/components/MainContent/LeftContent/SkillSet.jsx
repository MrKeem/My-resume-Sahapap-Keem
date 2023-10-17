import React, { useState, useEffect } from "react";

function SkillSet() {
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
    <div className="maincontent-left-content">
      <a href="#maincontent-left-skillset" onClick={handleLinkClick}>
        <div
          className={`maincontent-left-content-wrapper ${
            isTargeted ? "target" : "untarget"
          }`}
          id="maincontent-left-skillset"
        >
          <div className="maincontent-secondary-wrapper">
            <h1 className="maincontent-secondary ">SkillSet</h1>
          </div>

          <div className="maincontent-detail">
            <ul>
              <li>
                <div>Front-End Development</div>
                <div className="image-wrapper">
                  <img src="src\images\skillset\Front End\html_plain_wordmark_logo_icon_146476.svg" />
                  <img src="src\images\skillset\Front End\javascript_original_logo_icon_146455.svg" />
                  <img src="src\images\skillset\Front End\css_plain_wordmark_logo_icon_146574.svg" />
                  <img src="src\images\skillset\Front End\tailwindcss_logo_icon_167923.svg" />
                  <img src="src\images\skillset\Front End\Shadcn-ui2.jpg" />
                  <img src="src\images\skillset\Front End\react_original_wordmark_logo_icon_146375.svg" />
                  <img src="src\images\skillset\Front End\vite-svgrepo-com.svg" />
                </div>
              </li>

              <li>
                <div>Back-End Development</div>
                <div className="image-wrapper">
                  <img src="src\images\skillset\Back End\nodejs-1.svg" />
                  <img src="src\images\skillset\Back End\express_original_wordmark_logo_icon_146528.svg" />
                  <img src="src\images\skillset\Back End\mongodb_plain_wordmark_logo_icon_146423.svg" />
                  <img src="src\images\skillset\Back End\postgresql_plain_wordmark_logo_icon_146390.svg" />
                  <img src="src\images\skillset\Back End\supabase-icon.svg" />
                </div>
              </li>

              <li>
                <div>Microsoft Word</div>
                <div className="image-wrapper">
                  <img src="src\images\skillset\microsoft_office_word_logo_icon_145724.svg" />
                </div>
              </li>

              <li>
                <div>Microsoft Excel</div>
                <div className="image-wrapper">
                  <img src="src\images\skillset\microsoft_office_excel_logo_icon_145720.svg" />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </a>
    </div>
  );
}

export default SkillSet;
