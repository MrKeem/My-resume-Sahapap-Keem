function Header() {
  return (
    <>
      <div className="header">
        <div className="header-wrapper">
          <div className="cycle-ring">
            <div className="my-image">
              <img src="src\images\My-pic (2).jpg" />
              <h2>
                Passionate About Tech, Aspiring
                <hr />
                <span>Full Stack Developer</span>
              </h2>
              <a href="mailto: mr.sahapap.sk@gmail.com" className="email">
                Hire Me
              </a>
            </div>
          </div>

          <div className="name">
            <div className="first-name">
              <div>Sahapap</div>
            </div>
            <div className="last-name">
              <div>Samathi</div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-triangle-container">
        <div className="header-triangle" />
      </div>
    </>
  );
}

export default Header;

/*
@media only screen and (min-width: 1440px) {
  .name {
    width: 100%;
    padding-left: 75px;
    color: var(--font-color);
    font-size: 126px;
    line-height: 112px;
    text-align: center;
  }
} */

/* <div className="">Hire Me </div> */
