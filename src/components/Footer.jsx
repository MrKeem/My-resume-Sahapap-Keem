import "../../src/App.css";
function Footer() {
  return (
    <>
      <div className="footer-triangle-container">
        <div className="footer-triangle" />
      </div>
      <div className="footer">
        <div className="footer-wrapper">
          <div className="contact-me">
            Contact <span className="contact-me-me">Me</span>
          </div>
          <a href="mailto: mr.sahapap.sk@gmail.com" className="email">
            mr.sahapap.sk@gmail.com
          </a>
          <div className="icon-wrapper">
            <a
              href="https://www.linkedin.com/in/sahapap-samathi-238570226/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="icon">
                <img src="src\images\linkedin.svg" className="icon-img" />
              </div>
            </a>

            <a
              href="https://github.com/MrKeem"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="icon">
                <img
                  src="src\images\github-svgrepo-com.svg"
                  className="icon-img"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
