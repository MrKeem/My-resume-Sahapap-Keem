import SkillSet from "./LeftContent/SkillSet";
import Address from "./LeftContent/Address";

function LeftContent() {
  return (
    <div className="maincontent-left">
      <div className="maincontent-left-wrapper">
        <Address />
        <SkillSet />
      </div>
    </div>
  );
}

export default LeftContent;
