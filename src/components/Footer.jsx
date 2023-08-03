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
            <img src="src\images\facebook.png" />
            <img src="src\images\instagram.png" />
            <img src="src\images\linkedin.png" />
            <img src="src\images\twitter.png" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
