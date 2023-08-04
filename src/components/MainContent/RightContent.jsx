import AboutMe from "./RightContent/AboutMe";
import Education from "./RightContent/Education";
import Experience from "./RightContent/Experience";

function RightContent() {
  return (
    <div className="maincontent-right">
      <div className="maincontent-right-wrapper">
        <AboutMe />
        <Experience />
        <Education />
      </div>
    </div>
  );
}

export default RightContent;
