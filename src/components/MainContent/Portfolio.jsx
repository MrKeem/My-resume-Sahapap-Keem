function Portfolio() {
  return (
    <div className="portfolio-wrapper">
      <div className="maincontent-secondary-wrapper">
        <h1 className="maincontent-secondary ">Portfolio</h1>
      </div>

      <div className="maincontent-detail">
        <ul>
          <li>
            <a
              href="https://github.com/MrKeem/Clone-get-that-job-2J3K"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="icon">
                <img
                  src="\images\github-svgrepo-com.svg"
                  className="icon-img"
                  width={22}
                  height={22}
                />
              </div>
            </a>
            <a
              href="https://clone-get-that-job-2-j3-k-frontend.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              GET THAT JOB →
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Portfolio;
