import "./App.css";
import Header from "./components/Header.jsx";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import React, { useState } from "react";

const showConetent = () => {
  return <MainContent />;
};

/*function App() {
  return (
    <div className="App">
      <Header />
      <button onClick={showConetent}> XXX</button>
      <Footer />
    </div>
  );
}*/

function App() {
  const [showContent, setShowContent] = useState(false);

  const [isSliderClosed, setIsSliderClosed] = useState(true);

  const toggleSlider = () => {
    setIsSliderClosed(!isSliderClosed);
  };

  return (
    <div className="App" tabIndex={1}>
      <Header />
      {/*Example slider */}
      {/*<div className="container">
        <button className="button" onClick={toggleSlider}>
          {isSliderClosed ? "Hide Him!" : "No, Bring Him Back!"}
        </button>
        <div className={`slider ${isSliderClosed ? "closed" : ""}`}>
          <h1>I'm here to be hidden. ;-)</h1>
          <p>
            Bacon ipsum dolor sit amet swine jerky jowl pork belly sausage
            brisket, beef ribs meatloaf chuck beef. Flank corned beef prosciutto
            cow. Pork tail swine meatball brisket cow. Turducken short loin
            doner pork belly frankfurter flank kevin ball tip meatloaf ham
            capicola. Tri-tip meatloaf pancetta tenderloin frankfurter shoulder
            swine turkey porchetta strip steak biltong pork. Bresaola turkey
            boudin filet mignon spare ribs jowl t-bone kevin tri-tip brisket
            chuck beef ribs.
          </p>
        </div>
      </div>*/}
      <MainContent />
      {/*<button onClick={() => setShowContent(!showContent)}>
        Toggle Content
      </button>

      <div>
        <MainContent active={showContent} />
  </div>*/}

      <Footer />
    </div>
  );
}

export default App;

/*
      <input type="checkbox" name="toggle" id="toggle"></input>
      <label htmlFor="toggle"></label>
      <div className="container">
        <h1>TRY IT</h1>
      </div>
      <div className="message">
        <h1>massage box</h1>
      </div> */
